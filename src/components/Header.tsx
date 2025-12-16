import { Heart } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const handleCTAClick = () => {
    window.open('https://forms.gle/WEWrw5a8BFELCBJPA', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a1a]/80 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-xl">✨</span>
            </div>
            <span className="text-2xl tracking-tight">키읔</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              소개
            </a>
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              기능
            </a>
            <a href="#safety" className="text-sm text-gray-300 hover:text-white transition-colors">
              안전
            </a>
          </nav>

          <button 
            onClick={handleCTAClick}
            className="px-6 py-2.5 text-sm bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            출시 알림 받기
          </button>
        </div>
      </div>
    </header>
  );
}