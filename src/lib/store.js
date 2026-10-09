import { useState, useEffect } from "react";
import {
  collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, getDocs,
} from "firebase/firestore";
import { db } from "./cloud";
import { SEED_NEWS, SEED_TRUSTEES } from "./mandir";

// Cloud (Firestore) first — sab devices me same data!
// Cloud na chale to localStorage backup.
function makeStore(coll, localKey, seed) {
  function readLocal() {
    try {
      const raw = localStorage.getItem(localKey);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
      }
    } catch {}
    return seed;
  }

  return function useStore() {
    const [items, setItems] = useState(readLocal);
    const [live, setLive] = useState(false);

    useEffect(() => {
      if (!db) return;
      let unsub = null;
      // Pehle cloud se ek baar lao (seed khaali ho to daal do)
      getDocs(collection(db, coll))
        .then((snap) => {
          if (snap.empty) {
            // Pehli baar — seeds cloud me daalo taaki sabko dikhe!
            seed.forEach((s) => {
              const { id, ...rest } = s;
              addDoc(collection(db, coll), { ...rest, _seed: id }).catch(() => {});
            });
          }
          unsub = onSnapshot(
            collection(db, coll),
            (ss) => {
              const list = ss.docs.map((d) => ({ id: d.id, ...d.data() }));
              list.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
              setItems(list);
              setLive(true);
              try { localStorage.setItem(localKey, JSON.stringify(list)); } catch {}
            },
            () => setLive(false)
          );
        })
        .catch(() => setLive(false));
      return () => { if (unsub) unsub(); };
    }, []);

    async function add(d) {
      const data = { date: new Date().toISOString().slice(0, 10), ...d };
      if (db && live) {
        try {
          await addDoc(collection(db, coll), data);
          return;
        } catch {}
      }
      const it = { id: "x" + Date.now(), ...data };
      setItems((p) => [it, ...p]);
      try { localStorage.setItem(localKey, JSON.stringify([it, ...items])); } catch {}
    }

    async function remove(id) {
      if (db && live) {
        try {
          // Local seed-id ho to cloud doc nahi — list se hatao
          if (!String(id).startsWith("x") && id.length < 10) {
            setItems((p) => p.filter((x) => x.id !== id));
            return;
          }
          await deleteDoc(doc(db, coll, id));
          return;
        } catch {}
      }
      setItems((p) => p.filter((x) => x.id !== id));
    }

    async function update(id, data) {
      // date field banaye rakho — caller purani date bhejta hai, yahan overwrite mat karo
      if (db && live) {
        try {
          // Seed-id (a1/t0) ya local-id (x...) ka cloud doc nahi hota — local update karo
          if (String(id).startsWith("x") || String(id).length < 10) {
            throw new Error("local-only");
          }
          await updateDoc(doc(db, coll, id), data);
          return;
        } catch {
          // Fail hua to local state update karo (neeche)
        }
      }
      setItems((p) => {
        const next = p.map((x) => (x.id === id ? { ...x, ...data, id } : x));
        try { localStorage.setItem(localKey, JSON.stringify(next)); } catch {}
        return next;
      });
    }

    return { items, add, remove, update, live };
  };
}

export const useNews = makeStore("news", "banjari_news", SEED_NEWS);
export const useTrustees = makeStore("trustees", "banjari_trustees_v2", SEED_TRUSTEES);
export const usePhotos = makeStore("photos", "banjari_photos", []);
