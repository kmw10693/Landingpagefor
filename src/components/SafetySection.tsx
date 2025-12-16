import { Shield, Lock, Eye } from 'lucide-react';

export function SafetySection() {
  const safetyFeatures = [
    {
      icon: Shield,
      title: '검증된 체크인',
      description: '이벤트 현장에 있는 사람만 매칭에 접근할 수 있어요',
    },
    {
      icon: Lock,
      title: '프라이버시 우선',
      description: '데이터는 암호화되며 제3자와 절대 공유되지 않아요',
    },
    {
      icon: Eye,
      title: '신고 & 차단',
      description: '부적절한 행동을 즉시 신고할 수 있는 쉬운 도구',
    },
  ];

  return (
    <section id="safety" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-6">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-base text-teal-300">당신의 안전이 중요합니다</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6">
            안전하고, 보안되고, 신뢰할 수 있는
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            우리는 모두를 위한 안전한 환경을 만들기 위해 최선을 다하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {safetyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-teal-500/20 rounded-3xl hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}