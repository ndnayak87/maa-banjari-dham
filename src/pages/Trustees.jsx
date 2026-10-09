export default function Trustees({ trustees }) {
  return (
    <div className="container">
      <h2 className="ptitle">🙏 Trust / Samiti</h2>
      <p className="muted">मंदिर समिति के सदस्य — फोटो जल्द जोड़ी जाएंगी!</p>
      {trustees.length === 0 && (
        <div className="empty">
          <h3>🙏 सदस्य सूची जल्द आएगी!</h3>
          <p>Trust सदस्यों के नाम-फोटो Admin से जोड़े जाएंगे।</p>
        </div>
      )}
      <div className="grid">
        {trustees.map((t) => (
          <div key={t.id} className="tcard">
            <div className="tphoto">{t.photo ? <img src={t.photo} alt={t.name} loading="lazy" /> : "🙏"}</div>
            <b>{t.name}</b>
            <div className="tpost">{t.post}</div>
            <small>{t.phone}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
