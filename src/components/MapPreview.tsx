import { MapPin, Navigation } from 'lucide-react';

// Import images - place your images in /assets/images/ folder
const locationMapImage = '/assets/images/location-map.png';

export function MapPreview() {
  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-6">
              내 주변 반경 내
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              반경 100m 이내에 있는 사람에게 좋아요를 보낼 수 있어요.<br></br>
              같은 축제 현장에 있는 사람들과 바로 대화를 시작하세요.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">반경 기반 사람 조회 및 매칭</h4>
                  <p className="text-base text-gray-400">내 주변 100m 안에 있는 사람들 확인하기</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg mb-1">좋아요 날려서 대화 시작해보기</h4>
                  <p className="text-base text-gray-400">축제 현장에서 바로 대화 시작하기</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Map mockup */}
            <div className="relative rounded-3xl border border-purple-500/30 overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.3)]">
              <img
                src={locationMapImage}
                alt="Location map"
                className="w-full h-[500px] object-cover opacity-80"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop';
                }}
              />
              
              {/* Overlay pins */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/40 to-transparent">
                {/* Animated pins */}
                <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-purple-500/80 border-4 border-white/20 animate-ping" />
                <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-purple-500 border-4 border-white flex items-center justify-center">
                  <span className="text-sm">12</span>
                </div>

                <div className="absolute top-2/3 right-1/3 w-12 h-12 rounded-full bg-pink-500/80 border-4 border-white/20 animate-ping animation-delay-300" />
                <div className="absolute top-2/3 right-1/3 w-12 h-12 rounded-full bg-pink-500 border-4 border-white flex items-center justify-center">
                  <span className="text-sm">8</span>
                </div>

                <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-teal-500/80 border-4 border-white/20 animate-ping animation-delay-600" />
                <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-teal-500 border-4 border-white flex items-center justify-center">
                  <span className="text-sm">15</span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 p-4 bg-[#1a1a2e] border border-purple-500/30 rounded-2xl backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div>
                  <p className="text-sm">근처에 35명</p>
                  <p className="text-xs text-gray-400">메인 스테이지 구역</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}