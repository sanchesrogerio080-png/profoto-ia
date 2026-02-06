import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAN3eZ954WBlVzf4hfXDC0FUFwY8e-jEWg",
  authDomain: "foto-pro-comercio.firebaseapp.com",
  projectId: "foto-pro-comercio",
  storageBucket: "foto-pro-comercio.firebasestorage.app",
  messagingSenderId: "894219859206",
  appId: "1:894219859206:web:908edb4b9340d0b19fda87",
  measurementId: "G-3TQNBF6FQG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export let analytics: any = null;
isSupported().then((ok) => {
  if (ok) analytics = getAnalytics(app);
});

export default app;