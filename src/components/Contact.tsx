import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [msg, setMsg] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setMsg({ type: 'err', text: 'Please fill in all required fields.' });
      return;
    }
    
    setSubmitting(true);
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:wola77923@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      setMsg({ type: 'ok', text: 'Mail client opened. Your message has been prepared.' });
      setSubmitting(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <>
      <style>{`
        #contact { background: var(--bg); }
        .contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; }
        .contact-intro { font-size: 0.95rem; color: var(--muted); margin-bottom: 34px; line-height: 1.85; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .f-group { display: flex; flex-direction: column; gap: 7px; }
        .f-label { font-family: 'Space Mono', monospace; font-size: 0.6rem; color: var(--text-muted); letter-spacing: 0.16em; text-transform: uppercase; }
        .f-input, .f-textarea {
          background: var(--surface); border: 1px solid var(--bdr);
          color: var(--text-main); padding: 13px 16px;
          font-family: 'Inter', sans-serif; font-size: 0.88rem; font-weight: 300;
          outline: none; border-radius: var(--radius); resize: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .f-input::placeholder, .f-textarea::placeholder { color: var(--dim); }
        .f-input:focus, .f-textarea:focus { border-color: rgba(5,150,105,0.5); box-shadow: 0 0 0 3px rgba(5,150,105,0.06); }
        .f-textarea { min-height: 140px; }
        .f-submit {
          background: var(--green); color: var(--bg);
          padding: 14px 30px; font-family: 'Space Mono', monospace;
          font-size: 0.76rem; letter-spacing: 0.12em; text-transform: uppercase;
          cursor: pointer; border: none; border-radius: var(--radius);
          align-self: flex-start; transition: all 0.22s;
        }
        .f-submit:hover { background: var(--amber); box-shadow: var(--glow-a); transform: translateY(-2px); }
        .f-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
        .f-msg { font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 10px 16px; border-radius: var(--radius); display: none; }
        .f-msg.ok { display:block; color:var(--green); background:rgba(0,230,118,0.07); border:1px solid rgba(0,230,118,0.2); }
        .f-msg.err { display:block; color:#f97171; background:rgba(249,113,113,0.07); border:1px solid rgba(249,113,113,0.2); }

        .contact-details { display: flex; flex-direction: column; gap: 14px; }
        .c-item {
          display: flex; align-items: center; gap: 18px;
          padding: 20px 22px; border: 1px solid var(--bdr);
          border-radius: var(--radius); background: var(--surface);
          transition: border-color 0.22s;
        }
        .c-item:hover { border-color: rgba(245,166,35,0.3); }
        .c-ico {
          width: 38px; height: 38px; flex-shrink: 0;
          border: 1px solid var(--bdr); border-radius: var(--radius);
          display: flex; align-items: center; justify-content: center; background: var(--sur2);
        }
        .c-ico svg { width: 16px; height: 16px; fill: var(--amber); }
        .c-key { font-family: 'Space Mono', monospace; font-size: 0.6rem; color: var(--muted); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 4px; }
        .c-val { font-size: 0.9rem; color: var(--white); }
        .c-val a { color: var(--white); text-decoration: none; transition: color 0.2s; }
        .c-val a:hover { color: var(--amber); }
        .social-strip { display: flex; gap: 10px; margin-top: 8px; }
        .soc-btn {
          flex: 1; padding: 12px 16px; text-align: center;
          border: 1px solid var(--bdr); border-radius: var(--radius);
          font-family: 'Space Mono', monospace; font-size: 0.65rem;
          color: var(--muted); text-decoration: none; letter-spacing: 0.1em;
          transition: all 0.22s;
        }
        .soc-btn:hover { border-color: var(--amber); color: var(--amber); }

        footer {
          background: var(--sur2); border-top: 1px solid var(--bdr);
          padding: 36px 80px;
          display: flex; justify-content: space-between; align-items: center;
          position: relative; z-index: 1;
          color: var(--text-muted);
        }
        .foot-copy { font-family: 'Space Mono', monospace; font-size: 0.62rem; color: inherit; letter-spacing: 0.08em; }
        .foot-copy span { color: var(--green); }
        .foot-status {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Mono', monospace; font-size: 0.62rem;
          color: inherit; letter-spacing: 0.1em;
        }
        .foot-status::before {
          content: ''; width: 7px; height: 7px;
          background: var(--green); border-radius: 50%; animation: pulse 2s infinite;
        }
        @media (max-width: 1024px) { footer { padding: 32px 32px; } }
        @media (max-width: 768px) {
          footer { flex-direction: column; gap: 14px; padding: 28px 22px; text-align: center; }
          .social-strip { flex-direction: column; }
        }
      `}</style>

      <section id="contact">
        <div className="inner">
          <div className="sec-label fade-up">07 // Contact</div>
          <h2 className="sec-title fade-up">Let&rsquo;s <span className="hl">Connect</span></h2>
          <div className="contact-grid">
            <div className="fade-up">
              <p className="contact-intro">
                Whether you are building a Web3 project, looking for a brand ambassador,
                a technical content writer, or simply want to connect. My inbox is open.
              </p>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="f-group">
                  <label className="f-label">Your Name</label>
                  <input className="f-input" type="text" placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div className="f-group">
                  <label className="f-label">Email Address</label>
                  <input className="f-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                </div>
                <div className="f-group">
                  <label className="f-label">Subject</label>
                  <input className="f-input" type="text" placeholder="Collaboration / Project / Ambassador" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                </div>
                <div className="f-group">
                  <label className="f-label">Message</label>
                  <textarea className="f-textarea" placeholder="What would you like to discuss?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} required></textarea>
                </div>
                {msg.text && <div className={`f-msg ${msg.type}`}>{msg.text}</div>}
                <button type="submit" className="f-submit hover-toggle-amber" disabled={submitting}>
                  {submitting ? 'Opening mail client...' : 'Send Message \u2192'}
                </button>
              </form>
            </div>

            <div className="contact-details fade-up">
              <div className="c-item hover-toggle hover-toggle-amber">
                <div className="c-ico">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <div className="c-key">Email</div>
                  <div className="c-val"><a href="mailto:wola77923@gmail.com">wola77923@gmail.com</a></div>
                </div>
              </div>
              <div className="c-item hover-toggle hover-toggle-amber">
                <div className="c-ico">
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z"/></svg>
                </div>
                <div>
                  <div className="c-key">Phone / WhatsApp</div>
                  <div className="c-val"><a href="https://wa.me/2348135529459?text=Hi%2C%20my%20name%20is%20" target="_blank" rel="noopener noreferrer">+234 813 552 9459</a></div>
                </div>
              </div>
              <div className="c-item hover-toggle hover-toggle-amber">
                <div className="c-ico">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div>
                  <div className="c-key">Location</div>
                  <div className="c-val">Nigeria, Available Globally</div>
                </div>
              </div>
              <div className="c-item hover-toggle hover-toggle-amber">
                <div className="c-ico">
                  <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
                </div>
                <div>
                  <div className="c-key">Institution</div>
                  <div className="c-val">FUTA, B.Tech Software Engineering</div>
                </div>
              </div>
              <div className="social-strip">
                <a href="https://twitter.com/SalawuOO" target="_blank" rel="noopener noreferrer" className="soc-btn hover-toggle hover-toggle-amber">X / @SalawuOO</a>
                <a href="https://github.com/Wale2007" target="_blank" rel="noopener noreferrer" className="soc-btn hover-toggle hover-toggle-amber">GitHub / Wale2007</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot-copy">&copy; {new Date().getFullYear()} <span>Ola-salawu Olawale</span> | Mr. Wale</div>
        <div className="foot-status">Open to opportunities</div>
      </footer>
    </>
  );
};

export default Contact;
