import { useState, useRef, useEffect } from 'react';

const W_GROQ_KEY = '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';
const W_GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

const WALE_CONTEXT = `You are DPRINCE AI, an intelligent assistant embedded on Ola-salawu Olawale Oluwasegun's (Mr. Wale) personal portfolio website. You know everything about him and help visitors learn more.

Key facts about Mr. Wale:
- Full name: Ola-salawu Olawale Oluwasegun, known as Mr. Wale
- Software Engineer
- Specializes in Web3 Security and blockchain technology
- Brand Ambassador for: Build on BOB (Bitcoin L2), Pett.ai (Base gaming), Arbitrum, Akash Network
- Skills: Web3 Security, Smart Contract Analysis, DeFi Research, Python, C/C++, HTML/CSS, Git, Technical Writing
- Learning: Solidity, Ethers.js, Security Auditing Tools (Slither, Mythril)
- Twitter/X: @SalawuOO | GitHub: Wale2007 | Email: wola77923@gmail.com
- Hobbies: Music, Fashion & Modeling, DeFi research, Technical writing
- Web3 identity: BAYC NFT holder
- Built DPRINCE AI — a full AI assistant platform
- Built Whale Watch — a DeFi trading and whale intelligence platform across ETH and BNB Chain

Be friendly, informative and concise. Answer questions about Wale, his work, Web3, or general questions. Keep responses short (2-4 sentences) since this is a chat widget. For long technical topics, suggest visiting the full DPRINCE AI.`;

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: WALE_CONTEXT },
    { role: 'assistant', content: "Hi! I'm **DPRINCE AI**. I can answer questions about Wale, his work, Web3 expertise, or anything else you'd like to know. What's on your mind?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (panelOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, panelOpen, isTyping]);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
    if (!panelOpen) {
      setTimeout(() => {
        document.getElementById('aiWidgetInput')?.focus();
      }, 300);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;
    
    const text = inputValue.trim();
    setInputValue('');
    
    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setIsTyping(true);
    
    try {
      const msgsForApi = [
        newMessages[0], 
        ...newMessages.slice(1).slice(-8)
      ];
      
      const res = await fetch(W_GROQ_URL, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${W_GROQ_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: msgsForApi,
          max_tokens: 300,
          temperature: 0.7
        })
      });
      
      if (!res.ok) throw new Error('API error');
      
      const data = await res.json();
      const reply = data.choices[0].message.content;
      
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
      
    } catch (err) {
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I had a connection issue. Please try again or visit the full DPRINCE AI.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatText = (text: string) => {
    let html = text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
      .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
      .replace(/\\n/g, '<br>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      <style>{`
        /* Widget FAB */
        .ai-fab {
          position: fixed; bottom: 28px; right: 28px; z-index: 500;
          width: 58px; height: 58px; border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 24px rgba(139,92,246,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ai-fab:hover { transform: scale(1.08); box-shadow: 0 6px 32px rgba(139,92,246,0.6); }
        .ai-fab svg { width: 26px; height: 26px; fill: #fff; }
        .ai-fab-label {
          position: fixed; bottom: 94px; right: 28px; z-index: 500;
          background: #13131e; border: 1px solid rgba(139,92,246,0.3);
          color: #a78bfa; font-family: 'Space Mono', monospace;
          font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 4px; white-space: nowrap;
          opacity: 0; animation: fabLabelIn 0.4s 2s forwards;
          pointer-events: none;
        }
        @keyframes fabLabelIn { to { opacity: 1; } }

        /* Widget Panel */
        .ai-panel {
          position: fixed; bottom: 98px; right: 28px; z-index: 499;
          width: 380px; height: 540px; max-height: 80vh;
          background: #0f0f18;
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 16px;
          display: flex; flex-direction: column;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.1);
          transform: scale(0.92) translateY(12px);
          opacity: 0; pointer-events: none;
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
          overflow: hidden;
        }
        .ai-panel.open {
          transform: scale(1) translateY(0);
          opacity: 1; pointer-events: all;
        }
        .ai-panel-header {
          padding: 14px 16px;
          background: #13131e;
          border-bottom: 1px solid rgba(139,92,246,0.12);
          display: flex; align-items: center; justify-content: space-between;
          flex-shrink: 0;
        }
        .ai-panel-brand { display: flex; align-items: center; gap: 10px; }
        .ai-panel-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #10b981; animation: pulse 1.8s infinite;
          flex-shrink: 0;
        }
        .ai-panel-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.9rem; color: #f1f0ff; }
        .ai-panel-sub { font-family: 'Space Mono', monospace; font-size: 0.6rem; color: #6b7280; letter-spacing: 0.08em; }
        .ai-panel-close {
          background: none; border: none; cursor: pointer;
          color: #6b7280; padding: 4px; border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        .ai-panel-close:hover { color: #f1f0ff; background: rgba(255,255,255,0.06); }
        .ai-panel-close svg { width: 16px; height: 16px; display: block; }

        /* Chat messages */
        .ai-messages {
          flex: 1; overflow-y: auto; padding: 14px 14px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .ai-messages::-webkit-scrollbar { width: 3px; }
        .ai-messages::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.2); border-radius: 2px; }
        .ai-msg { display: flex; gap: 8px; max-width: 100%; animation: wMsgIn 0.25s ease; }
        @keyframes wMsgIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .ai-msg.user { flex-direction: row-reverse; }
        .ai-msg-av {
          width: 26px; height: 26px; border-radius: 50%;
          flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; font-weight: 700; margin-top: 1px;
        }
        .ai-msg.user .ai-msg-av { background: linear-gradient(135deg,#8b5cf6,#ec4899); color:#fff; }
        .ai-msg.ai { align-items: flex-start; }
        .ai-msg.ai .ai-msg-av { background: linear-gradient(135deg,#06b6d4,#8b5cf6); color:#fff; font-size:0.55rem; }
        .ai-msg-text {
          padding: 9px 12px; border-radius: 12px;
          font-size: 0.83rem; line-height: 1.6; max-width: calc(100% - 36px);
        }
        .ai-msg.user .ai-msg-text {
          background: linear-gradient(135deg,#8b5cf6,#7c3aed);
          color: #fff; border-bottom-right-radius: 3px;
          font-family: 'Inter', sans-serif;
        }
        .ai-msg.ai .ai-msg-text {
          background: #13131e; border: 1px solid rgba(139,92,246,0.15);
          color: #dde4ee; border-bottom-left-radius: 3px;
          font-family: 'Inter', sans-serif;
        }
        .ai-msg.ai .ai-msg-text strong { color: #a78bfa; }
        .ai-msg.ai .ai-msg-text code {
          background: rgba(139,92,246,0.15); color: #a78bfa;
          padding: 1px 5px; border-radius: 3px;
          font-family: 'Space Mono', monospace; font-size: 0.76rem;
        }
        
        .ai-typing-wrap { display: flex; gap: 8px; align-items: flex-start; }
        .ai-typing {
          background: #13131e; border: 1px solid rgba(139,92,246,0.15);
          border-radius: 12px; border-bottom-left-radius: 3px;
          padding: 10px 14px; display: flex; gap: 4px;
        }
        .ai-td { width: 5px; height: 5px; border-radius: 50%; background: #a78bfa; animation: tp 1.4s infinite; }
        .ai-td:nth-child(2){animation-delay:.2s} .ai-td:nth-child(3){animation-delay:.4s}

        /* Input */
        .ai-input-row {
          padding: 10px 12px; border-top: 1px solid rgba(139,92,246,0.1);
          display: flex; gap: 8px; align-items: flex-end;
          background: #0a0a0f; flex-shrink: 0;
        }
        #aiWidgetInput {
          flex: 1; background: #13131e; border: 1px solid rgba(139,92,246,0.15);
          border-radius: 10px; color: #f1f0ff;
          font-family: 'Inter', sans-serif; font-size: 0.84rem;
          padding: 9px 12px; outline: none; resize: none;
          min-height: 38px; max-height: 100px; line-height: 1.4;
          transition: border-color 0.2s;
        }
        #aiWidgetInput::placeholder { color: #374151; }
        #aiWidgetInput:focus { border-color: rgba(139,92,246,0.4); }
        .ai-send-btn {
          width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0;
          background: linear-gradient(135deg,#8b5cf6,#ec4899);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .ai-send-btn:hover { opacity: 0.85; transform: scale(1.05); }
        .ai-send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
        .ai-send-btn svg { width: 14px; height: 14px; fill: #fff; }

        .ai-panel-footer {
          padding: 6px 14px 10px;
          text-align: center;
          font-family: 'Space Mono', monospace; font-size: 0.58rem;
          color: #374151; letter-spacing: 0.06em;
          background: #0a0a0f; flex-shrink: 0;
        }
        .ai-panel-footer a { color: #8b5cf6; text-decoration: none; }
        .ai-panel-footer a:hover { text-decoration: underline; }

        @media (max-width: 480px) {
          .ai-panel { width: calc(100vw - 20px); right: 10px; bottom: 80px; }
          .ai-fab { bottom: 16px; right: 16px; }
          .ai-fab-label { right: 16px; bottom: 82px; }
        }
      `}</style>
      
      {!panelOpen && <div className="ai-fab-label">Ask DPRINCE AI</div>}
      
      <button className="ai-fab hover-toggle" onClick={togglePanel} aria-label="Open DPRINCE AI">
        {panelOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        )}
      </button>

      <div className={`ai-panel ${panelOpen ? 'open' : ''}`} id="aiPanel">
        <div className="ai-panel-header">
          <div className="ai-panel-brand">
            <div className="ai-panel-dot"></div>
            <div>
              <div className="ai-panel-title">DPRINCE AI</div>
              <div className="ai-panel-sub">Ask me anything about Wale</div>
            </div>
          </div>
          <button className="ai-panel-close" onClick={togglePanel}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="ai-messages">
          {messages.filter(m => m.role !== 'system').map((msg, i) => (
            <div key={i} className={`ai-msg ${msg.role === 'user' ? 'user' : 'ai'}`}>
              <div className="ai-msg-av">{msg.role === 'user' ? 'You' : 'DP'}</div>
              <div className="ai-msg-text">{formatText(msg.content)}</div>
            </div>
          ))}
          {isTyping && (
            <div className="ai-typing-wrap">
              <div className="ai-msg-av ai-msg ai" style={{width:'26px',height:'26px',borderRadius:'50%',background:'linear-gradient(135deg,#06b6d4,#8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.55rem',fontWeight:700,color:'#fff',flexShrink:0}}>DP</div>
              <div className="ai-typing">
                <div className="ai-td"></div><div className="ai-td"></div><div className="ai-td"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="ai-input-row">
          <textarea 
            id="aiWidgetInput" 
            placeholder="Ask about Wale or anything..." 
            rows={1}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button className="ai-send-btn" onClick={handleSend} disabled={isTyping || !inputValue.trim()}>
            <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
          </button>
        </div>
        <div className="ai-panel-footer">
          Powered by <a href="https://dprince-ai.vercel.app" target="_blank" rel="noopener noreferrer">DPRINCE AI</a> &mdash; Full version
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
