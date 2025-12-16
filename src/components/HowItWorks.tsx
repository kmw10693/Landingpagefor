import { QrCode, MapPin, Heart, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      title: 'QR 스캔',
      description: '행사장 입구나 축제 곳곳에서\n이벤트 QR 코드를 찾아 스캔하세요',
      color: 'purple',
    },
    {
      icon: MapPin,
      title: '체크인',
      description: '이벤트에 자동으로 체크인하고\n지금 누가 있는지 확인하세요',
      color: 'pink',
    },
    {
      icon: Heart,
      title: '연결',
      description: '프로필을 둘러보고, 좋아요를 누르고,\n이벤트에서 실시간으로 만나세요',
      color: 'teal',
    },
  ];

  return (
    <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6">
            이용 방법
          </h2>
          <p className="text-2xl text-gray-400">
            다음 이벤트에서 사람들을 만나는 세 가지 간단한 단계
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                purple: 'from-purple-600 to-purple-400',
                pink: 'from-pink-600 to-pink-400',
                teal: 'from-teal-600 to-teal-400',
              }[step.color];

              const glowClasses = {
                purple: 'shadow-[0_0_40px_rgba(168,85,247,0.6)]',
                pink: 'shadow-[0_0_40px_rgba(236,72,153,0.6)]',
                teal: 'shadow-[0_0_40px_rgba(94,234,212,0.6)]',
              }[step.color];

              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${colorClasses} flex items-center justify-center mb-6 ${glowClasses} z-10`}>
                    <Icon className="w-12 h-12 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-lg text-gray-900">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 whitespace-pre-line">
                    {step.description}
                  </p>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="md:hidden w-6 h-6 text-purple-500 mt-6 rotate-90" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}