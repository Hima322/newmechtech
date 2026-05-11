import { useState, useEffect } from 'react'
import logoIcon from '../assets/LOGO.jpeg'
import logoName from '../assets/LogoName.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div style={{ background: '#0047AB', color: '#fff', textAlign: 'center', fontSize: '13px', padding: '8px 16px' }}>
        🔧 Pan-India Delivery | GST Invoice Available | 24×7 Support: <strong>+91-7696939529</strong>
      </div>

      {/* Main Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: '#fff',
        boxShadow: scrolled ? '0 2px 24px rgba(0,71,171,0.10)' : '0 1px 0 #e8edf5',
        borderBottom: '2px solid #0047AB'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => scrollTo('home')}>
            <img
              src={logoIcon}
              alt="NMI"
              style={{ height: '62px', width: '62px', objectFit: 'contain', borderRadius: '8px', mixBlendMode: 'multiply' }}
            />
            <img
              src={logoName}
              alt="New MechTech India"
              style={{ height: '36px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Desktop Nav Links */}
          <ul style={{ display: 'flex', gap: '4px', listStyle: 'none', margin: 0, padding: 0 }}>
            {[['home','Home'],['products','Products'],['about','About Us'],['contact','Contact']].map(([id,label]) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)} style={{
                  background: 'transparent', color: '#334155',
                  border: 'none', padding: '8px 18px', borderRadius: '6px',
                  fontWeight: '600', fontSize: '14px', cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                  onMouseOver={e => { e.currentTarget.style.background='#f0f6ff'; e.currentTarget.style.color='#0047AB' }}
                  onMouseOut={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#334155' }}
                >{label}</button>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          {/* Right Side */}
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

  {/* Phone + Email stacked */}
  <div className="contact-link" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <a href="tel:+917696939529" style={{
      color: '#0047AB', fontWeight: '700', fontSize: '14px',
      textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px'
    }}>📞 +91-7696939529</a>

    <a href="mailto:sales@newmechtech.com" style={{
      color: '#0047AB', fontWeight: '600', fontSize: '13px',
      textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px'
    }}>✉️ sales@newmechtech.com</a>
  </div>

  <button onClick={() => scrollTo('contact')} style={{
    background: 'linear-gradient(135deg, #0047AB, #1a6fd4)',
    color: '#fff', border: 'none', padding: '10px 22px',
    borderRadius: '8px', fontWeight: '700', fontSize: '14px',
    cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,71,171,0.3)',
    transition: 'all 0.2s'
  }}
    onMouseOver={e => e.currentTarget.style.transform='translateY(-2px)'}
    onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}
  >Get Quote</button>

  {/* Mobile Hamburger */}
  <button onClick={() => setMenuOpen(!menuOpen)} style={{
    display: 'none', background: 'none', border: 'none',
    cursor: 'pointer', padding: '8px', color: '#0047AB'
  }} className="hamburger">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      {menuOpen
        ? <path d="M18 6L6 18M6 6l12 12"/>
        : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
      }
    </svg>
  </button>
</div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #e8edf5', padding: '12px 24px 20px' }}>
            {[['home','Home'],['products','Products'],['about','About Us'],['contact','Contact']].map(([id,label]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', padding: '12px 8px',
                color: '#334155', fontSize: '15px', fontWeight: '600',
                borderBottom: '1px solid #f1f5f9', cursor: 'pointer'
              }}>{label}</button>
            ))}

            {/* Mobile contact links inside menu */}
            <a href="tel:+917696939529" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 8px', color: '#0047AB', fontWeight: '700',
              fontSize: '15px', textDecoration: 'none',
              borderBottom: '1px solid #f1f5f9'
            }}>📞 +91-7696939529</a>

            <a href="mailto:sales@newmechtech.com" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 8px', color: '#0047AB', fontWeight: '700',
              fontSize: '15px', textDecoration: 'none',
              borderBottom: '1px solid #f1f5f9'
            }}>✉️ sales@newmechtech.com</a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: flex !important; }
          ul { display: none !important; }
          .contact-link { display: none !important; }
        }
        @media (max-width: 1024px) {
          .contact-link { font-size: 12px !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar