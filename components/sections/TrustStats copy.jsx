const stats = [
  { value: '10+', label: 'Experiencia comprobada en software empresarial en Colombia', suffix: 'años' },
  { value: '100%', label: 'Cumplimiento garantizado con DIAN y RNDC', suffix: '' },
  { value: '∞', label: 'Licencia vitalicia con soporte y mantenimiento', suffix: '' },
  { value: '1', label: 'Control total del negocio en un solo sistema', suffix: 'sistema' },
  { value: '✓', label: 'Adaptado a la operación de su industria', suffix: '' },
]

export default function TrustStats() {
  return (
    <section className="bg-[#1A1A1A] py-10 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 py-3 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-white/8' : ''
              }`}
            >
              <span
                className="text-[#2E9E6B] font-black leading-none mb-1.5"
                style={{ fontSize: 'var(--text-4xl)', letterSpacing: 'var(--ls-tight)' }}
              >
                {stat.value}
              </span>
              {stat.suffix && (
                <span
                  className="text-[#2E9E6B]/50 uppercase tracking-[0.15em] font-medium mb-1"
                  style={{ fontSize: 'var(--text-xs)' }}
                >
                  {stat.suffix}
                </span>
              )}
              <p
                className="text-[#4D4D4D] leading-snug max-w-[130px]"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
