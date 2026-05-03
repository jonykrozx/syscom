const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '500+', label: 'Empresas activas' },
  { value: '15+', label: 'Módulos integrados' },
  { value: '99.9%', label: 'Disponibilidad del sistema' },
]

export default function TrustStats() {
  return (
    <section className="bg-[#EB3D26] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p
                className="text-white font-black"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: 'var(--ls-tight)', lineHeight: 1 }}
              >
                {stat.value}
              </p>
              <p className="text-white/70 font-medium" style={{ fontSize: 'var(--text-sm)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
