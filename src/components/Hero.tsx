import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['/IMG_4967.jpeg', '/IMG_4972.jpeg'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000); // 10s per slide
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <style>{`
        #hero {
          min-height: 100vh;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 60px;
          padding: 120px 80px 80px;
          position: relative;
        }
        .hero-left { position: relative; z-index: 1; }
        .hero-status {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Space Mono', monospace; font-size: 0.68rem;
          color: var(--green); letter-spacing: 0.2em; text-transform: uppercase;
          margin-bottom: 28px; padding: 7px 16px;
          border: 1px solid var(--bdr); border-radius: var(--radius);
          background: rgba(0,230,118,0.04);
        }
        .status-dot {
          width: 7px; height: 7px; background: var(--green);
          border-radius: 50%; animation: pulse 1.6s infinite;
        }
        .hero-name {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(2.6rem, 4.5vw, 5.2rem);
          line-height: 1.02; letter-spacing: -0.025em;
          color: var(--white); margin-bottom: 10px;
        }
        .hero-name .amber { color: var(--amber); }
        .hero-handle {
          font-family: 'Space Mono', monospace; font-size: 0.9rem;
          color: var(--muted); margin-bottom: 26px; letter-spacing: 0.06em;
        }
        .hero-handle span { color: var(--green); }
        .hero-bio {
          font-size: 0.98rem; color: var(--muted);
          max-width: 500px; margin-bottom: 44px; line-height: 1.9;
        }
        .hero-bio strong { color: var(--white); font-weight: 400; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .hero-metrics {
          display: flex; gap: 44px; margin-top: 58px;
          padding-top: 42px; border-top: 1px solid var(--bdr);
        }
        .metric-val {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 2rem; color: var(--green); display: block; line-height: 1;
        }
        .metric-key {
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          color: var(--muted); letter-spacing: 0.14em;
          text-transform: uppercase; margin-top: 6px; display: block;
        }
        .hero-right {
          display: flex; flex-direction: column;
          align-items: center; gap: 18px;
          position: relative; z-index: 1;
        }
        .id-card {
          width: 100%; max-width: 390px;
          border: 1px solid var(--bdr-a); border-radius: var(--radius);
          background: var(--surface); overflow: hidden;
          box-shadow: var(--glow-a); position: relative;
        }
        .id-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--amber), var(--green));
        }
        .card-bar {
          padding: 13px 18px; background: var(--sur2);
          border-bottom: 1px solid var(--bdr);
          display: flex; justify-content: space-between; align-items: center;
        }
        .card-bar-label {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--muted); letter-spacing: 0.16em; text-transform: uppercase;
        }
        .card-chip {
          font-family: 'Space Mono', monospace; font-size: 0.58rem;
          color: var(--amber); background: rgba(245,166,35,0.09);
          border: 1px solid rgba(245,166,35,0.28);
          padding: 3px 9px; border-radius: var(--radius); letter-spacing: 0.1em;
        }
        .card-img {
          position: relative; overflow: hidden; height: 270px;
        }
        .card-img img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center top;
          opacity: 0; transition: opacity 0.9s ease;
        }
        .card-img img.slide-active { opacity: 1; }
        .slide-dots {
          position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
          display: flex; gap: 6px; z-index: 10;
        }
        .slide-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: background 0.3s, transform 0.3s; cursor: pointer;
        }
        .slide-dot.active { background: var(--green); transform: scale(1.3); }
        .slide-progress {
          position: absolute; bottom: 0; left: 0; height: 2px;
          background: var(--green); width: 0%;
          z-index: 10;
        }
        .card-body { padding: 18px 20px; }
        .card-name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 1rem; color: var(--white); margin-bottom: 3px;
        }
        .card-role {
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          color: var(--green); letter-spacing: 0.08em; margin-bottom: 14px;
        }
        .card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        
        .nft-card {
          width: 100%; max-width: 390px;
          border: 1px solid var(--bdr-a); border-radius: var(--radius);
          overflow: hidden; background: var(--surface);
        }
        .nft-bar {
          padding: 12px 18px; background: var(--sur2);
          border-bottom: 1px solid var(--bdr);
          display: flex; justify-content: space-between; align-items: center;
        }
        .nft-bar span {
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--muted); letter-spacing: 0.16em; text-transform: uppercase;
        }
        .nft-indicator {
          display: flex; align-items: center; gap: 7px;
          font-family: 'Space Mono', monospace; font-size: 0.6rem;
          color: var(--amber); letter-spacing: 0.1em;
        }
        .nft-indicator::before {
          content: ''; width: 6px; height: 6px;
          background: var(--amber); border-radius: 50%;
          animation: pulse 2.2s infinite;
        }
        .nft-img { position: relative; }
        .nft-img img { width: 100%; display: block; max-height: 210px; object-fit: cover; }
        .nft-img::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(7,9,13,0.75) 0%, transparent 55%);
        }
        .nft-foot {
          padding: 12px 18px; display: flex;
          justify-content: space-between; align-items: center;
        }
        .nft-handle { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: var(--amber); }
        .nft-meta { font-family: 'Space Mono', monospace; font-size: 0.58rem; color: var(--muted); }

        @media (max-width: 768px) {
          .hero-right { display: none; }
          #hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
          .hero-metrics { gap: 28px; }
        }
        @media (max-width: 480px) {
          .hero-name { font-size: 2.4rem; }
          .hero-actions { flex-direction: column; }
          .btn { width: 100%; text-align: center; justify-content: center; }
        }
      `}</style>
      <section id="hero">
        <div className="hero-left">
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for Collaboration
          </div>
          <h1 className="hero-name">
            Ola-salawu<br/>Olawale<br/>
            <span className="amber">Oluwasegun</span>
          </h1>
          <p className="hero-handle">// <span>known as Mr. Wale</span></p>
          <p className="hero-bio">
            <strong>A Software Engineer</strong> with a specialized focus in
            <strong> Web3 Security</strong> and blockchain ecosystems, building at the frontier
            of decentralized technology, writing, coding, and exploring the chain.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-solid">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href="https://dprince-ai.vercel.app" target="_blank" rel="noopener noreferrer" style={{background: 'linear-gradient(135deg,rgba(245,166,35,0.15),rgba(245,166,35,0.05))', border: '1px solid rgba(245,166,35,0.4)', color: 'var(--amber)', padding: '13px 28px', borderRadius: 'var(--radius)', fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.22s'}} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(245,166,35,0.2)'} onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(135deg,rgba(245,166,35,0.15),rgba(245,166,35,0.05))'}>
              <Play size={12} fill="currentColor" />
              DPRINCE AI
            </a>
          </div>
          <div className="hero-metrics">
            <div><span className="metric-val">4+</span><span className="metric-key">Ecosystems</span></div>
            <div><span className="metric-val">Web3</span><span className="metric-key">Security Focus</span></div>
          </div>
        </div>

        <div className="hero-right">
          <div className="id-card hover-toggle">
            <div className="card-bar">
              <span className="card-bar-label">Identity // Real World</span>
            </div>
            <div className="card-img" id="desktopSlide">
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
              <div 
                className="slide-progress running" 
                key={currentSlide} // Remounts to restart animation
                style={{ transition: 'width 10s linear', width: '100%' }}
              ></div>
            </div>
            <div className="card-body">
              <div className="card-name">Ola-salawu Olawale</div>
              <div className="card-role">// Software Engineer & Web3 Specialist</div>
              <div className="card-tags">
                <span className="ctag ctag-g">Web3 Security</span>
                <span className="ctag ctag-a">Blockchain</span>
                <span className="ctag ctag-g">Developer</span>
                <span className="ctag ctag-m">Content Writer</span>
                <span className="ctag ctag-a">Ambassador</span>
              </div>
            </div>
          </div>
          
          <div className="nft-card hover-toggle hover-toggle-amber">
            <div className="nft-bar">
              <span>Web3 Identity // On-Chain</span>
              <div className="nft-indicator">Live</div>
            </div>
            <div className="nft-img">
              <img src="/IMG_5807.jpeg" alt="Mr. Wale — BAYC Web3 PFP" />
            </div>
            <div className="nft-foot">
              <span className="nft-handle">@SalawuOO</span>
              <span className="nft-meta">BAYC // Web3 PFP</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
