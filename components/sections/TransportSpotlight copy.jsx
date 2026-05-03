import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { slideLeft, slideRight, fadeUp, stagger } from '../../lib/motion'

const features = [
  'Control de flota y programación de viajes',
  'Facturación integrada',
  'Gestión de manifiestos y remesas',
  'Liquidación a choferes y proveedores',
  'Control de gastos y análisis financiero',
  'Cumplimiento RNDC automático',
]

const stats = [
  'Cumplimiento total RNDC',
  'Control operativo en tiempo real',
  'Reducción de pérdidas y errores',
]

const TRANSPORT_IMAGE = '/images/transport.jpg'

export default function TransportSpotlight() {
  return (
    <section className="bg-[#2B2B2B] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative aspect-video overflow-hidden order-2 lg:order-1"
            style={{ borderRadius: 'var(--radius-xl)' }}
          >
            <img
              src={TRANSPORT_IMAGE}
              alt="Software para empresas de transporte de carga"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* Fallback placeholder */}
            <div
              className="border-2 border-dashed border-[#EB3D26]/25 bg-[#EB3D26]/8 w-full h-full flex-col items-center justify-center gap-3 absolute inset-0"
              style={{ display: 'none' }}
            >
              <div className="absolute top-4 left-4">
                <span
                  className="text-[#EB3D26]/70 font-medium bg-[#EB3D26]/10 border border-[#EB3D26]/15"
                  style={{ fontSize: 'var(--text-xs)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}
                >
                  Industria: Transporte
                </span>
              </div>
              <svg className="w-12 h-12 text-[#EB3D26]/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 17H5a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v3m-2 11h3m-3 0a2 2 0 01-2-2v-6a2 2 0 012-2h3m0 0l1.5-3" />
                <circle cx="7" cy="17" r="2" strokeWidth={1} />
                <circle cx="17" cy="17" r="2" strokeWidth={1} />
              </svg>
              <span className="text-white/25 font-medium" style={{ fontSize: 'var(--text-sm)' }}>Imagen transporte</span>
            </div>

            {/* Overlay tag on real image */}
            <div className="absolute top-4 left-4">
              <span
                className="text-[#EB3D26]/90 font-medium bg-black/50 border border-[#EB3D26]/30 backdrop-blur-sm"
                style={{ fontSize: 'var(--text-xs)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}
              >
                Industria: Transporte
              </span>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={slideRight}
              className="text-[#EB3D26] font-bold uppercase tracking-[0.18em]"
              style={{ fontSize: 'var(--text-xs)' }}
            >
              Industria Destacada
            </motion.p>

            <motion.h2
              variants={slideRight}
              className="text-white font-bold leading-snug"
              style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)' }}
            >
              SOFTWARE ESPECIALIZADO PARA EMPRESAS DE TRANSPORTE DE CARGA
            </motion.h2>

            <motion.p variants={slideRight} className="text-[#6B6B6B]" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-relaxed)' }}>
              SYSCOM permite gestionar y controlar toda la operación de empresas de transporte de carga desde un solo sistema, cumpliendo con la normativa vigente en Colombia y optimizando los procesos operativos y financieros.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 bg-[#EB3D26]/12 flex items-center justify-center shrink-0 mt-0.5"
                    style={{ borderRadius: 'var(--radius-sm)' }}
                  >
                    <Check className="w-2.5 h-2.5 text-[#EB3D26]" strokeWidth={3} />
                  </div>
                  <span className="text-[#AEAEAE]" style={{ fontSize: 'var(--text-sm)' }}>{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#"
              className="inline-flex items-center bg-[#94D1CA] text-[#2B2B2B] font-bold hover:bg-[#72bbb3] active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-md)' }}
            >
              Ver solución de transporte →
            </motion.a>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-5 border-t border-white/8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center py-2 ${i < stats.length - 1 ? 'sm:border-r sm:border-white/8' : ''}`}
                >
                  <p className="text-[#2E9E6B] font-semibold" style={{ fontSize: 'var(--text-sm)' }}>
                    ✓ {stat}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
