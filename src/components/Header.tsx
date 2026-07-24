export function Header() {
  return (
    <header className="bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900/30 backdrop-blur-sm border-b border-amber-900/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <svg
              viewBox="0 0 120 120"
              className="w-32 h-32 md:w-48 md:h-48 relative z-10 drop-shadow-2xl group-hover:drop-shadow-amber-500/50 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#b45309', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#78350f', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <g transform="translate(60,60)">
                <circle cx="0" cy="0" r="55" fill="url(#sbGradient)" opacity="0.1" />
                <path
                  d="M -20,-10 Q -15,-25 0,-30 Q 15,-25 20,-10 L 25,5 Q 20,8 0,10 Q -20,8 -25,5 Z"
                  fill="url(#sbGradient)"
                  opacity="0.8"
                />
                <path
                  d="M -15,10 L -10,25 Q 0,30 10,25 L 15,10"
                  fill="url(#sbGradient)"
                />
                <circle cx="-8" cy="15" r="3" fill="#fbbf24" opacity="0.6" />
                <circle cx="0" cy="18" r="2.5" fill="#fbbf24" opacity="0.6" />
                <circle cx="8" cy="15" r="3" fill="#fbbf24" opacity="0.6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
