import { createContext, useContext, useState, useEffect } from "react";

const AUTH_KEY = "banjari_admin_auth";
const CRED = { username: "admin", password: "banjari123" };

const Ctx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return localStorage.getItem(AUTH_KEY) || null; } catch { return null; }
  });
  useEffect(() => {
    try {
      if (user) localStorage.setItem(AUTH_KEY, user);
      else localStorage.removeItem(AUTH_KEY);
    } catch {}
  }, [user]);

  function login(u, p) {
    if (u.trim() === CRED.username && p === CRED.password) {
      setUser(u.trim());
      return { ok: true };
    }
    return { ok: false, error: "Galat username ya password!" };
  }
  function logout() { setUser(null); }
  return <Ctx.Provider value={{ user, isAdmin: !!user, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() { return useContext(Ctx); }
