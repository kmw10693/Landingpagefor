import { Heart, MapPin, MessageCircle, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Heart,
      title: '좋아요 매칭',
      description: '마음에 드는 프로필에 좋아요를 누르고\n 서로 좋아요를 누르면 매칭되어 대화를 시작할 수 있어요.',
    },
    {
      icon: MapPin,
      title: '내 주변 탐색',
      description: '반경 100m 이내에 있는 학생들에게 DM을 보낼 수 있어요.\n같은 축제에 있는 사람들과 바로 대화를 시작하세요.',
    },
    {
      icon: MessageCircle,
      title: '실시간 채팅',
      description: '매칭된 상대와 실시간으로 DM을 주고받으며\n 자연스럽게 대화를 나눠보세요.',
    },
    {
      icon: Shield,
      title: '안전 & 인증',
      description: '검증된 이벤트 체크인으로 진정한 연결을 보장해요.',
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6">
            주요 기능
          </h2>
          <p className="text-2xl text-gray-400">
            이벤트에서 의미있는 연결을 만드는데 필요한 모든 것
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-purple-500/20 rounded-3xl hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-400 whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}