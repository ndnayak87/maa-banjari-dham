import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MANDIR } from "../lib/mandir";
import { useAuth } from "../lib/auth";

const MENU = [
  ["होम", "/"],
  ["इतिहास", "/itihas"],
  ["फोटो", "/photos"],
  ["सुविधाएं", "/suvidha"],
  ["ट्रस्ट", "/trust"],
  ["दान", "/daan"],
  ["संपर्क", "/sampark"],
];

export default function Header() {
  const { isAdmin, logout } = useAuth();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, []);
  return (
    <>
      <div className="topbar">🙏 जय माता दी! 🙏</div>
      <header className="header">
        <Link to="/" className="brand">
          <img className="blogo" src="/logo.jpg" alt="Maa Banjari Dham" />
          <h1>{MANDIR.name}<small>{MANDIR.place}</small></h1>
        </Link>
        <button className="menubtn" onClick={() => setOpen(!open)}>☰</button>
        <nav className={"tabs" + (open ? " open" : "")}>
          {MENU.map(([t, to]) => (
            <Link key={to + t} to={to} onClick={() => setOpen(false)}>{t}</Link>
          ))}
          {isAdmin ? (
            <>
              <Link to="/admin" onClick={() => setOpen(false)}>⚙️ एडमिन</Link>
              <Link to="/login" onClick={() => setOpen(false)}>🔒 पासवर्ड</Link>
              <button className="linkbtn" onClick={() => { logout(); nav("/"); }}>लॉगआउट</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>🔐 लॉगिन</Link>
          )}
        </nav>
      </header>
    </>
  );
}
