import { useState } from 'react'
import logo from '../assets/logo.png'
import linkedinIcon from '../assets/Icon/linkedin.png'
import facebookIcon from '../assets/Icon/facebook.png'
import instagramIcon from '../assets/Icon/instagram.png'

const productLinks = [
  'PLC Systems', 'AC Drives (VFD)', 'DC Drives',
  'Proximity Sensors', 'Photoelectric Sensors',
  'Pressure Transmitters', 'HMI Panels', 'MCC Panels',
]

const serviceLinks = [
  'PLC Supply & Installation',
  'VFD / AC Drive Supply',
  'DC Drive Supply',
  'Proximity Sensor Supply',
  'Photoelectric Sensor Supply',
  'Pressure Transmitter Supply',
  'Temperature Sensor Supply',
  'HMI Panel Supply',
]

const contactItems = [
  { icon: '📍', text: 'Shop no.1, First Floor\nVillage Bhagwanpur, Barwala Road,\nDera Bassi, Punjab – 140507' },
  { icon: '📞', text: '+91-7696939529\n+91-9917592721' },
  { icon: '📧', text: 'sales@newmechtech.com' },
  { icon: '⏰', text: 'Mon–Sat: 9 AM – 7 PM' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/YOUR-LINKEDIN-ID',
    icon: linkedinIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/YOUR-FACEBOOK-PAGE',
    icon: facebookIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/@newmechtechindia',
    icon: instagramIcon,
  },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) return
    setSubStatus('success')
    setEmail('')
  }

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.3fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
        }
        .footer-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .newsletter-form {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .newsletter-input {
          padding: 12px 18px;
          border-radius: 8px;
          border: none;
          font-size: 14px;
          width: 240px;
          outline: none;
          font-family: inherit;
        }
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer-grid > div:first-child { grid-column: 1; }
          .newsletter-inner { flex-direction: column; align-items: flex-start; }
          .newsletter-form { width: 100%; flex-direction: column; }
          .newsletter-input { width: 100%; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .footer-bottom-links { gap: 14px; }
        }
      `}</style>

      <footer style={{ background: '#0c1220', color: '#cbd5e1' }}>

        {/* Newsletter Strip */}
        <div style={{ background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', padding: '40px 24px' }}>
          <div className="newsletter-inner" style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '20px', marginBottom: '6px' }}>
                📧 Stay Updated with Latest Products & Offers
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px' }}>
                Get price alerts, new arrivals and technical tips delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              {subStatus === 'success' ? (
                <div style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', fontSize: '14px' }}>
                  ✅ Subscribed! Thank you.
                </div>
              ) : (
                <>
                  <input type="email" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value)} className="newsletter-input" />
                  <button type="submit" style={{ background: '#fff', color: '#0047AB', border: 'none', padding: '12px 22px', borderRadius: '8px', fontWeight: '800', cursor: 'pointer', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    Subscribe →
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div style={{ padding: '64px 24px 40px', maxWidth: '1280px', margin: '0 auto' }}>
          <div className="footer-grid">

            {/* Col 1 — Brand */}
            <div>
              {/* Logo */}
              <div style={{ marginBottom: '20px' }}>
                <img
  src={logo}
  alt="New MechTech India"
  style={{ height: '120px', width: 'auto', objectFit: 'contain', mixBlendMode: 'screen' }}
/>
              </div>

              <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#94a3b8', marginBottom: '20px', maxWidth: '300px' }}>
                North-Western India's most trusted supplier of industrial automation
                components, PLC systems, VFDs, sensors and control panels.
                Serving  since 2024.
              </p>

              {/* Certifications */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
                {['ISO 9001', 'GST Reg.', 'MSME'].map(c => (
                  <span key={c} style={{ background: 'rgba(255,255,255,0.07)', color: '#94a3b8', padding: '4px 12px', borderRadius: '5px', fontSize: '11px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {c}
                  </span>
                ))}
              </div>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '10px' }}>
               {socialLinks.map(s => (
  <a key={s.label} href={s.href} title={s.label}
    target="_blank" rel="noreferrer"
    style={{
      width: '42px', height: '42px',
      background: 'rgba(255,255,255,0.07)',
      borderRadius: '8px', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      textDecoration: 'none',
      transition: 'all 0.2s',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '8px',
    }}
    onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,71,171,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
    onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
  >
    <img
      src={s.icon}
      alt={s.label}
      style={{ width: '22px', height: '22px', objectFit: 'contain' }}
    />
  </a>
))}
              </div>
            </div>

            {/* Col 2 — Products */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Products
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {productLinks.map(link => (
                  <li key={link}>
                    <button onClick={() => scrollTo('products')} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '14px', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s', fontFamily: 'inherit' }}
                      onMouseOver={e => e.currentTarget.style.color = '#38bdf8'}
                      onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
                    >→ {link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Services
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {serviceLinks.map(link => (
                  <li key={link}>
                    <button onClick={() => scrollTo('contact')} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '14px', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s', fontFamily: 'inherit' }}
                      onMouseOver={e => e.currentTarget.style.color = '#38bdf8'}
                      onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
                    >→ {link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                Contact Us
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '15px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                    <span style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px', background: '#25D366', color: '#fff', padding: '11px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '13px', transition: 'all 0.2s' }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px' }}>
            <div className="footer-bottom">
              <p style={{ color: '#475569', fontSize: '13px' }}>
                © 2026 <strong style={{ color: '#64748b' }}>New MechTech India</strong>. All Rights Reserved.
              </p>
              <div className="footer-bottom-links">
                {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(link => (
                  <a key={link} href="#" style={{ color: '#475569', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.color = '#94a3b8'}
                    onMouseOut={e => e.currentTarget.style.color = '#475569'}
                  >{link}</a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Back to Top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 500, background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', color: '#fff', border: 'none', width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', boxShadow: '0 4px 16px rgba(0,71,171,0.4)', transition: 'all 0.2s' }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
        >↑</button>

      </footer>
    </>
  )
}

export default Footer