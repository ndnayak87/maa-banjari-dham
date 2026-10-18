import { createContext, useContext, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./cloud";

const AUTH_KEY = "banjari_admin_auth";
const HASH_KEY = "banjari_admin_hash";
// sha256("banjari123")
const DEFAULT_HASH = "6aab0443a893e8a0ec5a245c4b957663e693f8fb1c18f7de218f739cfd751c5b";

export async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

let currentHash = DEFAULT_HASH;
try {
  const saved = localStorage.getItem(HASH_KEY);
  if (saved) currentHash = saved;
} catch {}

let readyPromise = Promise.resolve();

const Ctx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return localStorage.getItem(AUTH_KEY) || null; } catch { return null; }
  });

  useEffect(() => {
    readyPromise = (async () => {
      try {
        if (!db) return;
        const snap = await getDoc(doc(db, "config", "admin"));
        if (snap.exists() && snap.data().passwordHash) {
          currentHash = String(snap.data().passwordHash);
          try { localStorage.setItem(HASH_KEY, currentHash); } catch {}
        }
      } catch {}
    })();
  }, []);

  useEffect(() => {
    try {
      if (user) localStorage.setItem(AUTH_KEY, user);
      else localStorage.removeItem(AUTH_KEY);
    } catch {}
  }, [user]);

  async function login(u, p) {
    try { await readyPromise; } catch {}
    if (u.trim() !== "admin") return { ok: false, error: "Galat username ya password!" };
    let h = "";
    try { h = await sha256(p); } catch { h = p; }
    if (h === currentHash) { setUser("admin"); return { ok: true }; }
    return { ok: false, error: "Galat username ya password!" };
  }

  function logout() { setUser(null); }

  async function changePassword(oldPw, newPw) {
    try { await readyPromise; } catch {}
    if (!newPw || newPw.length < 4) return { ok: false, error: "Naya password kam se kam 4 akshar ka rakho." };
    const oldH = await sha256(oldPw);
    if (oldH !== currentHash) return { ok: false, error: "Purana password galat hai!" };
    const newH = await sha256(newPw);
    currentHash = newH;
    try { localStorage.setItem(HASH_KEY, newH); } catch {}
    try {
      if (db) await setDoc(doc(db, "config", "admin"), { passwordHash: newH });
    } catch {
      return { ok: false, error: "Password save nahi hua (internet?). Dobara try karo." };
    }
    return { ok: true };
  }

  return <Ctx.Provider value={{ user, isAdmin: !!user, login, logout, changePassword }}>{children}</Ctx.Provider>;
}

export function useAuth() { return useContext(Ctx); }