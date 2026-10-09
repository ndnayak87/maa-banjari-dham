import { useState, useRef } from "react";
import { useAuth } from "../lib/auth";
import { fileToCompressedDataUrl } from "../lib/image";

export default function Admin({ news, add, remove, update, trustees, photos }) {
  const { user, logout } = useAuth();
  const [f, setF] = useState({ title: "", body: "" });
  const [editNewsId, setEditNewsId] = useState(null);
  const [t, setT] = useState({ name: "", post: "", phone: "", photo: "" });
  const [editTrustId, setEditTrustId] = useState(null);
  const [cap, setCap] = useState("");
  const [preview, setPreview] = useState("");
  const [busy, setBusy] = useState(false);
  const fileRef = useRef(null);
  const [tBusy, setTBusy] = useState(false);
  const tFileRef = useRef(null);

  function submit(e) {
    e.preventDefault();
    if (!f.title.trim()) { alert("Title zaroori hai!"); return; }
    if (editNewsId) {
      const old = news.find((n) => n.id === editNewsId);
      update(editNewsId, { title: f.title.trim(), body: f.body, date: old?.date || new Date().toISOString().slice(0, 10) });
      setEditNewsId(null);
    } else {
      add({ title: f.title.trim(), body: f.body });
    }
    setF({ title: "", body: "" });
  }
  function startEditNews(n) {
    setEditNewsId(n.id);
    setF({ title: n.title || "", body: n.body || "" });
  }
  function cancelEditNews() {
    setEditNewsId(null);
    setF({ title: "", body: "" });
  }
  function submitT(e) {
    e.preventDefault();
    if (!t.name.trim()) { alert("Naam zaroori hai!"); return; }
    if (editTrustId) {
      trustees.update(editTrustId, { name: t.name.trim(), post: t.post, phone: t.phone, photo: t.photo });
      setEditTrustId(null);
    } else {
      trustees.add({ name: t.name.trim(), post: t.post, phone: t.phone, photo: t.photo });
    }
    setT({ name: "", post: "", phone: "", photo: "" });
    if (tFileRef.current) tFileRef.current.value = "";
  }
  function startEditTrust(m) {
    setEditTrustId(m.id);
    setT({ name: m.name || "", post: m.post || "", phone: m.phone || "", photo: m.photo || "" });
  }
  function cancelEditTrust() {
    setEditTrustId(null);
    setT({ name: "", post: "", phone: "", photo: "" });
    if (tFileRef.current) tFileRef.current.value = "";
  }

  async function onTrusteeFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { alert("Sirf photo chunein!"); return; }
    try {
      setTBusy(true);
      const dataUrl = await fileToCompressedDataUrl(file, 512, 0.7);
      setT({ ...t, photo: dataUrl });
    } catch {
      alert("Photo khol nahi paye, dusri photo try karo");
    } finally {
      setTBusy(false);
    }
  }

  async function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { alert("Sirf photo chunein!"); return; }
    try {
      setBusy(true);
      const dataUrl = await fileToCompressedDataUrl(file);
      setPreview(dataUrl);
    } catch {
      alert("Photo khol nahi paye, dusri photo try karo");
    } finally {
      setBusy(false);
    }
  }

  async function uploadPhoto() {
    if (!preview) { alert("Pehle gallery se photo chuno!"); return; }
    try {
      setBusy(true);
      await photos.add({ src: preview, caption: cap.trim() || "भक्त द्वारा" });
      setPreview("");
      setCap("");
      if (fileRef.current) fileRef.current.value = "";
      alert("Photo upload ho gayi! 🙏");
    } catch {
      alert("Upload fail — photo bahut badi ho sakti hai, dusri chhoti photo try karo");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="container wide">
      <br />
      <h2>⚙️ Mandir Admin</h2>
      <p className="muted">Namaste, <b>{user}</b>! <button className="linklike" onClick={logout}>Logout</button></p>

      <div className="panel">
        <h3>📸 Gallery Photo ({photos?.items?.length || 0})</h3>
        <p className="muted">Mobile se gallery se chuno — photo sidha Photos page par dikhegi.</p>
        <div className="form">
          <label>Gallery se photo chuno *
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onFile}
            />
          </label>
          <label>Caption
            <input value={cap} onChange={(e) => setCap(e.target.value)} placeholder="jaise: Navratri bheed" maxLength={60} />
          </label>
          {preview && (
            <div className="photo" style={{ maxWidth: 260 }}>
              <img src={preview} alt="preview" />
            </div>
          )}
          <div>
            <button className="btn btn-primary btn-small" type="button" disabled={busy || !preview} onClick={uploadPhoto}>
              {busy ? "Ruko..." : "⬆️ Upload Photo"}
            </button>
            {preview && (
              <button className="btn btn-ghost btn-small" type="button" style={{ marginLeft: 8 }} onClick={() => { setPreview(""); if (fileRef.current) fileRef.current.value = ""; }}>
                Hatao
              </button>
            )}
          </div>
        </div>
        <div className="table">
          {(photos?.items || []).map((p) => (
            <div key={p.id} className="trow">
              <img src={p.src} alt="" style={{ width: 52, height: 52, objectFit: "cover", borderRadius: 8 }} />
              <span className="ttitle">{p.caption || "photo"}<small>{p.date}</small></span>
              <button className="btn btn-danger btn-small" onClick={() => { if (confirm("Photo hataye?")) photos.remove(p.id); }}>Del</button>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <h3>📢 Suchna ({news.length})</h3>
        <form className="form" onSubmit={submit}>
          <input value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} placeholder="Suchna ka title *" />
          <input value={f.body} onChange={(e) => setF({ ...f, body: e.target.value })} placeholder="Detail" />
          {editNewsId ? (
            <div>
              <button className="btn btn-primary btn-small" type="submit">💾 Save</button>
              <button className="btn btn-ghost btn-small" type="button" style={{ marginLeft: 8 }} onClick={cancelEditNews}>Cancel</button>
            </div>
          ) : (
            <button className="btn btn-primary btn-small" type="submit">+ Add</button>
          )}
        </form>
        <div className="table">
          {news.map((n) => (
            <div key={n.id} className="trow">
              <span className="ttitle">{n.title}<small>{n.date}</small></span>
              <button className="btn btn-ghost btn-small" style={{ marginRight: 8 }} onClick={() => startEditNews(n)}>Edit</button>
              <button className="btn btn-danger btn-small" onClick={() => { if (confirm("Delete?")) { if (editNewsId === n.id) cancelEditNews(); remove(n.id); } }}>Del</button>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <h3>🙏 Trust Sadasya ({trustees.n.length})</h3>
        <form className="form" onSubmit={submitT}>
          <input value={t.name} onChange={(e) => setT({ ...t, name: e.target.value })} placeholder="Naam *" />
          <input value={t.post} onChange={(e) => setT({ ...t, post: e.target.value })} placeholder="Post (jaise Adhyaksh)" />
          <input value={t.phone} onChange={(e) => setT({ ...t, phone: e.target.value })} placeholder="Phone" />
          <label>Gallery se photo chuno
            <input
              ref={tFileRef}
              type="file"
              accept="image/*"
              onChange={onTrusteeFile}
            />
          </label>
          {t.photo && (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src={t.photo} alt="preview" style={{ width: 72, height: 72, objectFit: "cover", borderRadius: "50%", border: "3px solid var(--gold)" }} />
              <button className="btn btn-ghost btn-small" type="button" onClick={() => { setT({ ...t, photo: "" }); if (tFileRef.current) tFileRef.current.value = ""; }}>
                Hatao
              </button>
            </div>
          )}
          <button className="btn btn-primary btn-small" type="submit" disabled={tBusy}>{tBusy ? "Ruko..." : editTrustId ? "💾 Save" : "+ Add"}</button>
          {editTrustId && (
            <button className="btn btn-ghost btn-small" type="button" style={{ marginLeft: 8 }} onClick={cancelEditTrust}>Cancel</button>
          )}
        </form>
        <div className="table">
          {trustees.n.map((m) => (
            <div key={m.id} className="trow">
              {m.photo
                ? <img src={m.photo} alt="" style={{ width: 44, height: 44, objectFit: "cover", borderRadius: "50%" }} />
                : <span style={{ fontSize: 28 }}>🙏</span>}
              <span className="ttitle">{m.name}<small>{m.post}</small></span>
              <button className="btn btn-ghost btn-small" style={{ marginRight: 8 }} onClick={() => startEditTrust(m)}>Edit</button>
              <button className="btn btn-danger btn-small" onClick={() => { if (confirm("Delete?")) { if (editTrustId === m.id) cancelEditTrust(); trustees.remove(m.id); } }}>Del</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
