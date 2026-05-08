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
        #about .owner-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 40px;
          align-items: start;
        }
        #about .cta-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        #about .cert-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        @media (max-width: 900px) {
          #about .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #about .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #about .owner-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #about .owner-grid .owner-avatar {
            margin: 0 auto;
          }
          #about .owner-skills {
            justify-content: center !important;
          }
          #about .owner-btns {
            justify-content: center !important;
          }
        }

        @media (max-width: 600px) {
          #about .features-grid {
            grid-template-columns: 1fr !important;
          }
          #about .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          #about .cta-btns {
            flex-direction: column;
          }
          #about .cta-btns a,
          #about .cta-btns button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section id="about" style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* ── Section Header ── */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: '#dbeafe', color: '#1e40af', padding: '6px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '16px' }}>
              ABOUT US
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
              Northwestern India's Most Trusted<br />Industrial Automation Partner
            </h2>
            <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
              New MechTech India is a leading supplier of industrial automation components, providing smart engineering solutions since 2024.
            </p>
          </div>

          {/* ── Top Grid: Visual Card + Text ── */}
          <div className="about-grid">

            {/* Left — Visual Card */}
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

                <div style={{ fontSize: '52px', marginBottom: '8px', fontWeight: '800', lineHeight: 1 }}>2+</div>
                <div style={{ fontSize: '18px', opacity: 0.85, marginBottom: '28px' }}>Years of Excellence</div>

                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {[['50+','Projects Done'],['20+','Happy Clients'],['16+','Brands Stocked'],['24/7','Support']].map(([v, l]) => (
                    <div key={l} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '14px 16px', backdropFilter: 'blur(8px)' }}>
                      <div style={{ fontSize: '24px', fontWeight: '800', lineHeight: 1 }}>{v}</div>
                      <div style={{ fontSize: '12px', opacity: 0.75, marginTop: '4px' }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
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

            {/* Right — About Text */}
            <div style={{ paddingTop: '16px' }}>
              <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: 1.3 }}>
                Complete Industrial Automation & PLC Panel Solutions
              </h3>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px', fontSize: '15px' }}>
                Founded in 2024 by <strong style={{ color: '#0f172a' }}>Uma Bharti</strong>, New MechTech India is a trusted industrial automation supplier delivering advanced systems and engineering solutions. We specialize in PLC Panels, HMI Systems, SCADA Integration, VFD Drives, Sensors and Control Panels.
              </p>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '16px', fontSize: '15px' }}>
                We serve manufacturing plants, pharmaceuticals, packaging, textiles, food processing and infrastructure projects across Punjab, Haryana, HP and Delhi NCR.
              </p>
              <p style={{ color: '#475569', lineHeight: '1.8', marginBottom: '28px', fontSize: '15px' }}>
                From PLC programming to complete turnkey automation solutions — we deliver reliable technology with professional after-sales support.
              </p>

              {/* Certifications */}
              <div className="cert-badges">
                {['GST Registered', 'MSME Registered', 'Authorized Dealer', 'Pan-India Delivery'].map(cert => (
                  <span key={cert} style={{ background: '#f0f6ff', color: '#0047AB', border: '1px solid #bfdbfe', padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '700' }}>
                    {cert}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="cta-btns">
                <a href="tel:+917696939529" style={{ background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', color: '#fff', padding: '13px 26px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px', boxShadow: '0 4px 14px rgba(0,71,171,0.3)', display: 'inline-block' }}>
                  📞 Call Us Now
                </a>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'transparent', color: '#0047AB', border: '2px solid #0047AB', padding: '13px 26px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>

          {/* ── Why Choose Us ── */}
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

          {/* ── Founder Section ── */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ textAlign: 'center', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '800', color: '#0f172a', marginBottom: '40px' }}>
              Meet The Founder
            </h3>

            <div style={{ maxWidth: '860px', margin: '0 auto', background: 'linear-gradient(135deg, #f0f6ff, #e8f0ff)', borderRadius: '24px', padding: '40px', border: '1px solid #bfdbfe', boxShadow: '0 8px 32px rgba(0,71,171,0.08)' }}>
              <div className="owner-grid">

                {/* Avatar */}
                <div className="owner-avatar" style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '130px', height: '130px',
                    background: 'linear-gradient(135deg, #0047AB, #38bdf8)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '58px',
                    boxShadow: '0 8px 32px rgba(0,71,171,0.3)',
                    border: '4px solid #fff', margin: '0 auto 16px',
                  }}>
                    👨‍💼
                  </div>
                  <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '20px', marginBottom: '4px' }}>Mohit</div>
                  <div style={{ color: '#0047AB', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Founder & Owner</div>
                  <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                    10+ Years Experience
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h4 style={{ fontWeight: '800', color: '#0f172a', fontSize: '20px', marginBottom: '8px' }}>
                    PLC & Industrial Automation Expert
                  </h4>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.8', marginBottom: '20px', background: '#fff', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    Mohit is the founder of New MechTech India with over 10 years of hands-on experience in industrial automation, PLC systems, VFD drives and control panel solutions. He has served 50+ clients across Punjab, Haryana, HP and Delhi NCR with precision automation support.
                  </p>

                  {/* Skills */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }} className="owner-skills">
                    {['PLC Systems', 'VFD Drives', 'Panel Design', 'SCADA', 'Motor Control', 'HMI Programming'].map(skill => (
                      <span key={skill} style={{ background: '#fff', color: '#0047AB', border: '1px solid #bfdbfe', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }} className="owner-btns">
                    <a href="tel:+917696939529" style={{ background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', color: '#fff', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 4px 14px rgba(0,71,171,0.3)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      📞 Call Now
                    </a>
                    <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer" style={{ background: '#25D366', color: '#fff', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      💬 WhatsApp
                    </a>
                    <a href="mailto:newmechtechindia@gmail.com" style={{ background: '#fff', color: '#0047AB', border: '2px solid #bfdbfe', padding: '10px 22px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      📧 Email
                    </a>
                  </div>
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