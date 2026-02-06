import React from "react";
import {
  Home as HomeIcon,
  Sparkles,
  History,
  Settings,
  Camera,
  TrendingUp,
  CreditCard,
} from "lucide-react";

type HomeProps = {
  user: any;
  onStart: () => void;
  onPlans: () => void;
};

type NavKey = "home" | "create" | "history" | "whatsapp" | "plans";

const ProFotoLogo: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-blue-500 flex items-center justify-center shadow">
      <Sparkles className="w-4 h-4 text-white" />
    </div>
    <div className="text-white font-black tracking-tight">ProFotoIA</div>
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-2">
    {children}
  </div>
);

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-4 flex items-center gap-3">
    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-white font-bold leading-tight">{title}</div>
      <div className="text-white/60 text-xs mt-0.5">{desc}</div>
    </div>
  </div>
);

const PlatformCard: React.FC<{
  logo: React.ReactNode;
  name: string;
  sub: string;
}> = ({ logo, name, sub }) => (
  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col items-center justify-center text-center min-h-[120px]">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
      {logo}
    </div>
    <div className="text-white font-bold text-sm">{name}</div>
    <div className="text-white/50 text-[10px] mt-1 uppercase tracking-wide">
      {sub}
    </div>
  </div>
);

// ✅ WhatsApp logo (SVG) - substitui o ícone de mensagem
const WhatsAppLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L4 21l4.8-1.3A8.5 8.5 0 1 0 12 3.5z"
      fill="#22c55e"
      opacity="0.95"
    />
    <path
      d="M10.2 8.6c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.4 0 .6.4.8 1.4 1.8 2.3 2.3.2.1.4.1.6 0l.5-.4c.2-.1.4-.1.6 0l1.9.8c.4.2.4.4.4.6v.5c0 .2 0 .4-.4.6-.4.3-1.3.8-2.2.6-1.6-.3-3.6-1.8-5-3.2-1.4-1.4-2.9-3.4-3.2-5-.2-.9.3-1.8.6-2.2z"
      fill="white"
    />
  </svg>
);

// ✅ Logos plataformas (igual antes)
const InstagramLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="5" width="14" height="14" rx="4" stroke="url(#ig)" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3.3" stroke="url(#ig)" strokeWidth="1.6" />
    <circle cx="16.7" cy="7.3" r="1" fill="url(#ig)" />
    <defs>
      <linearGradient id="ig" x1="5" y1="19" x2="19" y2="5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff2bd6" />
        <stop offset="0.5" stopColor="#8b5cf6" />
        <stop offset="1" stopColor="#22c55e" />
      </linearGradient>
    </defs>
  </svg>
);

const FacebookLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 8.5V7.2c0-.8.3-1.2 1.3-1.2H17V3.2h-2.5C12 3.2 11 4.6 11 7v1.5H9V11h2v9.8h3V11h2.6l.4-2.5H14z"
      fill="#3b82f6"
    />
  </svg>
);

const TikTokLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 4c.7 2.6 2.3 4.2 5 4.5v2.7c-1.9-.1-3.7-.8-5-2v6.3c0 3-2.4 5.5-5.5 5.5S3 18.5 3 15.5 5.4 10 8.5 10c.3 0 .7 0 1 .1v2.9c-.3-.1-.6-.2-1-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7V4h2.8z"
      fill="#00e5ff"
      opacity="0.9"
    />
    <path
      d="M12.8 4v13.5c0 2.2-1.8 4-4 4-1.9 0-3.4-1.3-3.9-3.1.6 1.1 1.8 1.9 3.1 1.9 2 0 3.6-1.6 3.6-3.6V4h1.2z"
      fill="#ff3b81"
      opacity="0.65"
    />
  </svg>
);

const MercadoLivreLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.2 9.5c1.2-1.7 3.3-2.8 5.8-2.8s4.6 1.1 5.8 2.8"
      stroke="#facc15"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M7.3 12.3c.9 1 2.6 1.7 4.7 1.7s3.8-.7 4.7-1.7"
      stroke="#facc15"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M9.1 15.1c.6.5 1.7.9 2.9.9s2.3-.4 2.9-.9"
      stroke="#facc15"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const ShopeeLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 9.5V8.2c0-2.1 1.7-3.8 3.8-3.8h2.4C15.3 4.4 17 6.1 17 8.2v1.3"
      stroke="#fb923c"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M6.2 9.5h11.6c.7 0 1.2.5 1.1 1.2l-.8 8.4c-.1.8-.7 1.4-1.5 1.4H7.4c-.8 0-1.4-.6-1.5-1.4l-.8-8.4c-.1-.7.4-1.2 1.1-1.2z"
      stroke="#fb923c"
      strokeWidth="1.6"
      fill="rgba(251,146,60,0.08)"
    />
    <path
      d="M10 13.2c.6-.5 1.4-.8 2.4-.8 1.6 0 2.6.7 2.6 1.8 0 2.2-5.4.7-5.4 3 0 .9.9 1.6 2.6 1.6 1 0 1.9-.2 2.6-.7"
      stroke="#fb923c"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const AmazonLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M7.2 10.2c.5-1.8 2.1-3.1 4.3-3.1 2.7 0 4.5 1.8 4.5 4.5v4.2c0 .9.1 1.3.5 1.9h-2.1c-.2-.3-.3-.7-.3-1.1-.7.9-1.8 1.4-3.2 1.4-2 0-3.4-1.2-3.4-3.1 0-2.1 1.6-3 4-3.4l2.5-.4v-.3c0-1.3-.8-2.1-2.4-2.1-1.1 0-1.9.5-2.3 1.5l-2.1-.8z"
      fill="#60a5fa"
      opacity="0.9"
    />
    <path
      d="M7.5 19c2.6 1.2 6.4 1.2 9.2-.5"
      stroke="#60a5fa"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const SheinLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 8.2c.7-1 2.2-1.7 4.1-1.7 2.5 0 4.4 1.1 4.4 2.7 0 3-7.6 1-7.6 4 0 1.2 1.4 2.2 3.9 2.2 1.6 0 3.1-.4 4.1-1.1"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.9"
    />
    <path
      d="M6.8 18.2h10.4"
      stroke="#ffffff"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

