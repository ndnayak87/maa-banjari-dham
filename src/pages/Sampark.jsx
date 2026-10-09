import { MANDIR } from "../lib/mandir";

const MAP_EMBED = "https://www.google.com/maps?q=Maa%20Banjari%20Dham%20Khapri%20Tilda%20Raipur%20Chhattisgarh%20493116&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Maa+Banjari+Dham+Khapri+Tilda+Raipur+Chhattisgarh+493116";

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
          style={{ width: "100%", height: 300, border: 0, borderRadius: 12, marginTop: 10 }}
          loading="lazy"
        ></iframe>
        <p>
          <a href={MAP_LINK} target="_blank" rel="noreferrer">📍 Google Maps me Rasta Dekho →</a>
        </p>
      </div>
      <div className="footer">🙏 जय माता दी! 🙏<br />Made by <a href="https://hoshiyartech.in/company" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a></div>
    </div>
  );
}