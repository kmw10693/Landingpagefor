import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const handleCTAClick = () => {
    window.open('https://forms.gle/WEWrw5a8BFELCBJPA', '_blank');
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-gradient-to-b from-transparent to-[#0a0a1a]">
      {/* CTA Section */}
      <div id="cta" className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            연결할 준비 되셨나요?
          </h2>
          <p className="text-2xl text-gray-400 mb-10">
            키읔을 다운로드하고 다음 이벤트에서 사람들을 만나보세요
          </p>
          
          <button 
            onClick={handleCTAClick}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-300"
          >
            출시 알림 받기
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-500/20 py-8 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2025 키읔. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}