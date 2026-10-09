import { MANDIR } from "../lib/mandir";

export default function Daan() {
  return (
    <div className="container narrow">
      <h2 className="ptitle">🪔 दान-सहयोग</h2>
      <div className="card">
        <p>मंदिर के विकास, पूजा-सामग्री और भक्त सुविधाओं के लिए आपका सहयोग अमूल्य है।</p>
        <p>दान/सहयोग के लिए मंदिर समिति से संपर्क करें:</p>
        <p>📍 {MANDIR.address}</p>
        <p className="muted">(दान की रसीद मंदिर कार्यालय से प्राप्त करें।)</p>
      </div>
    </div>
  );
}
