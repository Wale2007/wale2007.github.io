import { useState, useEffect } from 'react';

const JBIN_ID  = '69bd0864aa77b81da9005326';
const JBIN_KEY = '$2a$10$y1LzwCE2ThZHd4J4TL56muOySeO9lG0zmc4Wp8hdEcyev0azxJk3S';
const JBIN_URL = `https://api.jsonbin.io/v3/b/${JBIN_ID}`;

interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', role: '', text: '' });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [msg, setMsg] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(JBIN_URL + '/latest', {
          headers: { 'X-Master-Key': JBIN_KEY, 'X-Bin-Meta': 'false' }
        });
        if (!res.ok) throw new Error('fetch failed');
        const data = await res.json();
        const fetchedReviews = Array.isArray(data?.reviews) ? data.reviews : [];
        setReviews(fetchedReviews);
        localStorage.setItem('mrwale_reviews', JSON.stringify(fetchedReviews));
      } catch (e) {
        console.error(e);
        try {
          const local = JSON.parse(localStorage.getItem('mrwale_reviews') || '[]');
          setReviews(local);
        } catch {
          setReviews([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) {
      setMsg({ type: 'err', text: 'Please fill in your name and review.' });
      return;
    }
    if (!rating) {
      setMsg({ type: 'err', text: 'Please select a star rating before submitting.' });
      return;
    }

    setSubmitting(true);
    const newReview: Review = {
      name: form.name.trim(),
      role: form.role.trim(),
      text: form.text.trim(),
      rating,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    const newReviews = [newReview, ...reviews];
    setReviews(newReviews);
    localStorage.setItem('mrwale_reviews', JSON.stringify(newReviews));

    try {
      await fetch(JBIN_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': JBIN_KEY },
        body: JSON.stringify({ reviews: newReviews })
      });
      setMsg({ type: 'ok', text: 'Thank you! Your review has been posted successfully.' });
      setForm({ name: '', role: '', text: '' });
      setRating(0);
      
      // Notify by opening mail client
      const subject = encodeURIComponent(`New Portfolio Review from ${newReview.name}`);
      const body = encodeURIComponent(
        `Hi Wale,\n\nYou have a new review on your portfolio!\n\n` +
        `From: ${newReview.name}\nRole: ${newReview.role || 'Not specified'}\n` +
        `Rating: ${newReview.rating}/5 stars\nDate: ${newReview.date}\n\n` +
        `Review:\n"${newReview.text}"\n\nView it live: https://wale2007.github.io/#reviews`
      );
      const a = document.createElement('a');
      a.href = `mailto:wola77923@gmail.com?subject=${subject}&body=${body}`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => document.body.removeChild(a), 1500);

    } catch (err) {
      console.warn('JSONBin save failed, stored locally.', err);
      setMsg({ type: 'err', text: 'Saved locally, but failed to sync online.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        #reviews { background: var(--bg2); }
        .reviews-intro { font-size: 0.92rem; color: var(--muted); margin-bottom: 48px; max-width: 560px; line-height: 1.8; }
        .reviews-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px; margin-bottom: 48px; min-height: 60px;
        }
        .review-card {
          background: var(--surface); border: 1px solid var(--bdr);
          border-radius: var(--radius); padding: 24px 22px;
          position: relative; overflow: hidden;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .review-card::before {
          content: '"'; position: absolute; top: -4px; left: 14px;
          font-family: 'Syne', sans-serif; font-size: 4rem; color: var(--green);
          opacity: 0.12; line-height: 1; pointer-events: none;
        }
        .review-card:hover { border-color: rgba(0,230,118,0.25); box-shadow: var(--glow-g); }
        .review-stars { display: flex; gap: 3px; margin-bottom: 12px; }
        .review-star { color: var(--amber); font-size: 0.9rem; }
        .review-text { font-size: 0.88rem; color: var(--muted); line-height: 1.7; margin-bottom: 16px; font-style: italic; }
        .review-author { display: flex; align-items: center; gap: 10px; }
        .review-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, var(--green), var(--amber));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.8rem;
          color: var(--bg); flex-shrink: 0;
        }
        .review-name { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.85rem; color: var(--white); }
        .review-role { font-family: 'Space Mono', monospace; font-size: 0.6rem; color: var(--muted); letter-spacing: 0.08em; }
        .review-date { font-family: 'Space Mono', monospace; font-size: 0.58rem; color: var(--dim); margin-top: 10px; }
        .reviews-empty {
          font-family: 'Space Mono', monospace; font-size: 0.72rem;
          color: var(--dim); padding: 32px; text-align: center;
          border: 1px dashed var(--bdr); border-radius: var(--radius); grid-column: 1 / -1;
        }

        .review-form-wrap {
          border: 1px solid var(--bdr); border-radius: var(--radius);
          background: var(--surface); padding: 32px 36px;
          max-width: 640px;
        }
        .review-form-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1rem; color: var(--white); margin-bottom: 20px; }
        .review-form { display: flex; flex-direction: column; gap: 14px; }
        .review-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        
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
        
        .star-picker { display: flex; gap: 6px; align-items: center; margin-bottom: 4px; }
        .star-pick {
          font-size: 1.3rem; cursor: pointer; color: var(--dim);
          transition: color 0.15s, transform 0.15s; background: none; border: none; padding: 2px;
          line-height: 1;
        }
        .star-pick:hover, .star-pick.selected { color: var(--amber); transform: scale(1.2); }
        .rev-submit {
          background: var(--green); color: var(--bg);
          padding: 12px 28px; font-family: 'Space Mono', monospace;
          font-size: 0.74rem; letter-spacing: 0.12em; text-transform: uppercase;
          cursor: pointer; border: none; border-radius: var(--radius);
          align-self: flex-start; transition: all 0.22s;
        }
        .rev-submit:hover { background: var(--amber); box-shadow: var(--glow-a); transform: translateY(-2px); }
        .rev-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .rev-msg { font-family: 'Space Mono', monospace; font-size: 0.7rem; padding: 10px 16px; border-radius: var(--radius); display: none; }
        .rev-msg.ok { display:block; color:var(--green); background:rgba(0,230,118,0.07); border:1px solid rgba(0,230,118,0.2); }
        .rev-msg.err { display:block; color:#f97171; background:rgba(249,113,113,0.07); border:1px solid rgba(249,113,113,0.2); }

        @media (max-width: 600px) {
          .review-row { grid-template-columns: 1fr; }
          .review-form-wrap { padding: 22px 18px; }
        }
      `}</style>
      <section id="reviews">
        <div className="inner">
          <div className="sec-label fade-up">06 // Reviews</div>
          <h2 className="sec-title fade-up">What People <span className="hl">Say</span></h2>
          <p className="reviews-intro fade-up">
            Honest feedback from collaborators, ecosystem partners, and community members.
            All reviews are public and submitted directly through this page.
          </p>

          <div className="reviews-grid">
            {loading ? (
              <div className="reviews-empty fade-up in">
                <div style={{ marginBottom: '12px', color: 'var(--green)' }}>Fetching reviews...</div>
                <div className="ai-typing" style={{ width: '40px', margin: '0 auto' }}>
                  <div className="ai-td"></div><div className="ai-td"></div><div className="ai-td"></div>
                </div>
              </div>
            ) : reviews.length === 0 ? (
              <div className="reviews-empty fade-up in">
                <div style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--white)' }}>No reviews yet</div>
                <div style={{ color: 'var(--muted)' }}>Be the first to share your experience working with Mr. Wale!</div>
              </div>
            ) : (
              reviews.map((r, i) => (
                <div key={i} className="review-card fade-up hover-toggle">
                  <div className="review-stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="review-star">
                        {star <= r.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <div className="review-text">{r.text}</div>
                  <div className="review-author">
                    <div className="review-avatar">
                      {(r.name || 'A').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)}
                    </div>
                    <div>
                      <div className="review-name">{r.name}</div>
                      {r.role && <div className="review-role">{r.role}</div>}
                    </div>
                  </div>
                  <div className="review-date">{r.date}</div>
                </div>
              ))
            )}
          </div>

          <div className="review-form-wrap fade-up">
            <div className="review-form-title">Leave a Review</div>
            <form className="review-form" onSubmit={handleSubmit} noValidate>
              <div className="review-row">
                <div className="f-group">
                  <label className="f-label">Your Name</label>
                  <input className="f-input" type="text" placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div className="f-group">
                  <label className="f-label">Your Role / Company</label>
                  <input className="f-input" type="text" placeholder="e.g. Web3 Developer, FUTA" value={form.role} onChange={e => setForm({...form, role: e.target.value})} />
                </div>
              </div>
              <div className="f-group">
                <label className="f-label">Rating</label>
                <div className="star-picker" onMouseLeave={() => setHoverRating(0)}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star} type="button"
                      className={`star-pick ${star <= (hoverRating || rating) ? 'selected' : ''}`}
                      onMouseEnter={() => setHoverRating(star)}
                      onClick={() => setRating(star)}
                    >★</button>
                  ))}
                </div>
              </div>
              <div className="f-group">
                <label className="f-label">Your Review</label>
                <textarea className="f-textarea" placeholder="Share your experience working with Mr. Wale..." value={form.text} onChange={e => setForm({...form, text: e.target.value})} required style={{ minHeight: '110px' }}></textarea>
              </div>
              {msg.text && <div className={`rev-msg ${msg.type}`}>{msg.text}</div>}
              <button type="submit" className="rev-submit hover-toggle-amber" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
