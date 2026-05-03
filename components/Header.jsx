import { Sun, Moon, Phone, Star, Menu, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const solucionesItems = [
  {
    title: 'Transporte de Carga',
    desc: 'Gestión de flota, guías y RNDC',
  },
  {
    title: 'Empresas',
    desc: 'Contabilidad, nómina e inventario',
  },
  {
    title: 'Parqueaderos',
    desc: 'Control de ingresos y facturación',
  },
  {
    title: 'Estaciones de Servicio',
    desc: 'Despacho, inventario y cumplimiento',
  },
  {
    title: 'Plantas Industriales',
    desc: 'Control de producción y costos',
  },
  {
    title: 'Hotelería',
    desc: 'Gestión hotelera y reservas',
  },
]

function SolucionesDropdown({ isDark }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-1 px-3 py-2 font-medium transition-all duration-150 cursor-pointer ${
          open
            ? 'text-[#EB3D26]'
            : 'text-[#4D4D4D] dark:text-white/60 hover:text-[#EB3D26] dark:hover:text-white hover:bg-[#F7F7F7] dark:hover:bg-white/5'
        }`}
        style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
      >
        Soluciones
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute top-full left-0 mt-2 bg-white dark:bg-[#2B2B2B] border border-[#EFEFEF] dark:border-white/10 overflow-hidden"
          style={{
            width: '280px',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-xl)',
            zIndex: 100,
          }}
        >
          <div style={{ padding: '8px' }}>
            {solucionesItems.map((item) => (
              <a
                key={item.title}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:bg-[#F7F7F7] dark:hover:bg-white/5 transition-colors duration-100 group"
                style={{ padding: '10px 12px', borderRadius: 'var(--radius-lg)' }}
              >
                {/* Icon square */}
                <div
                  className="shrink-0 bg-[#EB3D26]/12 group-hover:bg-[#EB3D26]/20 transition-colors"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB3D26]" />
                </div>
                <div>
                  <p className="text-[#2B2B2B] dark:text-white font-bold leading-none mb-0.5" style={{ fontSize: 'var(--text-sm)' }}>
                    {item.title}
                  </p>
                  <p className="text-[#6B6B6B] dark:text-[#AEAEAE]" style={{ fontSize: 'var(--text-xs)' }}>
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header({ isDark, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#1A1A1A] text-white" style={{ fontSize: 'var(--text-sm)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-2">
          {/* Excelente badge */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-medium tracking-wide">Excelente</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#2E9E6B] text-[#2E9E6B]" />
              ))}
            </div>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-4 text-white/50">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#94D1CA]" />
              <span className="text-white font-medium">318 897 0512</span>
            </div>
            <span className="text-white/15">|</span>
            <a href="#" className="hover:text-white transition-colors duration-150">Agenda tu demostración</a>
            <span className="text-white/15">|</span>
            <a href="#" className="hover:text-white transition-colors duration-150">Correo Corporativo</a>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 bg-white/8 hover:bg-white/15 transition-colors duration-150 shrink-0 cursor-pointer"
            style={{ borderRadius: 'var(--radius-md)' }}
          >
            {isDark
              ? <Sun className="w-3.5 h-3.5 text-yellow-300" />
              : <Moon className="w-3.5 h-3.5 text-blue-300" />
            }
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div
        className="bg-white dark:bg-[#2B2B2B] border-b border-[#DEDEDE] dark:border-white/8"
        style={{ boxShadow: 'var(--shadow-xs)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-9 h-9 bg-[#EB3D26] flex items-center justify-center"
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              <span className="text-white font-black text-lg leading-none">S</span>
            </div>
            <div className="leading-none">
              <div
                className="font-black text-xl text-[#2B2B2B] dark:text-white"
                style={{ letterSpacing: 'var(--ls-tight)' }}
              >
                SYSCOM
              </div>
              <div className="text-[9px] text-[#AEAEAE] tracking-[0.18em] uppercase mt-0.5 font-medium">
                Sistemas Comerciales
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <SolucionesDropdown isDark={isDark} />
            {['Nosotros', 'Comunidad', 'Contacto'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-3 py-2 text-[#4D4D4D] dark:text-white/60 hover:text-[#EB3D26] dark:hover:text-white hover:bg-[#F7F7F7] dark:hover:bg-white/5 transition-all duration-150 font-medium"
                style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center bg-[#94D1CA] text-[#2B2B2B] font-bold hover:bg-[#72bbb3] active:scale-95 transition-all duration-150"
              style={{ fontSize: 'var(--text-sm)', padding: '10px 20px', borderRadius: 'var(--radius-md)' }}
            >
              Solicitar demo
            </a>
            <button
              className="lg:hidden p-2 text-[#4D4D4D] dark:text-white/60 hover:text-[#2B2B2B] dark:hover:text-white"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#DEDEDE] dark:border-white/8 py-4 px-4 flex flex-col gap-2 bg-white dark:bg-[#2B2B2B]">
            <p
              className="text-[#AEAEAE] uppercase tracking-[0.15em] font-bold px-3 pt-1 pb-2"
              style={{ fontSize: 'var(--text-xs)' }}
            >
              Soluciones
            </p>
            {solucionesItems.map((item) => (
              <a
                key={item.title}
                href="#"
                className="text-[#4D4D4D] dark:text-white/70 py-2 px-3 hover:bg-[#F7F7F7] dark:hover:bg-white/5 font-medium transition-colors"
                style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
              >
                {item.title}
              </a>
            ))}
            <div className="border-t border-[#EFEFEF] dark:border-white/8 my-2" />
            {['Nosotros', 'Comunidad', 'Contacto'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#4D4D4D] dark:text-white/70 py-2 px-3 hover:bg-[#F7F7F7] dark:hover:bg-white/5 font-medium transition-colors"
                style={{ fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)' }}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 inline-flex justify-center bg-[#94D1CA] text-[#2B2B2B] font-bold"
              style={{ fontSize: 'var(--text-sm)', padding: '10px 20px', borderRadius: 'var(--radius-md)' }}
            >
              Solicitar demo
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
