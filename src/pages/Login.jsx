import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function Login() {
  const { login, isAdmin } = useAuth();
  const nav = useNavigate();
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");

  if (isAdmin) {
    return (
      <div className="container narrow center-box">
        <h2>✅ Logged in ho</h2>
        <Link className="btn btn-primary" to="/admin">Admin kholo</Link>
      </div>
    );
  }

  function submit(e) {
    e.preventDefault();
    const r = login(u, p);
    if (r.ok) nav("/admin");
    else setErr(r.error);
  }

  return (
    <div className="container narrow center-box">
      <h2>🔐 Login</h2>
      <p className="muted">Sirf mandir samiti ke liye.</p>
      <form className="form card-form" onSubmit={submit}>
        <label>Username<input value={u} onChange={(e) => setU(e.target.value)} autoFocus /></label>
        <label>Password<input type="password" value={p} onChange={(e) => setP(e.target.value)} /></label>
        {err && <div className="error">{err}</div>}
        <button className="btn btn-primary" type="submit">Login →</button>
      </form>
    </div>
  );
}
