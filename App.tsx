import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Payments from "./pages/Payments";
import Result from "./pages/Result";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

type View = "login" | "home" | "create" | "payments" | "result";

const auth = getAuth();
const db = getFirestore();

const App: React.FC = () => {
  const [view, setView] = useState<View>("login");
  const [lastImage, setLastImage] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState<any>({
    id: "",
    uid: "",
    email: "",
    credits: 0,
    isLoggedIn: false,
  });

  // ✅ Detecta login REAL pelo Firebase Auth e busca créditos no Firestore
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser?.uid) {
        const uid = firebaseUser.uid;
        const email = firebaseUser.email || "";

        let credits = 0;
        try {
          const snap = await getDoc(doc(db, "users", uid));
          if (snap.exists()) {
            const data: any = snap.data();
            credits = Number(data?.credits ?? 0);
          }
        } catch {
          credits = 0;
        }

        const userObj = {
          id: uid,
          uid,
          email,
          credits,
          isLoggedIn: true,
        };

        setCurrentUser(userObj);
        localStorage.setItem("prophotoia_user", JSON.stringify(userObj));
        setView("home"); // ✅ agora abre na HOME
        return;
      }

      // deslogado
      setCurrentUser({
        id: "",
        uid: "",
        email: "",
        credits: 0,
        isLoggedIn: false,
      });
      setView("login");
    });

    return () => unsub();
  }, []);

  const onImageGenerated = (url: string, config: any) => {
    setLastImage(url);
    setView("result");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch {}
    localStorage.removeItem("prophotoia_user");
    setCurrentUser({
      id: "",
      uid: "",
      email: "",
      credits: 0,
      isLoggedIn: false,
    });
    setView("login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="w-full bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div
            className="cursor-pointer"
            onClick={() => {
              if (currentUser?.isLoggedIn) setView("home");
              else setView("login");
            }}
          >
            <div className="font-black text-slate-900">ProPhoto IA</div>
            <div className="text-xs text-slate-500">
              Créditos: {Number(currentUser?.credits ?? 0)}
            </div>
          </div>

          {currentUser?.isLoggedIn ? (
            <div className="flex gap-2">
              <button
                className="px-3 py-2 rounded-xl text-sm font-bold bg-slate-100"
                onClick={() => setView("home")}
              >
                Início
              </button>

              <button
                className="px-3 py-2 rounded-xl text-sm font-bold bg-slate-100"
                onClick={() => setView("payments")}
              >
                Planos
              </button>

              <button
                className="px-3 py-2 rounded-xl text-sm font-bold bg-slate-900 text-white"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          ) : null}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {view === "login" && (
          <Login
            onLogin={() => {
              setView("home"); // ✅ depois do login vai pra HOME
            }}
          />
        )}

        {view === "home" && currentUser?.isLoggedIn && (
          <Home
            user={currentUser}
            onStart={() => setView("create")}
            onPlans={() => setView("payments")}
          />
        )}

        {view === "create" && currentUser?.isLoggedIn && (
          <Create
            user={currentUser}
            onImageGenerated={onImageGenerated}
            onCreditError={() => setView("payments")}
          />
        )}

        {view === "payments" && currentUser?.isLoggedIn && <Payments />}

        {view === "result" && currentUser?.isLoggedIn && lastImage && (
          <Result imageUrl={lastImage} onBack={() => setView("create")} />
        )}
      </main>
    </div>
  );
};

export default App;
