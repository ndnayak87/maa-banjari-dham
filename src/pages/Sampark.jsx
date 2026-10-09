import { MANDIR } from "../lib/mandir";

export default function Sampark() {
  return (
    <div className="container narrow">
      <h2 className="ptitle">📞 संपर्क करो</h2>
      <div className="card">
        <b>🛕 {MANDIR.name}</b>
        <p>📍 {MANDIR.address}</p>
        <p>🕐 दर्शन समय: {MANDIR.timing}</p>
      </div>
      <div className="footer">🙏 जय माता दी! 🙏<br />Made by <a href="https://hoshiyartech.in" target="_blank" rel="noreferrer"><b>HoshiyarTech</b></a></div>
    </div>
  );
}
