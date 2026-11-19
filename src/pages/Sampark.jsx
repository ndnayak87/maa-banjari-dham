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
        <iframe
          title="Maa Banjari Dham Map"
          src={MAP_EMBED}
          style={{ width: "100%", height: 320, border: 0, borderRadius: 12, marginTop: 10 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="muted" style={{ marginBottom: 4 }}>मैप नहीं दिख रहा? नीचे वाले लिंक से खोलें ↓</p>
        <p>
          <a className="btn btn-small" href={MAP_LINK} target="_blank" rel="noreferrer">📍 Google Maps में रास्ता देखें →</a>
        </p>
      </div>
      <div className="footer">🙏 जय माता दी! 🙏<br />Made by <a href="https://hoshiyartech.in/company" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a></div>
    </div>
  );
}