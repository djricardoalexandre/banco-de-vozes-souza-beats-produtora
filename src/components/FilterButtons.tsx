interface FilterButtonsProps {
  activeFilter: 'todos' | 'feminino' | 'masculino';
  onFilterChange: (filter: 'todos' | 'feminino' | 'masculino') => void;
}

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  const filters: Array<{ id: 'todos' | 'feminino' | 'masculino'; label: string }> = [
    { id: 'todos', label: 'TODOS' },
    { id: 'feminino', label: 'VOZES FEMININAS' },
    { id: 'masculino', label: 'VOZES MASCULINAS' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-500/50'
              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
