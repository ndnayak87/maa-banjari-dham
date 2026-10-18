import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function Login() {
  const { login, isAdmin, changePassword, logout } = useAuth();
  const nav = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [pw, setPw] = useState({ old: "", a: "", b: "" });
  const [pwMsg, setPwMsg] = useState("");
  const [pwErr, setPwErr] = useState("");
  const [pwBusy, setPwBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr(""); setBusy(true);
    const r = await login(u, p);
    setBusy(false);
    if (r.ok) nav("/admin");
    else setErr(r.error);
  }

  async function submitPw(e) {
    e.preventDefault();
    setPwErr(""); setPwMsg("");
    if (pw.a !== pw.b) { setPwErr("Dono naye password same nahi hain!"); return; }
    setPwBusy(true);
    const r = await changePassword(pw.old, pw.a);
    setPwBusy(false);
    if (!r.ok) { setPwErr(r.error); return; }
    setPwMsg("✅ Password badal gaya! Aage se naye password se login karna.");
    setPw({ old: "", a: "", b: "" });
  }

  if (isAdmin) {
    return (
      <div className="container narrow center-box">
        <h2>✅ Logged in ho</h2>
        <Link className="btn btn-primary" to="/admin">Admin kholo</Link>
        <div className="card" style={{ marginTop: 24, textAlign: "left" }}>
          <h3 className="sect" style={{ marginTop: 0 }}>🔒 Password Badlo</h3>
          {pwErr && <div className="error">{pwErr}</div>}
          {pwMsg && <p><b>{pwMsg}</b></p>}
          <form className="form" onSubmit={submitPw}>
            <input type="password" value={pw.old} onChange={(e) => setPw({ ...pw, old: e.target.value })} placeholder="Purana password" />
            <input type="password" value={pw.a} onChange={(e) => setPw({ ...pw, a: e.target.value })} placeholder="Naya password (kam se kam 4 akshar)" />
            <input type="password" value={pw.b} onChange={(e) => setPw({ ...pw, b: e.target.value })} placeholder="Naya password dobara" />
            <button className="btn btn-primary btn-small" type="submit" disabled={pwBusy}>{pwBusy ? "Ruko..." : "💾 Password Save"}</button>
          </form>
          <br />
          <button className="linklike" onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container narrow center-box">
      <h2>🔐 Login</h2>
      <p className="muted">Sirf mandir samiti ke liye.</p>
      <form className="form card-form" onSubmit={submit}>
        <label>Username<input value={u} onChange={(e) => setU(e.target.value)} autoFocus /></label>
        <label>Password<input type="password" value={p} onChange={(e) => setP(e.target.value)} /></label>
        {err && <div className="error">{err}</div>}
        <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Ruko..." : "Login →"}</button>
      </form>
    </div>
  );
}