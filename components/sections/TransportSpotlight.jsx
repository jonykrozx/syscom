export default function TransportSpotlight() {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p
            className="text-[#EB3D26] font-bold uppercase tracking-[0.18em] mb-3"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            Especialidad
          </p>
          <h2
            className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
          >
            SOLUCIÓN PARA TRANSPORTE DE CARGA
          </h2>
          <p
            className="text-[#6B6B6B] mt-4 max-w-xl mx-auto"
            style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}
          >
            Control total de tu flota, cumplimiento RNDC, manifiestos de carga y gestión operativa en un solo sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Gestión de flota', desc: 'Control de vehículos, conductores y mantenimientos' },
            { label: 'Cumplimiento RNDC', desc: 'Reporte automático al Registro Nacional de Carga' },
            { label: 'Manifiestos de carga', desc: 'Generación y control de manifiestos electrónicos' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#F7F7F7] dark:bg-white/4 border border-[#EFEFEF] dark:border-white/8 hover:border-[#EB3D26]/30 transition-all cursor-default"
              style={{ padding: '28px', borderRadius: 'var(--radius-xl)' }}
            >
              <div
                className="w-8 h-8 bg-[#EB3D26] mb-4 flex items-center justify-center"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <h3
                className="text-[#2B2B2B] dark:text-white font-bold mb-2"
                style={{ fontSize: 'var(--text-base)' }}
              >
                {item.label}
              </h3>
              <p className="text-[#6B6B6B]" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
