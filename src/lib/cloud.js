import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, logEvent, isSupported as analyticsSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAeyYMFxWXgSXHIjW9QPkJU1Zn1TttVhEc",
  authDomain: "maabanjaridham.firebaseapp.com",
  projectId: "maabanjaridham",
  storageBucket: "maabanjaridham.firebasestorage.app",
  messagingSenderId: "232386517103",
  appId: "1:232386517103:web:9a6fb2660a32ed383e959a",
  measurementId: "G-TM4TETP1ZW",
};

let db = null;
let analytics = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  analyticsSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app);
  }).catch(() => {});
} catch (e) {
  console.warn("Firebase init fail:", e);
}

export { db, analytics, logEvent };
