import { motion } from 'framer-motion'
import { fadeUp, fadeIn, stagger, ease } from '../../lib/motion'

export default function Hero() {
  return (
    <section className="bg-[#EB3D26] relative overflow-hidden" style={{ minHeight: '90vh' }}>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 75%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 25%, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-white opacity-[0.04] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center min-h-[90vh]">
        {/* Left */}
        <motion.div
          className="space-y-7"
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-white border border-white/25 bg-white/8 font-medium"
            style={{ fontSize: 'var(--text-xs)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            Software Empresarial
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, var(--text-5xl))',
              fontWeight: 900,
              letterSpacing: 'var(--ls-tight)',
              lineHeight: 'var(--lh-tight)',
            }}
          >
            CONTROL TOTAL DE TU EMPRESA CON UN SISTEMA DISEÑADO PARA TU OPERACIÓN
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/75 max-w-lg" style={{ fontSize: 'var(--text-md)', lineHeight: 'var(--lh-relaxed)' }}>
            Maneja tu flota, administra tu contabilidad, cumple con la normativa vigente en Colombia y optimiza todos tus procesos administrativos y financieros.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-[#EB3D26] font-bold hover:bg-[#F7F7F7] active:scale-95 transition-all"
              style={{ fontSize: 'var(--text-md)', padding: '14px 32px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}
            >
              Hablar con un asesor
            </a>
          </motion.div>

          <motion.div variants={fadeIn} className="flex gap-2 items-center pt-2">
            <span className="w-5 h-1.5 bg-white rounded-full" />
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Right: image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          className="w-full border-2 border-dashed border-white/20 bg-white/5 aspect-video flex flex-col items-center justify-center gap-3 relative overflow-hidden"
          style={{ borderRadius: 'var(--radius-xl)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div
            className="w-14 h-14 bg-white/10 flex items-center justify-center mb-1"
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <svg className="w-7 h-7 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-white/35 font-medium relative" style={{ fontSize: 'var(--text-sm)' }}>Imagen principal</span>
          <span className="text-white/20 relative" style={{ fontSize: 'var(--text-xs)' }}>1280 × 720</span>
        </motion.div>
      </div>
    </section>
  )
}
