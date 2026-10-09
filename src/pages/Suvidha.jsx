import { FACILITIES } from "../lib/mandir";

export default function Suvidha() {
  return (
    <div className="container">
      <h2 className="ptitle">✨ भक्तों की सुविधाएं</h2>
      <div className="grid">
        {FACILITIES.map((f) => (
          <div key={f.title} className="fcard">
            <div className="femoji">{f.emoji}</div>
            <b>{f.title}</b>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
