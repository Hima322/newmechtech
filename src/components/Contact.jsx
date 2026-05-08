import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email required'
    if (!form.phone.trim()) e.phone = 'Phone required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
    setStatus('success')
    setForm({ name: '', email: '', phone: '', product: '', message: '' })
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
              { icon: '📍', label: 'Address', val:  'Shop no.1, First Floor Village Bhagwanpur, Barwla Road,Darabassi, Punjab , 140507' },
             
              { icon: '📞', label: 'Phone', val: '+91-98765-43210' },
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

            <a href="https://wa.me/+917696939529" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#25D366', color: '#fff', borderRadius: '10px', padding: '14px', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Right Form */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontWeight: '800', color: '#0f172a', fontSize: '22px', marginBottom: '24px' }}>Send Us an Enquiry</h3>

            {status === 'success' && (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
                <div style={{ fontWeight: '700', color: '#166534' }}>✅ Message Sent! We will contact you within 2 hours.</div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', marginBottom: '7px', color: '#374151' }}>Full Name *</label>
                  <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.name ? '#fca5a5' : '#e2e8f0'}`, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                  {errors.name && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', marginBottom: '7px', color: '#374151' }}>Mobile *</label>
                  <input type="tel" name="phone" placeholder="10-digit mobile" value={form.phone} onChange={handleChange}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.phone ? '#fca5a5' : '#e2e8f0'}`, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                  {errors.phone && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</p>}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', marginBottom: '7px', color: '#374151' }}>Email *</label>
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.email ? '#fca5a5' : '#e2e8f0'}`, fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
                {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', marginBottom: '7px', color: '#374151' }}>Product Category</label>
                <select name="product" value={form.product} onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #e2e8f0', fontSize: '14px', outline: 'none', background: '#fff', boxSizing: 'border-box' }}>
                  <option value="">Select category...</option>
                  <option>PLC Systems</option>
                  <option>AC Drives / VFD</option>
                  <option>DC Drives</option>
                  <option>Sensors</option>
                  <option>HMI Panels</option>
                  <option>Control Panels</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', fontSize: '13px', marginBottom: '7px', color: '#374151' }}>Message *</label>
                <textarea name="message" rows={4} placeholder="Describe your requirement..." value={form.message} onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.message ? '#fca5a5' : '#e2e8f0'}`, fontSize: '14px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                {errors.message && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.message}</p>}
              </div>

              <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #0047AB, #1a6fd4)', color: '#fff', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: '700', fontSize: '16px', cursor: 'pointer' }}>
                📩 Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact