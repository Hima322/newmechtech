function About() {
  const features = [
    { icon: '🏭', title: 'Industrial Expertise', desc: 'Serving manufacturing, pharma, food processing and textile industries across North India.' },
    { icon: '🤝', title: 'Authorized Distributor', desc: 'Official distributor for Siemens, ABB, Schneider Electric, Delta, Omron and Mitsubishi.' },
    { icon: '🔧', title: 'Technical Support', desc: '24/7 on-site and remote support for PLC programming, VFD commissioning and panel troubleshooting.' },
    { icon: '📦', title: 'Fast Delivery', desc: 'Same-day dispatch on stocked items. Pan-India delivery with tracking. Emergency procurement available.' },
    { icon: '💰', title: 'Best Pricing', desc: 'Competitive pricing with volume discounts. GST invoice provided on all orders.' },
    { icon: '✅', title: 'Quality Assured', desc: '100% genuine products with manufacturer warranty. No grey market or refurbished items.' },
  ]

  return (
    <>
      <style>{`
        #about .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 80px;
        }
        #about .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        #about .founder-inner {
          display: flex;
          gap: 0;
          align-items: stretch;
        }
        #about .founder-left {
          width: 280px;
          flex-shrink: 0;
          background: linear-gradient(135deg, #0047AB 0%, #1565c0 60%, #38bdf8 100%);
          border-radius: 20px 0 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        #about .founder-right {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 900px) {
          #about .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #about .founder-inner { flex-direction: column !important; }
          #about .founder-left { width: 100% !important; border-radius: 20px 20px 0 0 !important; padding: 32px 24px !important; }
          #about .founder-right { padding: 28px 24px !important; }
        }
        @media (max-width: 600px) {
          #about .features-grid { grid-template-columns: 1fr !important; }
          #about .stats-grid { grid-template-columns: 1fr 1fr !important; }
          #about .cert-badges { flex-wrap: wrap; }
          #about .cta-btns { flex-direction: column; }
          #about .cta-btns a, #about .cta-btns button { width: 100%; text-align: center; justify-content: center; }
          #about .founder-contact-btns a { flex: 1; justify-content: center; }
        }
      `}</style>

      <section id="about" style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: '#dbeafe', color: '#1e40af', padding: '6px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '16px' }}>ABOUT US</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
              Northwestern India's Most Trusted<br />Industrial Automation Partner
            </h2>
            <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
              New MechTech India is a leading supplier of industrial automation components, providing smart engineering solutions since 2024.
            </p>
          </div>

          {/* Top Grid */}
          <div className="about-grid">
            {/* Left Visual Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'linear-gradient(135deg, #0047AB 0%, #1a6fd4 60%, #38bdf8 100%)',
                borderRadius: '20px', padding: '48px', color: '#fff',
                position: 'relative', overflow: 'hidden', minHeight: '400px',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
              }}>
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ position: 'absolute', top: '40px', right: '40px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ fontSize: '80px', position: 'absolute', top: '32px', left: '40px', opacity: 0.2 }}>⚙️</div>
                <div style={{ fontSize: '52px', marginBottom: '8px', fontWeight: '800', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '18px', opacity: 0.85, marginBottom: '28px' }}>Years of Excellence</div>
                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {[['50+','Projects Done'],['100+','Happy Clients'],['45+','Brands Stocked'],['24/7','Support']].map(([v, l]) => (
                    <div key={l} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '14px 16px', backdropFilter: 'blur(8px)' }}>
                      <div style={{ fontSize: '24px', fontWeight: '800', lineHeight: 1 }}>{v}</div>
                      <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{
                position: 'absolute', bottom: '-20px', left: '32px',
                background: '#fff', borderRadius: '12px', padding: '14px 20px',
                boxShadow: '0 8px 32px rgba(0,71,171,0.18)',
                display: 'flex', alignItems: 'center', gap: '12px'
              }}>
                <div style={{ width: '40px', height: '40px', background: '#dcfce7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>✅</div>
                <div>
                  <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>GST Registered</div>
                  <div style={{ color: '#64748b', fontSize: '12px' }}>Authorized Dealer</div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div style={{ paddingTop: '16px' }}>
              <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: 1.3 }}>
                Complete Industrial Automation & PLC Panel Solutions
              </h3>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px', fontSize: '15px' }}>
                Founded in 2024 by <strong style={{ color: '#0f172a' }}>Uma Bharti</strong>, NewMechTechIndia delivers advanced automation systems. We specialize in PLC Panels, HMI Systems, Mechanical Components, Pneumatic Components, VFD Drives, Sensors, and Control Panels.
              </p>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '28px', fontSize: '15px' }}>
                We serve manufacturing, pharma, packaging, textiles and food processing industries across India.
              </p>
              <div className="cert-badges" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
                {['GST Registered', 'MSME Registered', 'Authorized Dealer', 'Pan-India Delivery'].map(cert => (
                  <span key={cert} style={{ background: '#f0f6ff', color: '#0047AB', border: '1px solid #bfdbfe', padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>{cert}</span>
                ))}
              </div>
              <div className="cta-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="tel:+917696939529" style={{ background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', color: '#fff', padding: '13px 26px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px', boxShadow: '0 4px 14px rgba(0,71,171,0.3)', display: 'inline-block' }}>
                  📞 Call Us Now
                </a>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'transparent', color: '#0047AB', border: '2px solid #0047AB', padding: '13px 26px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div style={{ marginBottom: '80px' }}>
            <h3 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', marginBottom: '40px' }}>
              Why Choose New MechTech India?
            </h3>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} style={{ background: '#f8fafc', borderRadius: '14px', padding: '28px', border: '1px solid #e2e8f0', transition: 'all 0.25s' }}
                  onMouseOver={e => { e.currentTarget.style.background='#f0f6ff'; e.currentTarget.style.borderColor='#0047AB'; e.currentTarget.style.transform='translateY(-4px)' }}
                  onMouseOut={e => { e.currentTarget.style.background='#f8fafc'; e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div style={{ fontSize: '36px', marginBottom: '14px' }}>{f.icon}</div>
                  <h4 style={{ fontWeight: '700', color: '#0f172a', fontSize: '16px', marginBottom: '10px' }}>{f.title}</h4>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
        {/* Founder Section */}
<div style={{ marginBottom: '20px' }}>
  <h3 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', marginBottom: '40px' }}>
    Meet The Founder
  </h3>

  <div style={{
    width: '100%',
    background: 'linear-gradient(135deg, #0047AB 0%, #1565c0 60%, #38bdf8 100%)',
    borderRadius: '20px',
    padding: '36px 40px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,71,171,0.2)'
  }}>

    {/* Decorative */}
    <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '-40px', left: '40%', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

    {/* Content Row */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>

      {/* Avatar */}
      <div style={{
        width: '100px', height: '100px', flexShrink: 0,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)',
        border: '3px solid rgba(255,255,255,0.5)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '48px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)',
      }}>
        👩‍💼
      </div>

      {/* Name + Role */}
      <div style={{ flex: 1, minWidth: '180px' }}>
        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.18em', marginBottom: '6px' }}>
          FOUNDER & OWNER
        </div>
        <h4 style={{ color: '#fff', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: '800', margin: '0 0 6px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          Uma Bharti
        </h4>
        <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: '500' }}>
          New MechTech India
        </div>
      </div>

      {/* Contact Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '240px' }}>
        {[
          { icon: '📧', val: 'sales@newmechtech.com', href: 'mailto:sales@newmechtech.com' },
          { icon: '📍', val: 'Dera Bassi, Punjab – 140507', href: null },
          { icon: '⏰', val: 'Mon–Sat: 9 AM – 7 PM', href: null },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>
            {item.href ? (
              <a href={item.href} style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                {item.val}
              </a>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: '500' }}>{item.val}</span>
            )}
          </div>
        ))}
      </div>

    </div>
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default About