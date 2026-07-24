import { Star } from 'lucide-react';
import { Voice } from '../types/Voice';

interface VoiceTableProps {
  voices: Voice[];
}

export function VoiceTable({ voices }: VoiceTableProps) {
  const createWhatsAppUrl = (voice: Voice) => {
    const message = `Olá Souza Beats, gostaria de gravar com o locutor(a) ${voice.name} - Código ${voice.id}`;
    return `https://wa.me/5531983532534?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-slate-800/30 backdrop-blur-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-slate-800/80 border-b border-amber-900/30">
            <th className="px-6 py-4 text-left text-sm font-bold text-amber-300 uppercase tracking-wider">
              Locutor
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-amber-300 uppercase tracking-wider">
              Código
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-amber-300 uppercase tracking-wider">
              Demonstrativo
            </th>
            <th className="px-6 py-4 text-left text-sm font-bold text-amber-300 uppercase tracking-wider">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {voices.map((voice, index) => (
            <tr
              key={voice.id}
              className={`border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors ${
                index % 2 === 0 ? 'bg-slate-800/20' : 'bg-slate-800/10'
              }`}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src={voice.photoUrl}
                    alt={voice.name}
                    className="w-16 h-16 rounded-full object-contain border-2 border-amber-500/50 shadow-lg bg-slate-700/50"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{voice.name}</p>
                    <div className="flex gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="font-mono text-amber-300 font-bold text-lg">
                  {voice.id}
                </span>
              </td>
              <td className="px-6 py-4">
                <audio
                  controls
                  className="w-full max-w-xs"
                  preload="none"
                >
                  <source src={voice.audioUrl} type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </td>
              <td className="px-6 py-4">
                <a
                  href={createWhatsAppUrl(voice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
                >
                  SOLICITAR
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {voices.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <p className="text-xl">Nenhuma voz encontrada com o filtro selecionado.</p>
        </div>
      )}
    </div>
  );
}