const Home: React.FC<HomeProps> = ({ user, onStart, onPlans }) => {
  const [active, setActive] = React.useState<NavKey>("home");

  // ✅ Seu número fica só aqui no código (não publico na conversa)
  const WHATSAPP_PHONE_E164 = "5515974032980"; // ✅ 55 + DDD + número (sem espaços)
  const whatsappLink = `https://wa.me/${WHATSAPP_PHONE_E164}`;

  const handleNav = (key: NavKey) => {
    setActive(key);

    if (key === "create") onStart();
    if (key === "plans") onPlans();

    if (key === "whatsapp") {
      window.open(whatsappLink, "_blank");
      return;
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full min-h-[calc(100vh-120px)] flex items-start justify-center py-6">
        <div className="relative w-full max-w-[420px]">
          <div className="absolute -inset-6 rounded-[48px] blur-3xl opacity-40 bg-gradient-to-b from-indigo-600/30 via-blue-600/10 to-transparent pointer-events-none" />

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-[#0b1224] via-[#0b1224] to-[#070b16] shadow-[0_30px_120px_rgba(0,0,0,0.6)]">
            {/* Top bar */}
            <div className="px-5 pt-5 flex items-center justify-between">
              <ProFotoLogo />
              <Pill>
                <span className="text-yellow-300/90">🪙</span>
                <span className="text-white/80">
                  {Number(user?.credits ?? 0)} créditos
                </span>
              </Pill>
            </div>

            {/* Content */}
            <div className="px-6 pt-8 pb-28">
              <div className="text-center">
                <div className="text-[38px] leading-[1.05] font-black text-white">
                  Suas fotos no{" "}
                  <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                    próximo nível.
                  </span>
                </div>

                <div className="text-white/60 text-sm mt-4 px-2">
                  Transforme fotos comuns em fotografias comerciais de alto padrão
                  usando{" "}
                  <span className="text-white font-bold">ProFoto IA</span>.
                </div>

                <button
                  onClick={onStart}
                  className="mt-6 w-full rounded-2xl py-4 font-black text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-[0_16px_40px_rgba(59,130,246,0.35)] border border-white/10 flex items-center justify-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  Começar Agora
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <FeatureCard
                  icon={<TrendingUp className="w-5 h-5 text-sky-400" />}
                  title="Fotos que Vendem"
                  desc="Perfeito para E-commerce e Redes Sociais."
                />
                <FeatureCard
                  icon={<Sparkles className="w-5 h-5 text-blue-400" />}
                  title="IA Profissional"
                  desc="Qualidade de estúdio com apenas um clique."
                />
                <FeatureCard
                  icon={<Camera className="w-5 h-5 text-indigo-300" />}
                  title="Qualquer Lugar"
                  desc="Tire fotos agora ou use sua galeria."
                />
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-2 text-white font-black">
                  <span className="text-violet-400">✦</span>
                  <span>Plataformas compatíveis</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <PlatformCard
                    logo={<InstagramLogo />}
                    name="Instagram"
                    sub="POSTS, STORIES, REELS"
                  />
                  <PlatformCard
                    logo={<FacebookLogo />}
                    name="Facebook"
                    sub="FEED, ADS, MARKETPLACE"
                  />
                  <PlatformCard
                    logo={<TikTokLogo />}
                    name="TikTok"
                    sub="VERTICAL, TREND ADS"
                  />
                  <PlatformCard
                    logo={<MercadoLivreLogo />}
                    name="Mercado Livre"
                    sub="FOTOS DE CATÁLOGO"
                  />
                  <PlatformCard
                    logo={<ShopeeLogo />}
                    name="Shopee"
                    sub="MARKETPLACE, BANNERS"
                  />
                  <PlatformCard
                    logo={<AmazonLogo />}
                    name="Amazon"
                    sub="E-COMMERCE PROFISSIONAL"
                  />
                  <div className="col-span-2 flex justify-center">
                    <div className="w-full max-w-[190px]">
                      <PlatformCard
                        logo={<SheinLogo />}
                        name="Shein"
                        sub="FASHION, CATÁLOGO"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
                  <div className="text-sky-400 font-black">Cresça suas vendas</div>
                  <div className="text-white/55 text-xs mt-2 leading-relaxed">
                    Fotografias de alta qualidade aumentam a conversão em até 40%
                    em marketplaces e redes sociais. O ProFoto IA entrega o resultado
                    que você precisa em segundos.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="h-20 bg-gradient-to-t from-[#070b16] via-[#070b16]/95 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md px-3 py-3">
                  <div className="grid grid-cols-5 gap-1">
                    <button
                      className="flex flex-col items-center justify-center py-2"
                      onClick={() => handleNav("home")}
                    >
                      <HomeIcon
                        className={`w-5 h-5 ${
                          active === "home" ? "text-sky-400" : "text-white/55"
                        }`}
                      />
                      <div
                        className={`text-[10px] mt-1 ${
                          active === "home" ? "text-sky-400" : "text-white/50"
                        }`}
                      >
                        INÍCIO
                      </div>
                    </button>

                    <button
                      className="flex flex-col items-center justify-center py-2"
                      onClick={() => handleNav("create")}
                    >
                      <Sparkles
                        className={`w-5 h-5 ${
                          active === "create" ? "text-sky-400" : "text-white/55"
                        }`}
                      />
                      <div
                        className={`text-[10px] mt-1 ${
                          active === "create" ? "text-sky-400" : "text-white/50"
                        }`}
                      >
                        CRIAR
                      </div>
                    </button>

                    <button
                      className="flex flex-col items-center justify-center py-2"
                      onClick={() => handleNav("history")}
                    >
                      <History
                        className={`w-5 h-5 ${
                          active === "history" ? "text-sky-400" : "text-white/55"
                        }`}
                      />
                      <div
                        className={`text-[10px] mt-1 ${
                          active === "history" ? "text-sky-400" : "text-white/50"
                        }`}
                      >
                        HISTÓRICO
                      </div>
                    </button>

                    <button
                      className="flex flex-col items-center justify-center py-2"
                      onClick={() => handleNav("whatsapp")}
                    >
                      <div
                        className={`w-5 h-5 ${
                          active === "whatsapp" ? "" : "opacity-75"
                        }`}
                      >
                        <WhatsAppLogo />
                      </div>
                      <div
                        className={`text-[10px] mt-1 ${
                          active === "whatsapp" ? "text-sky-400" : "text-white/50"
                        }`}
                      >
                        WHATSAPP
                      </div>
                    </button>

                    <button
                      className="flex flex-col items-center justify-center py-2"
                      onClick={() => handleNav("plans")}
                    >
                      <CreditCard
                        className={`w-5 h-5 ${
                          active === "plans" ? "text-sky-400" : "text-white/55"
                        }`}
                      />
                      <div
                        className={`text-[10px] mt-1 ${
                          active === "plans" ? "text-sky-400" : "text-white/50"
                        }`}
                      >
                        PLANOS
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /Bottom nav */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
