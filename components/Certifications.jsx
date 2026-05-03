export default function Certifications() {
  return (
    <section className="bg-[#1A1A1A] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p
          className="text-center text-[#4D4D4D] tracking-[0.18em] uppercase mb-10 font-medium"
          style={{ fontSize: 'var(--text-xs)' }}
        >
          Certificaciones e integraciones oficiales
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* Card 1 */}
          <div
            className="flex-1 border border-white/8 bg-white/4 flex items-center gap-5 hover:border-white/15 hover:bg-white/6 transition-all group cursor-default"
            style={{ padding: '28px 32px', borderRadius: 'var(--radius-xl)' }}
          >
            <div
              className="w-11 h-11 bg-gradient-to-br from-[#94D1CA] to-[#4e9e97] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 16px rgba(148,209,202,0.25)' }}
            >
              <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <p className="text-[#6B6B6B] uppercase tracking-[0.15em] mb-1 font-medium" style={{ fontSize: 'var(--text-xs)' }}>DIAN Certificado</p>
              <p className="text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>Sistema de Auto Factura</p>
              <p className="text-[#4D4D4D] mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>Facturación electrónica certificada</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex-1 border border-white/8 bg-white/4 flex items-center gap-5 hover:border-white/15 hover:bg-white/6 transition-all group cursor-default"
            style={{ padding: '28px 32px', borderRadius: 'var(--radius-xl)' }}
          >
            <div
              className="w-11 h-11 bg-gradient-to-br from-[#6B8FD4] to-[#4A6FC4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
              style={{ borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 16px rgba(107,143,212,0.25)' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[#6B6B6B] uppercase tracking-[0.15em] mb-1 font-medium" style={{ fontSize: 'var(--text-xs)' }}>Ministerio del Trabajo</p>
              <p className="text-white font-bold" style={{ fontSize: 'var(--text-base)' }}>Nómina Electrónica</p>
              <p className="text-[#4D4D4D] mt-0.5" style={{ fontSize: 'var(--text-xs)' }}>Integración oficial aprobada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
