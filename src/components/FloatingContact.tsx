import { MessageCircle } from 'lucide-react';

export function FloatingContact() {
  const whatsappNumber = '5531983532534';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-6 py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transform hover:scale-110 transition-all duration-300 group"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-amber-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 animate-pulse"></div>
          <MessageCircle className="w-6 h-6 relative z-10" />
        </div>
        <span className="hidden sm:inline text-sm">Falar com o Produtor</span>
      </a>
    </div>
  );
}
