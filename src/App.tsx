import { useState, useMemo } from 'react';
import { Hero } from './components/Hero';
import { FilterButtons } from './components/FilterButtons';
import { VoiceTable } from './components/VoiceTable';
import { FloatingContact } from './components/FloatingContact';
import { allVoices } from './data/voices';

function App() {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'feminino' | 'masculino'>('todos');

  const filteredVoices = useMemo(() => {
    if (activeFilter === 'todos') {
      return allVoices;
    }
    return allVoices.filter((voice) => voice.gender === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <FloatingContact />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Banco de Vozes
          </h1>
          <p className="text-slate-400 text-lg">
            Escolha a voz perfeita para seu projeto
          </p>
        </div>

        <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="mb-6 text-center">
          <p className="text-slate-400">
            Exibindo <span className="text-amber-400 font-bold">{filteredVoices.length}</span> {filteredVoices.length === 1 ? 'voz' : 'vozes'}
          </p>
        </div>

        <VoiceTable voices={filteredVoices} />
      </main>

      <footer className="bg-slate-800/50 backdrop-blur-sm border-t border-amber-500/30 mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2026 Souza Beats Produtora. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;