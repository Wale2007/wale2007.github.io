const Experience = () => {
  return (
    <>
      <style>{`
        #experience { background: var(--bg2); }
        .exp-list { display: flex; flex-direction: column; gap: 2px; }
        .exp-card {
          background: var(--surface); border: 1px solid var(--bdr);
          padding: 30px 34px; display: grid;
          grid-template-columns: 1fr auto; gap: 24px; align-items: start;
          position: relative; overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .exp-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: transparent; transition: background 0.22s;
        }
        .exp-card:hover { border-color: rgba(0,230,118,0.2); box-shadow: var(--glow-g); }
        .exp-card:hover::before { background: var(--green); }
        .exp-role { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--white); margin-bottom: 4px; }
        .exp-org { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: var(--green); letter-spacing: 0.1em; margin-bottom: 14px; }
        .exp-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.75; }
        .exp-badge {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 6px 12px; border-radius: var(--radius); white-space: nowrap;
        }
        .badge-g { color: var(--green); background: rgba(0,230,118,0.07); border: 1px solid rgba(0,230,118,0.22); }
        .badge-a { color: var(--amber); background: rgba(245,166,35,0.07); border: 1px solid rgba(245,166,35,0.22); }
        
        @media (max-width: 768px) {
          .exp-card { grid-template-columns: 1fr; }
          .exp-badge { align-self: flex-start; }
        }
      `}</style>
      <section id="experience">
        <div className="inner">
          <div className="sec-label fade-up">03 // Experience</div>
          <h2 className="sec-title fade-up">Projects &amp; <span className="hl">Ambassadorships</span></h2>
          <div className="exp-list fade-up">
            <div className="exp-card hover-toggle hover-toggle-amber">
              <div>
                <div className="exp-role">Brand Ambassador</div>
                <div className="exp-org">Build on BOB (BOB) Ecosystem</div>
                <p className="exp-desc">Represented the BOB (Build on Bitcoin) ecosystem (a Bitcoin-secured L2), facilitating community growth, project awareness campaigns, and bridging the gap between technical teams and broader crypto communities.</p>
              </div>
              <span className="exp-badge badge-a">Web3 &middot; L2</span>
            </div>
            
            <div className="exp-card hover-toggle hover-toggle-amber">
              <div>
                <div className="exp-role">Brand Ambassador</div>
                <div className="exp-org">Pett.ai: Base-Integrated Gaming</div>
                <p className="exp-desc">Served as brand representative for Pett.ai, a gaming project built on Base. Led community engagement initiatives and produced promotional content that drove ecosystem visibility and user onboarding.</p>
              </div>
              <span className="exp-badge badge-a">Base &middot; Gaming</span>
            </div>
            
            <div className="exp-card hover-toggle">
              <div>
                <div className="exp-role">Student Ambassador</div>
                <div className="exp-org">Arbitrum Ambassador Program</div>
                <p className="exp-desc">Actively engaged with the Arbitrum ecosystem, promoting L2 technology, organizing student-level Web3 awareness programs, and contributing to the growth of the Nigerian Web3 developer community.</p>
              </div>
              <span className="exp-badge badge-g">Active</span>
            </div>
            
            <div className="exp-card hover-toggle">
              <div>
                <div className="exp-role">Student Ambassador</div>
                <div className="exp-org">Akash Network Ambassador Initiative</div>
                <p className="exp-desc">Represented Akash Network's decentralized cloud computing ecosystem at the student level, driving awareness around decentralized infrastructure, AI deployments on-chain, and permissionless computing.</p>
              </div>
              <span className="exp-badge badge-g">Active</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
