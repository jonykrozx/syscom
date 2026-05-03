import { Phone } from 'lucide-react'

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const footerCols = [
  {
    heading: 'Soluciones',
    links: ['Transporte de Carga', 'Empresas', 'Parqueaderos', 'Estaciones de Servicio', 'Plantas Industriales', 'Hotelería'],
  },
  {
    heading: 'Empresa',
    links: ['Nosotros', 'Comunidad', 'Blog', 'Contacto'],
  },
  {
    heading: 'Soporte',
    links: ['Mesa de ayuda', 'Tutoriales', 'Actualizaciones', 'Estado del sistema'],
  },
  {
    heading: 'Legal',
    links: ['Términos de uso', 'Política de privacidad', 'Tratamiento de datos'],
  },
]

const socials = [
  { icon: <LinkedinIcon />, label: 'LinkedIn' },
  { icon: <YoutubeIcon />, label: 'YouTube' },
  { icon: <FacebookIcon />, label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', padding: '56px 0 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top row: brand + columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 mb-10">
          {/* Brand column */}
          <div style={{ flexShrink: 0, width: '220px' }} className="w-full lg:w-[220px]">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 bg-[#EB3D26] flex items-center justify-center"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <span className="text-white font-black text-base leading-none">S</span>
              </div>
              <div className="leading-none">
                <div className="text-white font-black tracking-tight" style={{ fontSize: 'var(--text-lg)', letterSpacing: 'var(--ls-tight)' }}>
                  SYSCOM
                </div>
                <div className="text-[#4D4D4D] tracking-[0.15em] uppercase font-medium mt-0.5" style={{ fontSize: '8px' }}>
                  Sistemas Comerciales
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: 'var(--text-xs)', lineHeight: 1.7, color: '#6B6B6B', marginBottom: '16px' }}>
              Software empresarial para transporte, contabilidad y gestión operativa. Colombia.
            </p>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-5">
              <Phone className="w-3.5 h-3.5 text-[#94D1CA]" />
              <span style={{ fontSize: 'var(--text-xs)', color: '#6B6B6B' }}>318 897 0512</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="text-[#6B6B6B] hover:text-white transition-colors duration-150"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerCols.map((col) => (
              <div key={col.heading}>
                <h6
                  className="text-[#4D4D4D] font-bold uppercase tracking-[0.12em] mb-3"
                  style={{ fontSize: 'var(--text-xs)' }}
                >
                  {col.heading}
                </h6>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#6B6B6B] hover:text-white transition-colors duration-150"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5"
          style={{ borderTop: '1px solid #2B2B2B' }}
        >
          <span className="text-[#4D4D4D]" style={{ fontSize: 'var(--text-xs)' }}>
            © {new Date().getFullYear()} Sistemas Comerciales SYSCOM S.A.S. · Todos los derechos reservados.
          </span>
          <span className="text-[#4D4D4D]" style={{ fontSize: 'var(--text-xs)' }}>
            Bogotá, Colombia 🇨🇴
          </span>
        </div>
      </div>
    </footer>
  )
}
