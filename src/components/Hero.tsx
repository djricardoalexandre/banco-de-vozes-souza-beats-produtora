export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-amber-950/20 to-slate-900 py-12 md:py-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-3">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              SOUZA BEATS
            </span>
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-amber-300 mb-6">
            PRODUTORA
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8">
            Vozes profissionais para seus projetos de áudio e vídeo
          </p>
        </div>
      </div>
    </section>
  );
}
