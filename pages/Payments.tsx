import React, { useMemo, useState } from "react";
import { CreditCard, ShieldCheck, Sparkles, Zap, Star, History } from "lucide-react";
import { auth } from "./firebase";

// ✅ TEM que ter https://
const BACKEND_BASE_URL = "https://mp-pagamentos-final-894219859206.southamerica-east1.run.app".replace(/\/+$/, "");

const PLANS = [
  { id: "plano_basico", name: "Plano Básico", price: "39,90", credits: "25", description: "Para pequenos catálogos e testes frequentes", icon: Zap, highlight: false },
  { id: "plano_pro", name: "Plano Pro", price: "79,90", credits: "100", description: "Mais popular: ótimo custo-benefício para uso constante", icon: Star, highlight: true },
  { id: "plano_avancado", name: "Plano Avançado", price: "149,90", credits: "250", description: "Para quem quer volume e máxima performance no dia a dia", icon: Sparkles, highlight: false },
  { id: "plano_anual", name: "Plano Anual", price: "490,00", credits: "100/mês", description: "Assinatura anual com créditos mensais para escalar o negócio", icon: History, highlight: false },
];

export default function Payments() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const userPayload = useMemo(() => {
    const user = auth.currentUser;
    return { userId: user?.uid || null, email: user?.email || null };
  }, []);

  async function comprar(planId: string) {
    if (!userPayload.userId || !userPayload.email) {
      alert("Você precisa estar logado.");
      return;
    }

    // ❌ backend não tem plano_anual hoje
    if (planId === "plano_anual") {
      alert("Este plano ainda não está habilitado no backend. Use Básico / Pro / Avançado.");
      return;
    }

    setLoadingId(planId);

    try {
      // ✅ URL CERTA: Cloud Run + /create_preference
      const res = await fetch(`${BACKEND_BASE_URL}/create_preference`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId,
          userId: userPayload.userId,
          email: userPayload.email,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(`Erro ao criar pagamento (${res.status}).`);
        console.log("Resposta do backend:", data);
        return;
      }

      if (data?.init_point) {
        window.location.href = data.init_point;
        return;
      }

      if (data?.sandbox_init_point) {
        window.location.href = data.sandbox_init_point;
        return;
      }

      alert("Erro ao criar pagamento (sem init_point).");
      console.log("Resposta do backend:", data);
    } catch (e) {
      alert("Falha ao chamar o backend de pagamento.");
      console.log(e);
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 px-4 py-6">
      <div className="max-w-xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Pagamentos</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Escolha um plano e libere créditos após a aprovação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border bg-white dark:bg-slate-900 p-5 shadow-sm ${
                  plan.highlight
                    ? "border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-2 right-4 rounded-full bg-indigo-600 text-white text-[10px] px-3 py-1 uppercase tracking-widest">
                    Recomendado
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-11 w-11 rounded-2xl flex items-center justify-center ${
                        plan.highlight
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold">{plan.name}</h2>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="text-xl font-black">R$ {plan.price}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {plan.credits} créditos
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => comprar(plan.id)}
                  disabled={loadingId === plan.id}
                  className={`mt-4 w-full rounded-xl py-3 font-semibold flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  } ${loadingId === plan.id ? "opacity-70" : ""}`}
                >
                  <CreditCard className="w-4 h-4" />
                  {loadingId === plan.id ? "Abrindo..." : "Comprar agora"}
                </button>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Pagamento seguro
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mercado Pago
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Segurança e garantia</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Todas as transações são criptografadas e processadas de forma segura via Mercado Pago.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest flex justify-center gap-2 items-center">
          <Sparkles className="w-3 h-3" />
          ProPhoto IA • Premium
        </div>
      </div>
    </div>
  );
}
