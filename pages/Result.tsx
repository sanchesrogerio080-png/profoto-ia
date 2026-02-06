
import React from 'react';
import { Download, ArrowLeft, Share2 } from 'lucide-react';

interface ResultProps {
  imageUrl: string;
  onBack: () => void;
}

const Result: React.FC<ResultProps> = ({ imageUrl, onBack }) => {
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `prophoto-ia-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      <div className="bg-slate-900 dark:bg-black rounded-3xl overflow-hidden relative shadow-2xl aspect-[3/4] flex items-center justify-center mb-6">
        <img src={imageUrl} alt="Result" className="w-full h-full object-contain" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onBack}
          className="py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <button
          onClick={downloadImage}
          className="py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg dark:shadow-none transition-colors"
        >
          <Download className="w-5 h-5" />
          Baixar
        </button>
      </div>

      <button 
        className="mt-4 w-full py-4 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors"
        onClick={() => {
          if (navigator.share) {
            navigator.share({ title: 'Minha ProPhoto IA', url: imageUrl });
          }
        }}
      >
        <Share2 className="w-4 h-4" />
        Compartilhar Resultado
      </button>
    </div>
  );
};

export default Result;
