import React, { useState, useEffect, useRef } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';
import { 
  Send, 
  RefreshCw, 
  FileText, 
  X, 
  Database,
  Layers
} from 'lucide-react';

interface Source {
  document_name: string;
  page_number: number;
  section_hierarchy: string;
  content: string;
  image_ids: string[];
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
}

interface DBStatus {
  online: boolean;
  database_count: number;
  documents: { document_name: string; count: number }[];
}

// Visual descriptions for images from raw MD guidelines to show premium visual placeholder
const IMAGE_DESCRIPTIONS: Record<string, string> = {
  IMAGE_002: "UPI Transaction Flow Map: Illustrates 10 steps of a basic push request between Payer PSP, UPI Switch, Payee PSP, Remitter Bank, and Beneficiary Bank.",
  IMAGE_003: "ReqChkTxn API Connectivity Path: Explains the check status flow diagram from Bank/PSP App to UPI and URCS back-office.",
  IMAGE_004: "AutoUpdate DRC Process Flow: Visualizes the 4-step sequence where URCS triggers a status check to the Remitter bank and receives a response.",
  IMAGE_005: "AutoUpdate Notification Sequence: Depicts how UPI updates the back-office status and notifies the payer/payee PSPs.",
  IMAGE_006: "AutoUpdate Deemed TCC (Credit Online) Diagram: Details how UPI queries the Beneficiary bank for deemed transaction credits.",
  IMAGE_007: "AutoUpdate Deemed RET Reversal Flow: Shows how UPI triggers a debit reversal to the Remitter bank after the Beneficiary bank returns a RET status.",
  IMAGE_008: "AutoUpdate Deemed RET Reversal Timeout Flow: Focuses on handling timeouts in the return reversal request.",
  IMAGE_009: "Debit Reversal Confirmation (DRC) Flow: Visualizes complaint initiation and the 5-step response sequence with the Remitter bank.",
  IMAGE_011: "P2M Complaint Flow with Merchant Node: Details how P2M disputes route to the Payee PSP and Merchant for resolution.",
  IMAGE_012: "P2M Deemed Transaction Flow: Displays the D1 and Vectorize database query routing for merchant payments with unknown status.",
  IMAGE_013: "Online Refund Process: Maps the 9-step proactive refund loop initiated by the Merchant through the Beneficiary bank to the Remitter bank."
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `### Welcome to the UPI UDIR & OSG Assistant

I am your technical assistant for reasoning across the **UPI Help (UDIR)** manual and the **UPI Operating & Settlement Guidelines (OSG)**.

Select a document filter in the sidebar or ask questions about reason codes, transaction types, settlement cycles, penalties, or cross-document contradiction checks (like TAT discrepancies).`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [documentFilter, setDocumentFilter] = useState<'both' | 'upi_udir' | 'upi_osg'>('both');
  const [isLoading, setIsLoading] = useState(false);
  const [dbStatus, setDbStatus] = useState<DBStatus | null>(null);
  const [activeSource, setActiveSource] = useState<Source | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load database status on mount
  useEffect(() => {
    fetchStatus();
  }, []);

  // Scroll to bottom on message update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const fetchStatus = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/status`);
      if (res.ok) {
        const data = await res.json();
        setDbStatus(data);
      }
    } catch (e) {
      console.error("Failed to load D1 status", e);
    }
  };

  const handleReset = async () => {
    if (!window.confirm("Are you sure you want to reset the D1 database schemas? All ingested data will be deleted.")) return;
    setIsResetting(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/ingest/reset`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer dev-secret-token`
        }
      });
      if (res.ok) {
        alert("Database schemas reset successfully. Please run the ingestion command to re-index your documents.");
        fetchStatus();
      } else {
        alert("Failed to reset database: " + await res.text());
      }
    } catch (e: any) {
      alert("Error: " + e.message);
    } finally {
      setIsResetting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Append user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Setup placeholder for assistant streamed response
    setMessages(prev => [...prev, { role: 'assistant', content: '', sources: [] }]);

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({ role: m.role, content: m.content })),
          document_filter: documentFilter,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned error: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let currentSources: Source[] = [];

      if (!reader) return;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        
        // Split by server-sent events format (lines starting with event:)
        const events = buffer.split('\n\n');
        // Keep the last partial event in the buffer
        buffer = events.pop() || '';

        for (const event of events) {
          if (!event.trim()) continue;
          
          const lines = event.split('\n');
          let eventType = 'message';
          let dataStr = '';

          for (const line of lines) {
            if (line.startsWith('event:')) {
              eventType = line.slice(6).trim();
            } else if (line.startsWith('data:')) {
              dataStr = line.slice(5).trim();
            }
          }

          if (eventType === 'sources') {
            try {
              currentSources = JSON.parse(dataStr);
              setMessages(prev => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last && last.role === 'assistant') {
                  last.sources = currentSources;
                }
                return next;
              });
            } catch (e) {
              console.error("Failed to parse sources event", e);
            }
          } else if (eventType === 'message') {
            try {
              const parsed = JSON.parse(dataStr);
              const text = parsed.text || '';
              setMessages(prev => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last && last.role === 'assistant') {
                  last.content += text;
                }
                return next;
              });
            } catch (e) {
              // Ignore line split issues
            }
          } else if (eventType === 'error') {
            try {
              const parsed = JSON.parse(dataStr);
              setMessages(prev => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last && last.role === 'assistant') {
                  last.content += `\n\n**Error during stream:** ${parsed.error}`;
                }
                return next;
              });
            } catch (e) {}
          }
        }
      }
    } catch (error: any) {
      console.error("Chat error", error);
      setMessages(prev => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last && last.role === 'assistant') {
          last.content = `Sorry, I encountered an error while processing your request: **${error.message}**. Please make sure the local dev server is running and database schema is loaded.`;
        }
        return next;
      });
    } finally {
      setIsLoading(false);
      fetchStatus();
    }
  };

  // Helper to format content with premium visual tags for explicit, inferred and conflicting claims
  const renderMessageContent = (content: string) => {
    // Basic Markdown formatting helper
    return content.split('\n').map((line, index) => {
      // Heading 3
      if (line.startsWith('###')) {
        return <h3 key={index}>{line.replace('###', '').trim()}</h3>;
      }
      // Bullet items
      if (line.startsWith('*') || line.startsWith('-')) {
        const text = line.slice(1).trim();
        // Highlight status words
        let badge = null;
        if (text.toLowerCase().includes('explicitly stated')) {
          badge = <span className="evidence-badge explicit">Explicitly Stated</span>;
        } else if (text.toLowerCase().includes('inferred')) {
          badge = <span className="evidence-badge inferred">Inferred</span>;
        } else if (text.toLowerCase().includes('conflicting') || text.toLowerCase().includes('contradiction')) {
          badge = <span className="evidence-badge conflict">Contradictory / Ambiguous</span>;
        } else if (text.toLowerCase().includes('not found')) {
          badge = <span className="evidence-badge notfound">Not Found</span>;
        }

        return (
          <li key={index} style={{ marginLeft: '20px', marginBottom: '4px' }}>
            {badge ? <span style={{ marginRight: '8px' }}>{badge}</span> : null}
            {text.replace(/^[A-Za-z\s]+:\s*/, '')}
          </li>
        );
      }
      return <p key={index} style={{ marginBottom: '12px' }}>{line}</p>;
    });
  };

  return (
    <div className="app-container">
      {/* Sidebar Panel */}
      <aside className="sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <Layers style={{ color: 'var(--accent-secondary)' }} size={28} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800 }}>
            UPI RAG <span className="gradient-text">Engine</span>
          </h2>
        </div>

        {/* Filter Section */}
        <div className="filter-container">
          <label className="filter-label">Document Search Scope</label>
          <div className="filter-group">
            <div 
              className={`filter-option ${documentFilter === 'both' ? 'active' : ''}`}
              onClick={() => setDocumentFilter('both')}
            >
              Both Manuals
            </div>
            <div 
              className={`filter-option ${documentFilter === 'upi_udir' ? 'active' : ''}`}
              onClick={() => setDocumentFilter('upi_udir')}
            >
              UPI UDIR
            </div>
            <div 
              className={`filter-option ${documentFilter === 'upi_osg' ? 'active' : ''}`}
              onClick={() => setDocumentFilter('upi_osg')}
            >
              UPI OSG
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.03)', 
            padding: '16px', 
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            fontSize: '13px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Database size={16} style={{ color: 'var(--accent-secondary)' }} />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Index Status (CF D1)</span>
            </div>
            {dbStatus ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'between' }}>
                  <span>Total Chunks:</span>
                  <span style={{ marginLeft: 'auto', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {dbStatus.database_count}
                  </span>
                </div>
                {dbStatus.documents.map((d, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'between', fontSize: '12px' }}>
                    <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {d.document_name === 'upi_udir' ? 'UPI UDIR Manual' : 'UPI OSG Guidelines'}
                    </span>
                    <span style={{ marginLeft: 'auto' }}>{d.count} chunks</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)' }}>Loading index database info...</div>
            )}
          </div>

          {/* Reset / Ingest Button */}
          <button 
            className="btn btn-secondary" 
            onClick={handleReset}
            disabled={isResetting}
            style={{ width: '100%', gap: '8px', fontSize: '13px' }}
          >
            <RefreshCw size={14} className={isResetting ? 'spin-anim' : ''} />
            {isResetting ? 'Resetting D1...' : 'Reset D1 Indexes'}
          </button>
        </div>
      </aside>

      {/* Main Chat Panel */}
      <main className="main-content">
        {/* Top Header */}
        <header style={{ 
          height: '70px', 
          borderBottom: '1px solid var(--border-color)', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 40px',
          backgroundColor: 'rgba(11, 15, 25, 0.5)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: dbStatus?.online ? 'var(--color-success)' : 'var(--color-danger)'
            }} />
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {dbStatus?.online ? 'Cloudflare Network Online' : 'Cloudflare Network Disconnected'}
            </span>
          </div>
        </header>

        {/* Message Window */}
        <div className="chat-window">
          {messages.map((message, idx) => (
            <div key={idx} className="message-card">
              <div className={`avatar ${message.role === 'user' ? 'avatar-user' : 'avatar-ai'}`}>
                {message.role === 'user' ? 'U' : 'AI'}
              </div>
              <div className="message-content">
                <div className="message-text">
                  {renderMessageContent(message.content)}
                </div>

                {/* Citations Card display */}
                {message.sources && message.sources.length > 0 && (
                  <div>
                    <h4 className="sources-header">Retrieved Context & Source Citations</h4>
                    <div className="sources-grid">
                      {message.sources.map((source, sidx) => (
                        <div 
                          key={sidx} 
                          className="source-card"
                          onClick={() => setActiveSource(source)}
                        >
                          <div className="source-meta">
                            <span className="source-doc">{source.document_name}</span>
                            <span>Page {source.page_number}</span>
                          </div>
                          <div className="source-sec">{source.section_hierarchy}</div>
                          {source.image_ids.length > 0 && (
                            <div style={{ 
                              display: 'inline-flex', 
                              gap: '4px', 
                              marginTop: '8px', 
                              backgroundColor: 'rgba(6, 182, 212, 0.1)', 
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontSize: '10px',
                              color: 'var(--accent-secondary)',
                              fontWeight: 700
                            }}>
                              Contains Diagram: {source.image_ids.join(', ')}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-card">
              <div className="avatar avatar-ai">AI</div>
              <div className="message-content">
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span className="dot-pulse"></span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Retrieving from indexes and generating streaming answer...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input area */}
        <div className="input-panel">
          <form onSubmit={handleSubmit} className="input-container">
            <textarea
              className="chat-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about UDIR reason codes (e.g. DRC 103, TCC 102), settlement cycles, penalty structures, or cross-document rules..."
              rows={2}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading || !inputValue.trim()}
              style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-lg)' }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </main>

      {/* Expandable Source Drawer */}
      {activeSource && (
        <div className="drawer-backdrop" onClick={() => setActiveSource(null)}>
          <div className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h3 className="drawer-title">Source Context Inspector</h3>
              <button className="close-btn" onClick={() => setActiveSource(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="drawer-meta-box">
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Manual:</strong>{' '}
                <span className="gradient-text" style={{ fontWeight: 700 }}>{activeSource.document_name}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Page Number:</strong>{' '}
                <span>{activeSource.page_number}</span>
              </div>
            </div>

            <div>
              <strong style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Section Hierarchy Path
              </strong>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: 'var(--accent-secondary)', 
                marginTop: '4px' 
              }}>
                {activeSource.section_hierarchy}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <strong style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Retrieved surrounding text chunk
              </strong>
              <div className="drawer-content" style={{ 
                backgroundColor: 'var(--bg-primary)', 
                padding: '20px', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontFamily: 'monospace',
                fontSize: '13px'
              }}>
                {activeSource.content}
              </div>
            </div>

            {/* Diagram Viewer within Drawer */}
            {activeSource.image_ids.length > 0 && (
              <div className="drawer-image-box">
                <span className="drawer-image-title">Associated Diagram Details</span>
                {activeSource.image_ids.map((imgId, idx) => (
                  <div key={idx} style={{ borderBottom: idx < activeSource.image_ids.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: '8px' }}>
                    <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      Blueprint ID: {imgId}
                    </div>
                    <p className="drawer-image-desc">
                      {IMAGE_DESCRIPTIONS[imgId] || "Technical diagram containing sequence calls, network topology, or parameter lists from the source manual."}
                    </p>
                    
                    {/* Visual Blueprint Diagram box */}
                    <div style={{
                      height: '160px',
                      backgroundColor: 'rgba(99, 102, 241, 0.05)',
                      border: '1px dashed rgba(99, 102, 241, 0.3)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '12px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)',
                        backgroundSize: '10px 10px'
                      }} />
                      <div style={{ textAlign: 'center', zIndex: 1, padding: '16px' }}>
                        <FileText size={24} style={{ color: 'var(--accent-primary)', marginBottom: '6px' }} />
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          Clicking opens PDF image attachment '{imgId}.png'
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
