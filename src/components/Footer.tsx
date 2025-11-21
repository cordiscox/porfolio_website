import { Heart, ArrowUp } from 'lucide-react';

const PawIcon = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8Z" />
    <path d="M8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10Z" />
    <path d="M16 10C14.9 10 14 9.1 14 8C14 6.9 14.9 6 16 6C17.1 6 18 6.9 18 8C18 9.1 17.1 10 16 10Z" />
    <path d="M6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12C8 13.1 7.1 14 6 14Z" />
    <path d="M18 14C16.9 14 16 13.1 16 12C16 10.9 16.9 10 18 10C19.1 10 20 10.9 20 12C20 13.1 19.1 14 18 14Z" />
    <path d="M12 20C9.8 20 8 18.2 8 16C8 13.8 9.8 12 12 12C14.2 12 16 13.8 16 16C16 18.2 14.2 20 12 20Z" />
  </svg>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t-2 border-zinc-800 py-12 px-6">
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <PawIcon className="text-[#ff8c42]" />
            <h3 className="text-4xl md:text-5xl text-white">
              Hagamos realidad tu{' '}
              <span className="bg-gradient-to-r from-[#ff8c42] to-[#4ecdc4] bg-clip-text text-transparent">
                proyecto canino
              </span>
            </h3>
            <PawIcon className="text-[#4ecdc4]" />
          </div>
          <p className="text-zinc-400 mb-8 max-w-xl">
            ¿Listo para llevar tu negocio de adiestramiento al siguiente nivel? 
            Estoy a solo un mensaje de distancia 🐕
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-[#ff8c42] to-[#e67a35] text-white rounded-full hover:shadow-2xl hover:shadow-[#ff8c42]/30 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Heart size={20} className="fill-white" />
            Comenzar un proyecto
          </a>
        </div>

        <div className="border-t-2 border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-500">
            <span>Hecho con</span>
            <Heart size={18} className="fill-[#ff8c42] text-[#ff8c42] animate-pulse" />
            <span>por Joaquin Cordisco </span>
            <PawIcon className="text-[#ff8c42] animate-bounce" />
          </div>

          <p className="text-zinc-500 text-sm">
            © {currentYear} Joaquin. Tech + Dogs = 💚
          </p>

          <button
            onClick={scrollToTop}
            className="group p-3 bg-zinc-900 border-2 border-zinc-800 rounded-full hover:border-[#ff8c42] hover:bg-zinc-800 transition-all hover:scale-110"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} className="text-zinc-400 group-hover:text-[#ff8c42] transition-colors" />
          </button>
        </div>
      </div>

      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff8c42] to-transparent opacity-30" />
    </footer>
  );
}
