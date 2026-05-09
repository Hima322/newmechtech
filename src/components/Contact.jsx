import { useState } from 'react'

function Contact() {
  const handleMailOpen = () => {
    window.location.href = 'mailto:newmechtechindia@gmail.com'
  }

  return (
    <section id="contact" style={{ background: '#f8fafc', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-block', background: '#dbeafe', color: '#1e40af', padding: '6px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '16px' }}>CONTACT US</div>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: '#0f172a', marginBottom: '14px' }}>Get In Touch With Our Team</h2>
          <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '540px', margin: '0 auto' }}>Request a quote, ask about a product, or get technical support.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px' }}>

          {/* Left Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '📍', label: 'Address', val: 'Shop no.1, First Floor Village Bhagwanpur, Barwala Road, Dera Bassi, Punjab, 140507' },
              { icon: '📞', label: 'Phone', val: '+91-7696939529' },
              { icon: '📧', label: 'Email', val: 'newmechtechindia@gmail.com' },
              { icon: '⏰', label: 'Hours', val: 'Mon–Sat: 9:00 AM – 7:00 PM' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '20px', border: '1px solid #e2e8f0', display: 'flex', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', background: '#f0f6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '13px', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ color: '#475569', fontSize: '14px' }}>{item.val}</div>
                </div>
              </div>
            ))}

            <a href="https://wa.me/917696939529" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#fff', borderRadius: '10px', padding: '14px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Right — only button */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <div style={{ fontSize: '56px' }}>📩</div>
            <h3 style={{ fontWeight: '800', color: '#0f172a', fontSize: '24px', margin: 0 }}>Send Us an Enquiry</h3>
            <p style={{ color: '#64748b', fontSize: '15px', textAlign: 'center', margin: 0 }}>
              Click below to open your mail app and send us your requirement directly.
            </p>
            <button
              onClick={handleMailOpen}
              style={{ background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', color: '#fff', border: 'none', padding: '16px 40px', borderRadius: '12px', fontWeight: '700', fontSize: '18px', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,71,171,0.3)' }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              📩 Send Enquiry
            </button>
            <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
              newmechtechindia@gmail.com
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact