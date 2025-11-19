function DashCard({ title, subtitle, cta, onClick }) {
  return (
    <button onClick={onClick} className="group w-full text-left p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          {subtitle && <p className="text-blue-200/80 text-sm mt-1">{subtitle}</p>}
        </div>
        {cta && <span className="text-blue-300 text-sm group-hover:translate-x-0.5 transition-transform">{cta} →</span>}
      </div>
    </button>
  )
}

export default DashCard
