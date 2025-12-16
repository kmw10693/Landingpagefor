import { Sparkles } from 'lucide-react';

// Import images - place your images in /assets/images/ folder
const festivalHeroImage = '/assets/images/festival-hero.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-base text-purple-300">축제에서 만나는 새로운 인연</span>
        </div>

        <h1 className="text-7xl md:text-8xl mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          그 순간,
          <br />
          그 자리에서
        </h1>

        <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-2xl mx-auto">
          축제에서 지금 바로 만나는 사람들
          <br />
          스캔 매칭 연결되세요.
        </p>

        {/* Festival Image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
            <img
              src={festivalHeroImage}
              alt="University Festival"
              className="w-full h-[400px] object-cover opacity-80"
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.currentTarget.src = 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=400&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}