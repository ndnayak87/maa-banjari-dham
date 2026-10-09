import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MANDIR, HERO, PHOTOS, FACILITIES } from "../lib/mandir";

export default function Home({ news, uploads = [] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <section className="slider">
        <img src={HERO[i]} alt="Mata Rani" />
        <div className="slide-cap">🙏 {MANDIR.name} 🙏</div>
        <div className="dots">
          {HERO.map((_, k) => (
            <span key={k} className={k === i ? "dot on" : "dot"} onClick={() => setI(k)} />
          ))}
        </div>
      </section>

      <div className="container">
        <div className="timing">🕐 दर्शन समय: {MANDIR.timing}</div>

        <h2 className="sect">📢 सूचनाएं</h2>
        {news.slice(0, 7).map((n) => (
          <div key={n.id} className="card">
            <b>{n.title}</b>
            <p>{n.body}</p>
            <small>{n.date}</small>
          </div>
        ))}

        <h2 className="sect">🛕 मंदिर के बारे में</h2>
        <div className="card">
          <p>तिल्दा के पास खपरी (मढ़ी) में स्थित <b>माँ बंजारी धाम मंदिर</b> आस्था का केंद्र है। नवरात्रि के समय यहां विशेष पूजा-अर्चना होती है और दूर-दूर से भक्त दर्शन के लिए आते हैं।</p>
          <Link className="btn btn-small" to="/itihas">पूरा इतिहास पढ़ो →</Link>
        </div>

        <h2 className="sect">✨ सुविधाएं</h2>
        <div className="grid">
          {FACILITIES.map((f) => (
            <div key={f.title} className="fcard">
              <div className="femoji">{f.emoji}</div>
              <b>{f.title}</b>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="sect">🖼️ झलकियां</h2>
        <div className="grid">
          {[...uploads.slice(0, 4).map((u) => ({ src: u.src, caption: u.caption || "नयी झलक" })), ...PHOTOS.slice(0, Math.max(0, 4 - Math.min(4, uploads.length)))].map((p, k) => (
            <figure key={k} className="photo">
              <img src={p.src} alt={p.caption} loading="lazy" />
            </figure>
          ))}
        </div>
        <Link className="btn btn-ghost" to="/photos">सारी फोटो देखो →</Link>

        <div className="cta-box">
          <h3>🪔 दान-सहयोग</h3>
          <p>मंदिर के विकास में सहयोग करें — पुण्य कमाएं!</p>
          <Link className="btn btn-call" to="/daan">दान करो →</Link>
        </div>

        <div className="footer">🙏 <b>{MANDIR.name}</b> 🙏<br />{MANDIR.address}<br />Made by <a href="https://hoshiyartech.in/company" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a></div>
      </div>
    </div>
  );
}
