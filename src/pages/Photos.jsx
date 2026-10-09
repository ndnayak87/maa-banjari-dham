import { useState, useEffect, useMemo } from "react";
import { PHOTOS } from "../lib/mandir";

export default function Photos({ uploads = [] }) {
  const [open, setOpen] = useState(null); // index or null

  // Nayi upload ki hui photo sabse upar, phir purani static photos
  const all = useMemo(() => {
    const ups = (uploads || []).map((u) => ({ src: u.src, caption: u.caption || "भक्त द्वारा" }));
    return [...ups, ...PHOTOS];
  }, [uploads]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((p) => (p + 1) % all.length);
      if (e.key === "ArrowLeft") setOpen((p) => (p - 1 + all.length) % all.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, all.length]);

  return (
    <div className="container">
      <h2 className="ptitle">🖼️ मंदिर की झलकियां</h2>
      {uploads.length > 0 && <p className="muted">✨ {uploads.length} nayi photo bhakton dwara jodi gayi</p>}
      <div className="grid">
        {all.map((p, i) => (
          <figure key={(p.src || "").slice(0, 40) + i} className="photo photo-click" onClick={() => setOpen(i)}>
            <img src={p.src} alt={p.caption || "Maa Banjari Dham"} loading="lazy" />
          </figure>
        ))}
      </div>

      {open !== null && all[open] && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lb-close" onClick={() => setOpen(null)}>✕</button>
          <button className="lb-prev" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + all.length) % all.length); }}>◀</button>
          <img
            className="lb-img"
            src={all[open].src}
            alt={all[open].caption || "Maa Banjari Dham"}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lb-next" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % all.length); }}>▶</button>
          <div className="lb-count" onClick={(e) => e.stopPropagation()}>{open + 1} / {all.length}</div>
        </div>
      )}
    </div>
  );
}
