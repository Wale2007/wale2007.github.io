import { useState, useEffect, useRef } from 'react';

// Reusable progress bar component
const ProgressBar = ({ name, percent, isLearning = false, sub = '' }: {name: string, percent: number, isLearning?: boolean, sub?: string}) => {
  const [inView, setInView] = useState(false);
  const [currentPercent, setCurrentPercent] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (inView) {
      let count = 0;
      const interval = setInterval(() => {
        count = Math.min(count + 2, percent);
        setCurrentPercent(count);
        if (count >= percent) clearInterval(interval);
      }, 24);
      return () => clearInterval(interval);
    }
  }, [inView, percent]);

  return (
    <div className="bar-row hover-toggle hover-toggle-subtle" ref={barRef}>
      <div className="bar-meta">
        <span className="bar-name">
          {name}
          {isLearning && <span className="tag-inprogress">In Progress</span>}
        </span>
        <span className={`bar-pct ${isLearning ? 'learning-pct' : ''}`}>{currentPercent}%</span>
      </div>
      <div className="bar-track">
        <div 
          className={`bar-fill ${isLearning ? 'learning' : ''}`} 
          style={{ width: inView ? `${percent}%` : '0%' }}
        />
      </div>
      {sub && <div className="bar-sub">{sub}</div>}
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <style>{`
        #skills { background: var(--bg); }
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-bottom: 56px; }
        .skill-card {
          background: var(--surface); padding: 32px 28px;
          border: 1px solid var(--bdr);
          transition: border-color 0.22s, transform 0.22s;
          position: relative; overflow: hidden;
        }
        .skill-card::before {
          content: attr(data-num); position: absolute; top: -8px; right: 18px;
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 5rem;
          color: rgba(0,230,118,0.04); line-height: 1; pointer-events: none;
        }
        .skill-card:hover { border-color: rgba(0,230,118,0.24); transform: translateY(-3px); }
        .skill-card-ico {
          width: 40px; height: 40px; margin-bottom: 18px;
          border: 1px solid var(--bdr); border-radius: var(--radius);
          display: flex; align-items: center; justify-content: center; background: var(--sur2);
        }
        .skill-card-ico svg { width: 18px; height: 18px; fill: var(--green); }
        .skill-card-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.96rem; color: var(--white); margin-bottom: 16px; }
        .skill-items { list-style: none; display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; }
        .skill-items li {
          font-family: 'Space Mono', monospace; font-size: 0.67rem;
          color: var(--muted); letter-spacing: 0.04em;
          display: flex; align-items: center; gap: 9px;
        }
        .skill-items li::before { content: ''; width: 5px; height: 5px; border: 1px solid var(--green); border-radius: 50%; flex-shrink: 0; }

        .proficiency-section { margin-top: 0; }
        .prof-tagline {
          font-size: 0.9rem; color: var(--muted); margin-bottom: 52px;
          font-style: italic; line-height: 1.7; max-width: 620px;
          padding-left: 16px; border-left: 2px solid var(--amber);
        }
        .prof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }

        .prof-group-title {
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 28px;
          display: flex; align-items: center; gap: 12px;
        }
        .prof-group-title::after { content: ''; flex: 1; height: 1px; background: var(--bdr); }
        .prof-group-title.current::after { background: var(--bdr); }
        .prof-group-title.learning { color: var(--amber); }
        .prof-group-title.learning::after { background: rgba(245,166,35,0.2); }

        .bar-row { margin-bottom: 22px; }
        .bar-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .bar-name { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: var(--white); letter-spacing: 0.06em; }
        .bar-pct { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: var(--green); font-weight: 700; }
        .bar-pct.learning-pct { color: var(--amber); }
        .bar-track { height: 5px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; position: relative; }
        .bar-fill {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--green), rgba(0,230,118,0.6));
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bar-fill.learning {
          background: linear-gradient(90deg, var(--amber), rgba(245,166,35,0.5));
          animation: barPulse 2.4s ease-in-out infinite;
        }
        @keyframes barPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.65; } }
        .bar-sub { font-family: 'Space Mono', monospace; font-size: 0.6rem; color: var(--dim); margin-top: 6px; letter-spacing: 0.04em; }
        .tag-inprogress {
          display: inline-block; font-family: 'Space Mono', monospace; font-size: 0.55rem;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--amber);
          background: rgba(245,166,35,0.08); border: 1px solid rgba(245,166,35,0.25);
          padding: 2px 8px; border-radius: 2px; margin-left: 8px; vertical-align: middle;
          animation: blink 2.5s infinite;
        }

        .pills { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 56px; }
        .pill {
          font-family: 'Space Mono', monospace; font-size: 0.66rem;
          letter-spacing: 0.09em; padding: 8px 15px; border-radius: var(--radius); transition: all 0.2s;
        }
        .pill-g { color: var(--green); background: rgba(0,230,118,0.05); border: 1px solid rgba(0,230,118,0.18); }
        .pill-g:hover { background: rgba(0,230,118,0.14); box-shadow: 0 0 18px rgba(0,230,118,0.18); }
        .pill-a { color: var(--amber); background: rgba(245,166,35,0.05); border: 1px solid rgba(245,166,35,0.18); }
        .pill-a:hover { background: rgba(245,166,35,0.14); }

        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
          .prof-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
      <section id="skills">
        <div className="inner">
          <div className="sec-label fade-up">02 // Skills &amp; Proficiency</div>
          <h2 className="sec-title fade-up">Technical <span className="hl">Arsenal</span></h2>

          <div className="skills-grid fade-up">
            <div className="skill-card hover-toggle" data-num="01">
              <div className="skill-card-ico">
                <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              </div>
              <div className="skill-card-title">Development</div>
              <ul className="skill-items">
                <li>Web Development (Frontend &amp; Backend)</li>
                <li>Software Architecture</li>
                <li>Python, C / C++, HTML/CSS</li>
                <li>Version Control: Git &amp; GitHub</li>
              </ul>
            </div>
            
            <div className="skill-card hover-toggle" data-num="02">
              <div className="skill-card-ico">
                <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z"/></svg>
              </div>
              <div className="skill-card-title">Blockchain &amp; Web3 Security</div>
              <ul className="skill-items">
                <li>Smart Contract Auditing (Solidity)</li>
                <li>Security Tools: Slither, Mythril</li>
                <li>Ethers.js / Web3.js Integration</li>
                <li>DeFi Protocol Research</li>
                <li>Ecosystem &amp; Community Growth</li>
              </ul>
            </div>

            <div className="skill-card hover-toggle" data-num="03">
              <div className="skill-card-ico">
                <svg viewBox="0 0 24 24"><path d="M3 18h12v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
              </div>
              <div className="skill-card-title">Writing &amp; Brand</div>
              <ul className="skill-items">
                <li>Technical Content Writing</li>
                <li>Brand Ambassadorship</li>
                <li>Community Management</li>
                <li>Web3 Copywriting</li>
                <li>Social Media Strategy</li>
              </ul>
            </div>
          </div>

          <div className="proficiency-section fade-up">
            <p className="prof-tagline">
              Constantly evolving at the intersection of Software Engineering and Blockchain Security.
            </p>
            <div className="prof-grid">
              <div>
                <div className="prof-group-title current">Current Stack</div>
                <ProgressBar name="Technical Content Writing" percent={90} />
                <ProgressBar name="Web3 & Blockchain Foundations" percent={85} />
                <ProgressBar name="Software Architecture" percent={80} />
                <ProgressBar name="Git & Version Control" percent={80} />
                <ProgressBar name="Python" percent={75} />
                <ProgressBar name="C / C++" percent={70} />
                <ProgressBar name="HTML / CSS" percent={65} />
                <ProgressBar name="Perl" percent={40} />
              </div>
              <div>
                <div className="prof-group-title learning">Active Mastery</div>
                <ProgressBar name="Solidity" percent={45} isLearning sub="Deepening knowledge for Smart Contract Auditing" />
                <ProgressBar name="Ethers.js / Web3.js" percent={40} isLearning sub="Integrating blockchain logic into web applications" />
                <ProgressBar name="Security Auditing Tools" percent={35} isLearning sub="Learning Slither and Mythril for vulnerability detection" />
              </div>
            </div>
          </div>

          <div className="pills fade-up">
            <span className="pill pill-g">HTML / CSS</span>
            <span className="pill pill-g">Python</span>
            <span className="pill pill-g">C / C++</span>
            <span className="pill pill-g">Git</span>
            <span className="pill pill-g">GitHub</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">Web3 Security</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">Solidity</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">Smart Contracts</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">DeFi</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">Arbitrum</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">Base</span>
            <span className="pill pill-a hover-toggle hover-toggle-amber">Akash Network</span>
            <span className="pill pill-g">Technical Writing</span>
            <span className="pill pill-g">Community Building</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
