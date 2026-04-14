const Projects = () => {
  return (
    <>
      <section id="dprince-ai" style={{ background: 'var(--bg)' }}>
        <div className="inner">
          <div className="sec-label fade-up">04 // Project</div>
          <h2 className="sec-title fade-up">DPRINCE <span className="hl">AI</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid fade-up">
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                A fully featured AI assistant I built from scratch — powered by
                <strong style={{ color: 'var(--white)' }}> Groq's Llama 3.3</strong> model with support
                for intelligent chat, code generation, image creation, and voice output.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '32px' }}>
                Users can sign in with Google or email, maintain persistent chat history across
                sessions, and switch to a fully private incognito mode. Built entirely for free
                using Groq AI, Supabase, and Pollinations.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                <span className="ctag ctag-a">Groq AI</span>
                <span className="ctag ctag-g">Llama 3.3</span>
                <span className="ctag ctag-a">Supabase Auth</span>
                <span className="ctag ctag-g">Image Generation</span>
                <span className="ctag ctag-m">Voice Output</span>
                <span className="ctag ctag-g">Chat History</span>
                <span className="ctag ctag-a">Incognito Mode</span>
              </div>

              <a href="https://dprince-ai.vercel.app"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-solid hover-toggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Launch DPRINCE AI
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="var(--green)"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <div className="int-title">Intelligent Chat</div>
                  <div className="int-desc">Powered by Llama 3.3 — answers questions, writes essays, solves problems</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="var(--green)"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div>
                  <div className="int-title">Code Generation</div>
                  <div className="int-desc">Write, debug and explain code in any programming language</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="var(--green)"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <div>
                  <div className="int-title">Image Generation</div>
                  <div className="int-desc">Generate images from text prompts with multiple styles and sizes</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="var(--green)"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                </div>
                <div>
                  <div className="int-title">Voice Output</div>
                  <div className="int-desc">Listen to AI responses read aloud using the voice mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whale-watch" style={{ background: 'var(--bg2)' }}>
        <div className="inner">
          <div className="sec-label fade-up">05 // Project</div>
          <h2 className="sec-title fade-up">Whale <span className="hl">Watch</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'start' }} className="about-grid fade-up">
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                A full-stack DeFi trading and on-chain intelligence platform — built under the
                <strong style={{ color: 'var(--white)' }}> DPRINCE</strong> brand with the tagline
                <em style={{ color: 'var(--amber)' }}> Trade. Track. Protect.</em> It combines a live token
                trading interface with a dedicated whale intelligence dashboard that monitors
                large wallet movements across ETH, BNB and more in real time.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                The <strong style={{ color: 'var(--white)' }}>Trade tab</strong> works like a DEX aggregator:
                paste any token contract address, select your chain, and instantly see live price,
                market cap, liquidity, 24h volume, transaction count, and an interactive candlestick
                chart. A built-in <strong style={{ color: 'var(--white)' }}>Security Scan</strong> analyses each token for
                honeypot risk, blacklist status, mint functions, and buy/sell tax — giving it a
                safety score out of 100.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '32px' }}>
                The <strong style={{ color: 'var(--white)' }}>Whale Intelligence tab</strong> tracks
                large wallet movements across Ethereum and BNB Chain in real time — showing
                total transaction count, total ETH volume moved, DEX swaps vs direct transfers.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                <span className="ctag ctag-g">React</span>
                <span className="ctag ctag-a">ETH Chain</span>
                <span className="ctag ctag-a">BNB Chain</span>
                <span className="ctag ctag-g">DEX Analytics</span>
                <span className="ctag ctag-g">Security Scanner</span>
                <span className="ctag ctag-a">Whale Intelligence</span>
                <span className="ctag ctag-g">Live Charts</span>
                <span className="ctag ctag-m">Web3 Wallet Connect</span>
                <span className="ctag ctag-a">On-Chain Data</span>
              </div>

              <a href="https://whale-watch-iota.vercel.app/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-solid hover-toggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Launch Whale Watch
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div>
                  <div className="int-title">Live Token Trading Interface</div>
                  <div className="int-desc">Search any token by contract address on ETH or BNB — see live price, market cap, liquidity, volume and interactive candlestick charts</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="int-title">Smart Contract Security Scan</div>
                  <div className="int-desc">Checks for honeypot, blacklist, mintable supply, buy/sell tax and top holder concentration</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <div>
                  <div className="int-title">Real-Time Whale Intelligence</div>
                  <div className="int-desc">Monitors large wallet transfers and DEX swaps across ETH and BNB Chain — filterable by transaction type with live timestamps</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div>
                  <div className="int-title">Web3 Wallet Integration</div>
                  <div className="int-desc">Connect your wallet directly to buy and sell tokens, with hot token shortcuts (PEPE, SHIB, FLOKI, WIF) for quick access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
