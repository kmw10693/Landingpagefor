export function ServiceOverview() {
  return (
    <section className="relative py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl mb-6 max-w-4xl mx-auto leading-relaxed">
            지금, 이 순간을 놓치지 마세요
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            키읔은 지금 이 순간 같은 축제 현장에 있는 사람들과 연결해줍니다. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 rounded-3xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] text-center">
            <h3 className="text-2xl mb-3">대학 축제 기반</h3>
            <p className="text-lg text-gray-400">
              대학 축제에서 <br></br>같은 학교 사람들을 만나요
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-b from-pink-500/10 to-transparent border border-pink-500/20 rounded-3xl hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] text-center">
            <h3 className="text-2xl mb-3">즉시 연결</h3>
            <p className="text-lg text-gray-400">
              QR 코드를 스캔하고 근처 학생들과 즉시 연결하세요
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-b from-teal-500/10 to-transparent border border-teal-500/20 rounded-3xl hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(94,234,212,0.3)] text-center">
            <h3 className="text-2xl mb-3">부담 제로</h3>
            <p className="text-lg text-gray-400">
              재미있는 캐주얼한 만남
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}