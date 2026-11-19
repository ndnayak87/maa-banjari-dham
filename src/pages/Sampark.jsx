import { MANDIR } from "../lib/mandir";

const MAP_EMBED = "https://maps.google.com/maps?q=21.4618793,81.8167624&z=16&hl=hi&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=21.4618793,81.8167624&query_place_id=ChIJEZqpqm_yKDoRX0HX60ttO4w";

export default function Sampark() {
  return (
    <div className="container narrow">
      <h2 className="ptitle">📞 संपर्क करो</h2>
      <div className="card">
        <b>🛕 {MANDIR.name}</b>
        <p>📍 {MANDIR.address}</p>
        <p>🕐 दर्शन समय: {MANDIR.timing}</p>
      </div>
      <div className="card">
        <b>🗺️ मंदिर का स्थान</b>
        <div style={{ position: "relative", marginTop: 10 }}>
          <iframe
            title="Maa Banjari Dham Map"
            src={MAP_EMBED}
            style={{ width: "100%", height: 320, border: 0, borderRadius: 12, display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Maps में खोलें"
            title="Google Maps में खोलें"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 12,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: 10,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                background: "rgba(0,0,0,0.72)",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(0,0,0,.25)",
              }}
            >
              🔍 बड़ा नक्शा खोलें
            </span>
          </a>
          <a
            href="https://hoshiyartech.in/company"
            target="_blank"
            rel="noreferrer"
            title="HoshiyarTech — वेबसाइट बनाने वाला"
            style={{
              position: "absolute",
              left: 10,
              bottom: 10,
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              gap: 7,
              background: "rgba(255,255,255,0.94)",
              padding: "4px 11px 4px 4px",
              borderRadius: 999,
              textDecoration: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.28)",
            }}
          >
            <img
              src="/hoshiyar-badge.jpg"
              alt="HoshiyarTech"
              style={{ width: 26, height: 26, borderRadius: "50%", objectFit: "cover", display: "block" }}
            />
            <span style={{ fontSize: 12, fontWeight: 800, color: "#431407", letterSpacing: 0.2 }}>
              HoshiyarTech
            </span>
          </a>
        </div>
        <p className="muted" style={{ marginTop: 10, marginBottom: 6 }}>
          नक्शे पर क्लिक करने से Google Maps में खुल जाएगा।
        </p>
        <p>
          <a className="btn btn-small" href={MAP_LINK} target="_blank" rel="noreferrer">📍 Google Maps में रास्ता देखें →</a>
        </p>
      </div>
      <div className="footer">🙏 जय माता दी! 🙏<br />Made by <a href="https://hoshiyartech.in/company" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a></div>
    </div>
  );
}