import { useState } from 'react'

const contactItems = [
  {
    icon: '📍',
    label: 'Address',
    val: 'Shop no.1, First Floor Village Bhagwanpur, Barwala Road, Dera Bassi, Punjab, 140507',
    link: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    val: '+91-7696939529',
    link: 'tel:+917696939529',
  },
  {
    icon: '📧',
    label: 'Email',
    val: 'sales@newmechtech.com',
    link: 'mailto:sales@newmechtech.com',
  },
  {
    icon: '⏰',
    label: 'Hours',
    val: 'Mon–Sat: 9:00 AM – 7:00 PM',
    link: null,
  },
]

function Contact() {
  const [hoverBtn, setHoverBtn] = useState(false)
  const [hoverWa, setHoverWa] = useState(false)

  return (
    <section id="contact" style={{ background: '#f1f5f9', padding: '72px 20px' }}>

      <style>{`
        /* ── responsive contact grid ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 32px;
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .contact-card {
          background: #fff;
          border-radius: 14px;
          padding: 18px 20px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .contact-card:hover {
          box-shadow: 0 6px 24px rgba(0,71,171,0.10);
          transform: translateY(-2px);
        }
        .contact-enquiry-col {
          background: #fff;
          border-radius: 20px;
          padding: 48px 40px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          text-align: center;
          box-shadow: 0 4px 32px rgba(0,71,171,0.06);
        }
        .contact-title {
          font-size: clamp(26px, 4vw, 40px);
        }

        /* tablet */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-enquiry-col {
            padding: 36px 28px;
          }
        }

        /* mobile */
        @media (max-width: 540px) {
          .contact-enquiry-col {
            padding: 28px 18px;
            border-radius: 16px;
          }
          .contact-card {
            padding: 14px 16px;
          }
          .contact-badge {
            font-size: 11px !important;
          }
          .enquiry-icon {
            font-size: 44px !important;
          }
          .enquiry-heading {
            font-size: 20px !important;
          }
          .enquiry-btn {
            padding: 14px 28px !important;
            font-size: 16px !important;
            width: 100%;
          }
          .wa-btn {
            font-size: 14px !important;
            padding: 13px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div
            className="contact-badge"
            style={{
              display: 'inline-block',
              background: '#dbeafe',
              color: '#1e40af',
              padding: '6px 16px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            CONTACT US
          </div>
          <h2
            className="contact-title"
            style={{
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            Get In Touch With Our Team
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Request a quote, ask about a product, or get technical support.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="contact-grid">

          {/* ── LEFT: Info cards + WhatsApp ── */}
          <div className="contact-info-col">
            {contactItems.map((item, i) => {
              const inner = (
                <>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: '#eff6ff',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '12px', letterSpacing: '0.06em', marginBottom: '4px', textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{
                      color: item.link ? '#0047AB' : '#475569',
                      fontSize: '14px',
                      lineHeight: 1.55,
                      wordBreak: 'break-word',
                      fontWeight: item.link ? '600' : '400',
                    }}>
                      {item.val}
                    </div>
                  </div>
                </>
              )

              return item.link ? (
                <a
                  key={i}
                  href={item.link}
                  className="contact-card"
                  style={{ textDecoration: 'none' }}
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="contact-card">
                  {inner}
                </div>
              )
            })}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917696939529"
              target="_blank"
              rel="noreferrer"
              className="wa-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: hoverWa
                  ? '#1ebe5d'
                  : 'linear-gradient(135deg, #25D366, #1ebe5d)',
                color: '#fff',
                borderRadius: '12px',
                padding: '15px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '15px',
                boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                transform: hoverWa ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onMouseOver={() => setHoverWa(true)}
              onMouseOut={() => setHoverWa(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* ── RIGHT: Enquiry panel ── */}
          <div className="contact-enquiry-col">

            {/* Decorative ring */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '88px', height: '88px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
                border: '3px solid #bfdbfe',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="enquiry-icon" style={{ fontSize: '44px' }}>📩</span>
              </div>
              <div style={{
                position: 'absolute', top: '-6px', right: '-6px',
                width: '22px', height: '22px', borderRadius: '50%',
                background: '#0047AB',
                border: '3px solid #fff',
              }} />
            </div>

            <h3
              className="enquiry-heading"
              style={{ fontWeight: '800', color: '#0f172a', fontSize: '24px', margin: 0 }}
            >
              Send Us an Enquiry
            </h3>

            <p style={{ color: '#64748b', fontSize: '15px', margin: 0, maxWidth: '320px', lineHeight: 1.65 }}>
              Click below to open your mail app and send us your requirement directly.
            </p>

            {/* Divider */}
            <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg,#0047AB,#93c5fd)', borderRadius: '2px' }} />

            <button
              className="enquiry-btn"
              onClick={() => { window.location.href = 'mailto:sales@newmechtech.com' }}
              style={{
                background: hoverBtn
                  ? 'linear-gradient(135deg, #003d99, #1560c0)'
                  : 'linear-gradient(135deg, #0047AB, #1a6fd4)',
                color: '#fff',
                border: 'none',
                padding: '16px 44px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '17px',
                cursor: 'pointer',
                boxShadow: hoverBtn
                  ? '0 8px 28px rgba(0,71,171,0.45)'
                  : '0 4px 18px rgba(0,71,171,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                transform: hoverBtn ? 'translateY(-3px)' : 'translateY(0)',
                letterSpacing: '0.02em',
              }}
              onMouseOver={() => setHoverBtn(true)}
              onMouseOut={() => setHoverBtn(false)}
            >
              📩 Send Enquiry
            </button>

            <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
              sales@newmechtech.com
            </p>

            {/* Trust badges */}
            <div style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap',
              justifyContent: 'center', marginTop: '8px',
            }}>
              {['✅ Quick Response', '🔒 Secure', '💼 B2B Ready'].map((badge, i) => (
                <span key={i} style={{
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#475569',
                }}>
                  {badge}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact