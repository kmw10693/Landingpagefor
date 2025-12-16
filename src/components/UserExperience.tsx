import { Heart, MessageCircle, Camera, User, Music, Sparkles } from 'lucide-react';

export function UserExperience() {
  return (
    <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6">
            그 순간을 위한 디자인
          </h2>
          <p className="text-xl text-gray-400">
            현실 세계의 연결을 위해 설계된 매끄러운 경험
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Phone mockup 1 - Profile View */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-[300px] h-[600px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] rounded-[3rem] border-4 border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.4)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a0a1a] rounded-b-2xl z-10" />
              
              {/* Screen content - Single Profile */}
              <div className="relative h-full p-6 pt-10">
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-400 mb-1">현재 위치</p>
                  <h3 className="text-lg">건대 대동제 2025</h3>
                </div>

                {/* Single Profile Card */}
                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-6 border border-purple-500/30">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4" />
                    <h3 className="text-xl mb-1">민지</h3>
                    <p className="text-xs text-gray-400">메인 스테이지 • 50m 거리</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-xs">
                      <Music className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">인디음악, 힙합 좋아해요</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                      <span className="text-gray-300">이 페스티벌 분위기 너무 좋아요! 🎵</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <User className="w-4 h-4 text-teal-400" />
                      <span className="text-gray-300">건국대 경영학과 2학년</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs">
                      좋아요 💜
                    </button>
                    <button className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-4xl mb-4">
              프로필로 나를 표현하기
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              같은 이벤트에 있는 참석자들의 프로필을 확인하세요.<br></br> 소개글, 관심사,
              현재 위치를 보고 좋아요를 눌러 연결하세요.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-purple-400">
                <Heart className="w-5 h-5" />
                <span className="text-sm">좋아요 보내기</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">실시간 대화하기</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second mockup section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl mb-4">
              프로필 설정하기
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              나만의 프로필을 만들고 관심사, 소개글을 작성해보세요.<br></br>
              다른 사람들이 당신의 프로필을 보고 좋아요를 눌러줄 거예요.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-teal-400">
                <User className="w-5 h-5" />
                <span className="text-sm">프로필 꾸미기</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Heart className="w-5 h-5" />
                <span className="text-sm">좋아요 받기</span>
              </div>
            </div>
          </div>

          {/* Phone mockup 2 - Profile Setup */}
          <div className="relative mx-auto w-[300px] h-[600px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] rounded-[3rem] border-4 border-pink-500/30 shadow-[0_0_60px_rgba(236,72,153,0.4)] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a0a1a] rounded-b-2xl z-10" />
            
            {/* Screen content - Profile Setup */}
            <div className="relative h-full p-6 pt-10 overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-xl mb-2">프로필 설정</h3>
                <p className="text-xs text-gray-400">나를 표현해보세요</p>
              </div>

              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center border-2 border-[#1a1a2e]">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">이름</label>
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-3">
                    <p className="text-sm">준혁</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1 block">소개</label>
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-3">
                    <p className="text-sm">음악 듣는 거 좋아하고 새로운 사람들 만나는 거 좋아해요! 🎵</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1 block">관심사</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/40 rounded-full text-xs">🎸 인디음악</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/40 rounded-full text-xs">🎮 게임</span>
                    <span className="px-3 py-1 bg-teal-600/30 border border-teal-500/40 rounded-full text-xs">⚽ 축구</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm mt-6">
                  프로필 저장하기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third mockup section - Chat */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Phone mockup 3 - Chat */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-[300px] h-[600px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] rounded-[3rem] border-4 border-teal-500/30 shadow-[0_0_60px_rgba(94,234,212,0.4)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a0a1a] rounded-b-2xl z-10" />
              
              {/* Screen content - Chat */}
              <div className="relative h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-4 pt-8 border-b border-purple-500/20 bg-[#1a1a2e]/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                    <div className="flex-1">
                      <h3 className="text-base">민지</h3>
                      <p className="text-xs text-gray-400">메인 스테이지 근처</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-purple-900/40 rounded-2xl rounded-tl-sm p-3 max-w-[70%]">
                      <p className="text-sm">안녕하세요! 지금 메인 스테이지에 계세요? 🎵</p>
                      <p className="text-xs text-gray-400 mt-1">오후 8:24</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm p-3 max-w-[70%]">
                      <p className="text-sm">네! 저도 여기 있어요 ✨</p>
                      <p className="text-xs text-purple-200 mt-1">오후 8:25</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-purple-900/40 rounded-2xl rounded-tl-sm p-3 max-w-[70%]">
                      <p className="text-sm">다음 밴드 공연 같이 볼래요?</p>
                      <p className="text-xs text-gray-400 mt-1">오후 8:25</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm p-3 max-w-[70%]">
                      <p className="text-sm">좋아요! 어디서 만날까요? 😊</p>
                      <p className="text-xs text-purple-200 mt-1">오후 8:26</p>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-purple-500/20 bg-[#1a1a2e]/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-purple-900/20 border border-purple-500/30 rounded-full px-4 py-2">
                      <p className="text-sm text-gray-400">메시지 입력...</p>
                    </div>
                    <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-4xl mb-4">
              매칭된 상대와 대화하기
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              서로 좋아요를 누르면 매칭이 완료돼요! <br></br> 실시간 채팅으로 
              대화를 나누고 축제 현장에서 직접 만나보세요.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-teal-400">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">실시간 채팅</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Heart className="w-5 h-5" />
                <span className="text-sm">현장에서 만나기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}