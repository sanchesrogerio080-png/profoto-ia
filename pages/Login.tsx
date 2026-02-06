import React, { useMemo, useState } from "react";
import { Eye, EyeOff, Lock, Mail, UserPlus, LogIn } from "lucide-react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

type Props = {
  onLogin: () => void;
};

export default function Login({ onLogin }: Props) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const isValid = useMemo(() => {
    return email.trim().length > 3 && password.trim().length >= 6;
  }, [email, password]);

  const ensureUserDoc = async (uid: string, userEmail: string) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        email: userEmail,
        credits: 0,
        createdAt: serverTimestamp(),
      });
    }
  };

  const handleSubmit = async () => {
    setError("");
    if (!isValid) {
      setError("Preencha e-mail e senha (senha com no mínimo 6 caracteres).");
      return;
    }

    setLoading(true);
    try {
      if (mode === "login") {
        const res = await signInWithEmailAndPassword(auth, email.trim(), password);
        await ensureUserDoc(res.user.uid, res.user.email || email.trim());
        onLogin();
      } else {
        const res = await createUserWithEmailAndPassword(auth, email.trim(), password);
        await ensureUserDoc(res.user.uid, res.user.email || email.trim());
        onLogin();
      }
    } catch (e: any) {
      console.error("Erro login:", e);
      setError("Não foi possível. Verifique e-mail/senha e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-extrabold">
              {mode === "login" ? "Entrar" : "Criar conta"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {mode === "login"
                ? "Entre para usar seus créditos e gerar imagens."
                : "Crie seu usuário e comece a usar o ProPhoto IA."}
            </p>
          </div>

          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-400 transition"
            type="button"
          >
            {mode === "login" ? "Criar conta" : "Já tenho conta"}
          </button>
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
            E-mail
          </label>
          <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2">
            <Mail className="w-4 h-4 text-slate-400" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@gmail.com"
              className="w-full bg-transparent outline-none text-sm"
              type="email"
              autoComplete="email"
            />
          </div>
        </div>

        {/* SENHA + 👁️ */}
        <div className="mb-2">
          <label className="text-[11px] font-bold text-slate-600 dark:text-slate-300">
            Senha
          </label>

          <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2">
            <Lock className="w-4 h-4 text-slate-400" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="mínimo 6 caracteres"
              className="w-full bg-transparent outline-none text-sm"
              type={showPass ? "text" : "password"}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="p-1 text-slate-400 hover:text-indigo-600 transition"
              title={showPass ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-3 text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40 px-3 py-2 rounded-xl">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-extrabold py-3 flex items-center justify-center gap-2 transition"
          type="button"
        >
          {mode === "login" ? (
            <>
              <LogIn className="w-4 h-4" /> {loading ? "Entrando..." : "Entrar"}
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4" /> {loading ? "Criando..." : "Criar conta"}
            </>
          )}
        </button>

        <p className="mt-3 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
          ✅ Se você criar uma conta nova, ela vai aparecer em:
          <b> Firebase &gt; Authentication &gt; Usuários</b>
        </p>
      </div>
    </div>
  );
}