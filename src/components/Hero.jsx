import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-[#0B1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center text-xs tracking-widest uppercase text-blue-300/80 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full mb-4">Healthcare • Technology • Secure</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_20px_rgba(59,130,246,0.25)]">
              Hospital Management System
            </h1>
            <p className="mt-4 text-blue-100/90 text-lg md:text-xl">
              Streamlined dashboards for admins, doctors, and patients — appointments, records, and prescriptions in one secure place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/admin" className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">Admin Dashboard</a>
              <a href="/doctor" className="px-5 py-2.5 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-white border border-white/10 transition-colors">Doctor Dashboard</a>
              <a href="/patient" className="px-5 py-2.5 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-white border border-white/10 transition-colors">Patient Dashboard</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1020] via-transparent to-[#0B1020] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1020]" />
    </section>
  )
}

export default Hero
