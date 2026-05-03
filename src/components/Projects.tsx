const Projects = () => {
  return (
    <>
      <section id="dpr-ai" style={{ background: 'var(--bg)' }}>
        <div className="inner">
          <div className="sec-label fade-up">04 // Project</div>
          <h2 className="sec-title fade-up">DPR <span className="hl">AI</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center' }} className="about-grid fade-up">
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                A fully featured AI assistant built for high-performance intelligence — powered by
                <strong style={{ color: 'var(--white)' }}> Groq's Llama 3.3</strong> model. Rebranded as
                <strong style={{ color: 'var(--amber)' }}> DPR AI</strong>, it serves as an advanced gateway for
                intelligent chat, code generation, and voice output.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '32px' }}>
                Features a secure authentication gateway (Google and Email login) with persistent history
                and a private incognito mode. Designed for speed and seamless user experience.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                <span className="ctag ctag-a">Groq AI</span>
                <span className="ctag ctag-g">Llama 3.3</span>
                <span className="ctag ctag-a">Supabase Auth</span>
                <span className="ctag ctag-g">Image Generation</span>
                <span className="ctag ctag-m">Voice Output</span>
                <span className="ctag ctag-g">Chat History</span>
              </div>

              <a href="https://dprinceai.vercel.app"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-solid hover-toggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Launch DPR AI
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
      <section id="powr-registry" style={{ background: 'var(--bg)' }}>
        <div className="inner">
          <div className="sec-label fade-up">06 // Project</div>
          <h2 className="sec-title fade-up">POWR <span className="hl">Registry</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'start' }} className="about-grid fade-up">
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                The <strong style={{ color: 'var(--white)' }}>Truth Layer of Web3</strong> — a decentralized reputation protocol 
                designed to solve the Sybil problem (bots and fake identities). It authenticates real human builders 
                by analyzing their contributions and on-chain behavior.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                POWR.PRO analyzes GitHub commit history and development activity to assign a reputation score, 
                cross-referencing transaction history across chains like <strong style={{ color: 'var(--white)' }}>Base</strong> and 
                <strong style={{ color: 'var(--white)' }}>BOB</strong>. It ensures ecosystem rewards go to genuine human contributors.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                <span className="ctag ctag-g">React</span>
                <span className="ctag ctag-a">Vite</span>
                <span className="ctag ctag-g">Web3</span>
                <span className="ctag ctag-a">GitHub API</span>
                <span className="ctag ctag-m">On-chain Indexing</span>
                <span className="ctag ctag-g">Sybil Protection</span>
              </div>

              <a href="https://powr-registry.vercel.app/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-solid hover-toggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Explore POWR Registry
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <div className="int-title">Verifiable Identity</div>
                  <div className="int-desc">Multi-dimensional framework to prove humanness and authentic developer identity</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <div>
                  <div className="int-title">Proof of Work Analysis</div>
                  <div className="int-desc">Deep integration with GitHub to analyze commit signatures and repository contributions</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div>
                  <div className="int-title">L2 On-chain Reputation</div>
                  <div className="int-desc">Builds trust scores by indexing activity across Base and BOB chains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mides-muse" style={{ background: 'var(--bg2)' }}>
        <div className="inner">
          <div className="sec-label fade-up">07 // Project</div>
          <h2 className="sec-title fade-up">Mide's <span className="hl">MUSE</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'start' }} className="about-grid fade-up">
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                A premium e-commerce platform curated for jewelry and accessories —
                designed with a modern, elegant rose-gold aesthetic.
                <strong style={{ color: 'var(--white)' }}> Mide's MUSE</strong> provides a seamless student-facing
                shopping experience with curated collections of necklaces, earrings, and bracelets.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '32px' }}>
                The platform is powered by <strong style={{ color: 'var(--white)' }}>Supabase</strong> for secure
                authentication, database management, and asset storage, featuring dynamic
                product rendering, interactive UI elements, and integrated WhatsApp chat for instant customer support.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                <span className="ctag ctag-g">React</span>
                <span className="ctag ctag-a">Vite</span>
                <span className="ctag ctag-m">E-Commerce</span>
                <span className="ctag ctag-g">Supabase</span>
                <span className="ctag ctag-a">TailwindCSS</span>
                <span className="ctag ctag-g">UI/UX Design</span>
              </div>

              <a href="https://midesmuse.vercel.app/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-solid hover-toggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Shop Mide's Muse
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                </div>
                <div>
                  <div className="int-title">E-Commerce Storefront</div>
                  <div className="int-desc">Curated category pages, dynamic product listings, and a modern shopping interface</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <div className="int-title">Integrated Support</div>
                  <div className="int-desc">Direct WhatsApp integration for immediate customer assistance and order processing</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <div className="int-title">User Authentication</div>
                  <div className="int-desc">Secure customer profiles, login, and registration backed by Supabase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="prof-salawu" style={{ background: 'var(--bg)' }}>
        <div className="inner">
          <div className="sec-label fade-up">08 // Project</div>
          <h2 className="sec-title fade-up">Prof. Salawu <span className="hl">Portfolio</span></h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'start' }} className="about-grid fade-up">
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '20px' }}>
                A high-end academic portfolio developed for <strong style={{ color: 'var(--white)' }}>Professor Sule Ola Salawu</strong>, 
                a distinguished Professor of Applied Biochemistry at FUTA. This platform serves as a professional digital presence, 
                showcasing his extensive research, publications, and career milestones.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.9', marginBottom: '32px' }}>
                The site features a clean, responsive interface with a focus on readability and accessibility. 
                It includes dynamic research spotlights, an interactive publication gallery, and direct integration 
                for professional inquiries and mental health advocacy.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                <span className="ctag ctag-g">Next.js</span>
                <span className="ctag ctag-a">React</span>
                <span className="ctag ctag-m">Academic Portfolio</span>
                <span className="ctag ctag-g">TailwindCSS</span>
                <span className="ctag ctag-a">Vercel</span>
                <span className="ctag ctag-g">SEO Optimized</span>
              </div>

              <a href="https://sosalawu.vercel.app/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-solid hover-toggle"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Visit Site
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <div>
                  <div className="int-title">Academic Showcase</div>
                  <div className="int-desc">Dedicated sections for research focus, journal publications, and professional supervision</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <div className="int-title">Performance & SEO</div>
                  <div className="int-desc">Built with Next.js for lightning-fast loading and optimized for academic search indexing</div>
                </div>
              </div>
              <div className="int-item hover-toggle" style={{ cursor: 'default' }}>
                <div className="int-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div>
                  <div className="int-title">Social Integration</div>
                  <div className="int-desc">Direct WhatsApp and email connectivity for seamless professional networking</div>
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
