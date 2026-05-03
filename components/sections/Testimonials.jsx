const testimonials = [
  {
    quote: 'SYSCOM transformó la gestión de nuestra empresa de transporte. Ahora cumplimos con el RNDC sin complicaciones y tenemos control total de la flota.',
    name: 'Carlos Mendoza',
    role: 'Gerente General, Transportes del Norte',
  },
  {
    quote: 'La facturación electrónica con DIAN nunca fue tan sencilla. El soporte del equipo es excelente y la implementación fue rápida.',
    name: 'Ana Lucía Restrepo',
    role: 'Contadora, Industrias Restrepo S.A.S.',
  },
  {
    quote: 'Llevamos 5 años con SYSCOM y no cambiaríamos el sistema por nada. Todos los módulos integrados nos ahorra tiempo y dinero cada día.',
    name: 'Roberto Jiménez',
    role: 'Director Financiero, Grupo Logístico JR',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F7] dark:bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p
            className="text-[#EB3D26] font-bold uppercase tracking-[0.18em] mb-3"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            Testimonios
          </p>
          <h2
            className="text-[#2B2B2B] dark:text-white font-black"
            style={{ fontSize: 'var(--text-3xl)', letterSpacing: 'var(--ls-tight)', lineHeight: 'var(--lh-snug)' }}
          >
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white dark:bg-white/4 border border-[#DEDEDE] dark:border-white/8 flex flex-col"
              style={{ padding: '28px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xs)' }}
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#EB3D26]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-[#4D4D4D] dark:text-[#AEAEAE] flex-1 mb-6"
                style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-relaxed)' }}
              >
                "{t.quote}"
              </p>
              <div>
                <p className="text-[#2B2B2B] dark:text-white font-bold" style={{ fontSize: 'var(--text-sm)' }}>
                  {t.name}
                </p>
                <p className="text-[#6B6B6B]" style={{ fontSize: 'var(--text-xs)' }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
