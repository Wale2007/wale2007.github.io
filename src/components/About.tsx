import { useState, useEffect } from 'react';

const About = () => {
  const images = ['/IMG_4967.jpeg', '/IMG_4972.jpeg'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <style>{`
        #about { background: var(--bg2); }
        .about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 80px; align-items: start; }
        .about-body p { color: var(--muted); margin-bottom: 22px; font-size: 0.95rem; line-height: 1.9; }
        .about-body p strong { color: var(--white); font-weight: 400; }
        .edu-block {
          margin-top: 36px; padding: 22px 26px;
          border: 1px solid var(--bdr); border-radius: var(--radius); background: var(--surface);
        }
        .edu-tag { font-family: 'Space Mono', monospace; font-size: 0.6rem; color: var(--green); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px; }
        .edu-inst { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.98rem; color: var(--white); margin-bottom: 4px; }
        .edu-deg { font-size: 0.84rem; color: var(--muted); }
        .terminal {
          margin-top: 28px; padding: 20px 22px;
          background: var(--terminal-bg);
          border: 1px solid var(--bdr); border-radius: var(--radius);
          font-family: 'Space Mono', monospace; font-size: 0.76rem;
          color: var(--green); line-height: 2;
        }
        .t-prompt { color: var(--amber); }
        .t-cmd { color: var(--white); }
        .t-cursor {
          display: inline-block; width: 8px; height: 14px;
          background: var(--green); vertical-align: middle;
          margin-left: 2px; animation: blink 1s steps(1) infinite;
        }

        .mobile-profile-card {
          display: none;
          width: 100%;
          border: 1px solid var(--bdr-a); border-radius: var(--radius);
          overflow: hidden; position: relative; margin-bottom: 32px;
        }
        .mobile-profile-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--amber), var(--green));
        }
        .mobile-profile-card .mpc-bar {
          padding: 11px 16px; background: var(--sur2);
          border-bottom: 1px solid var(--bdr);
          display: flex; justify-content: space-between; align-items: center;
        }
        .mobile-profile-card .mpc-bar span {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--muted); letter-spacing: 0.14em; text-transform: uppercase;
        }
        .mobile-profile-card .mpc-bar em {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--amber); font-style: normal;
        }
        .mobile-profile-card .card-img { height: 280px; position: relative; overflow: hidden; }
        .mobile-profile-card img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center top; transition: opacity 0.9s; opacity: 0;
        }
        .mobile-profile-card img.slide-active { opacity: 1; }
        .mobile-nft-card {
          display: none;
          width: 100%;
          border: 1px solid var(--bdr-a); border-radius: var(--radius);
          overflow: hidden; margin-bottom: 32px;
        }
        .mobile-nft-card .mpc-bar {
          padding: 11px 16px; background: var(--sur2);
          border-bottom: 1px solid var(--bdr);
          display: flex; justify-content: space-between; align-items: center;
        }
        .mobile-nft-card .mpc-bar span {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--muted); letter-spacing: 0.14em; text-transform: uppercase;
        }
        .mobile-nft-card .mpc-bar em {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--amber); font-style: normal;
        }
        .mobile-nft-card img { width: 100%; display: block; max-height: 220px; object-fit: cover; }
        
        .interests { display: flex; flex-direction: column; gap: 12px; }

        @media (max-width: 768px) {
          .mobile-profile-card { display: block; }
          .mobile-nft-card { display: block; }
        }
      `}</style>
      <section id="about">
        <div className="inner">
          <div className="sec-label fade-up">01 // About</div>
          <h2 className="sec-title fade-up">The Person Behind<br/>the <span className="hl">Code</span></h2>
          <div className="about-grid fade-up">
            <div className="about-body">

              {/* Mobile-only profile photo */}
              <div className="mobile-profile-card hover-toggle">
                <div className="mpc-bar">
                  <span>Identity // Real World</span>
                  <em>FUTA &middot; Nigeria</em>
                </div>
                <div className="card-img" id="mobileSlide">
                  {images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Mr. Wale — Photo ${idx + 1}`} 
                      className={currentSlide === idx ? 'slide-active' : ''} 
                    />
                  ))}
                  <div className="slide-dots">
                    {images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`slide-dot ${currentSlide === idx ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                      ></div>
                    ))}
                  </div>
                  <div className="slide-progress running" key={currentSlide} style={{ transition: 'width 10s linear', width: '100%' }}></div>
                </div>
              </div>

              {/* Mobile-only NFT card */}
              <div className="mobile-nft-card hover-toggle hover-toggle-amber">
                <div className="mpc-bar">
                  <span>Web3 Identity // On-Chain</span>
                  <em>@SalawuOO</em>
                </div>
                <img src="/IMG_5807.jpeg" alt="Mr. Wale — BAYC Web3 PFP" />
              </div>

              <p>
                I am <strong>Ola-salawu Olawale Oluwasegun</strong>, a Software Engineering
                student at the Federal University of Technology, Akure, working at the intersection
                of traditional software development and the decentralized future of the web.
              </p>
              <p>
                My core focus is <strong>Web3 security</strong>: understanding how smart contracts
                fail, how DeFi protocols are exploited, and how to design systems that remain genuinely
                resilient on-chain. Beyond the technical, I am a communicator, translating dense
                blockchain concepts into content that communities understand and engage with.
              </p>
              <p>
                I have represented projects across multiple ecosystems: from <strong>BOB</strong> to
                <strong> Pett.ai</strong>, <strong>Arbitrum</strong> to <strong>Akash</strong>,
                as a brand ambassador and community builder. The best builders are also the best storytellers.
              </p>

              <div className="edu-block hover-toggle">
                <div className="edu-tag">Education</div>
                <div className="edu-inst">Federal University of Technology, Akure</div>
                <div className="edu-deg">B.Tech in Software Engineering, Ondo, Nigeria</div>
              </div>

              <div className="terminal hover-toggle">
                <span className="t-prompt">wale@futa:~$</span> <span className="t-cmd">whoami</span><br/>
                &rarr;&nbsp;SWE Student &nbsp;|&nbsp; Web3 Security &nbsp;|&nbsp; Ambassador &nbsp;|&nbsp; Writer<br/>
                <span className="t-prompt">wale@futa:~$</span> <span className="t-cmd">echo $LOCATION</span><br/>
                &rarr;&nbsp;Nigeria, Building on-chain<span className="t-cursor"></span>
              </div>
            </div>

            <div className="interests fade-up">
              {[ // abstracting the interests
                { title: "Music & Instruments", desc: "Playing instruments as a creative outlet alongside technical work", icon: "M12 3a9 9 0 1 0 9 9A9 9 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm-1-11v5l4 2.5-.75 1.3L9 13V8z" },
                { title: "Fashion & Modeling", desc: "Curating style as an expression of identity, on-chain and off", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2zm4 0h-2V8h2z" },
                { title: "DeFi & Smart Contract Security", desc: "Deep dives into protocol mechanics, exploit vectors, and security research", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z" },
                { title: "Emerging Blockchain Trends", desc: "Tracking L2 ecosystems, ZK technology, and the evolving Web3 landscape", icon: "M17 8C8 10 5.9 16.17 3.82 19.44L5.71 21l1-2.3A4.49 4.49 0 0 0 8 19c8 0 10-8 10-8s-1 5-6 5a6 6 0 0 1-6-6c0-1 1-3 1-3S9 14 14 14c5 0 3-6 3-6z" },
                { title: "Technical Content Writing", desc: "Making complex Web3 topics accessible to builders and communities", icon: "M3 18h12v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }
              ].map((item, i) => (
                <div className="int-item hover-toggle" key={i}>
                  <div className="int-icon">
                    <svg viewBox="0 0 24 24"><path d={item.icon}/></svg>
                  </div>
                  <div>
                    <div className="int-title">{item.title}</div>
                    <div className="int-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
