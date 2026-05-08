import { useState, useEffect, useRef } from 'react'

import imgProximity   from '../assets/ProximitySensor.jpeg'
import imgLimitSwitch from '../assets/LimitSwitch.jpeg'
import imgDCDrives    from '../assets/dcdrives.jpeg'
import imgPLC         from '../assets/SimensePlc.webp'
import a              from '../assets/a.jpeg'
import b              from '../assets/b.jpeg'
import c              from '../assets/c.jpeg'
import d              from '../assets/d.jpeg'
import e              from '../assets/e.jpeg'
import f              from '../assets/f.png'

const slides = [
  {
    bg: imgPLC,
    badge: 'New Arrivals',
    tag: 'Industrial Automation',
    title: 'Smart PLC & Automation Systems',
    sub: 'Advanced programmable logic controllers, SCADA integration, and turnkey automation solutions for modern manufacturing.',
  },
  {
    bg: imgDCDrives,
    badge: 'Best Seller',
    tag: 'Drive Solutions',
    title: 'AC & DC Variable Frequency Drives',
    sub: 'Premium VFDs, servo drives, and motor control systems from top brands — ABB, Siemens, Schneider, Delta.',
  },
  {
    bg: imgProximity,
    badge: 'Top Rated',
    tag: 'Sensing Technology',
    title: 'Industrial Sensors & Transducers',
    sub: 'Proximity sensors, photoelectric sensors, pressure transmitters, temperature sensors for every application.',
  },
  {
    bg: imgLimitSwitch,
    badge: 'Wide Range',
    tag: 'Switching & Control',
    title: 'Limit Switches & Safety Devices',
    sub: 'Heavy-duty limit switches, safety relays, and position detectors for reliable machine control and protection.',
  },
]

// ─── STATS DATA ───────────────────────────────
const statsData = [
  { target: 50, suffix: '+',  label: 'Products Delivered' },
  { target: 2,  suffix: '+',  label: 'Years Experience'   },
  { target: 20, suffix: '+',  label: 'Happy Clients'      },
  { target: 24, suffix: '/7', label: 'Support Available'  },
]

// ─── PRODUCT CARDS ────────────────────────────
const cards = [
  { icon: '🏭', title: 'PLC Systems', desc: 'Siemens, Allen Bradley, Mitsubishi' },
  { icon: '⚡', title: 'VFD Drives',  desc: 'AC/DC drives for all motor types'   },
  { icon: '🔬', title: 'Sensors',     desc: 'Proximity, Photo, Pressure, Temp'  },
  { icon: '🔧', title: 'Panels',      desc: 'Custom MCC & control panels'        },
]

// ─── BRANDS ───────────────────────────────────
const brands = [
  { name: 'Siemens',    logo: 'https://www.siemens.com/etc/designs/siemenscom/client-libraries/images/favicon.ico',  color: '#009999' },
  { name: 'ABB',        logo: 'https://new.abb.com/etc/designs/abb/images/abb-logo.svg',                             color: '#FF000F' },
  { name: 'Schneider',  logo: 'https://www.se.com/etc/designs/se-site/favicon.ico',                                  color: '#3DCD58' },
  { name: 'Delta',      logo: 'https://www.deltaww.com/favicon.ico',                                                 color: '#E31837' },
  { name: 'Mitsubishi', logo: 'https://www.mitsubishielectric.com/favicon.ico',                                       color: '#E60012' },
  { name: 'Omron',      logo: 'https://www.omron.com/favicon.ico',                                                   color: '#CC0000' },
  { name: 'Honeywell',  logo: 'https://www.honeywell.com/favicon.ico',                                               color: '#FC1D21' },
  { name: 'Rockwell',   logo: 'https://www.rockwellautomation.com/favicon.ico',                                      color: '#005B94' },
  { name: 'Yaskawa',    logo: 'https://www.yaskawa.com/favicon.ico',                                                 color: '#003087' },
  { name: 'Danfoss',    logo: 'https://www.danfoss.com/favicon.ico',                                                 color: '#E2000F' },
  { name: 'Bosch',      logo: 'https://www.bosch.com/favicon.ico',                                                   color: '#EA0016' },
  { name: 'Makita',     logo: 'https://www.makita.com/favicon.ico',                                                  color: '#00A0DC' },
  { name: 'DeWalt',     logo: 'https://www.dewalt.com/favicon.ico',                                                  color: '#FEBD17' },
  { name: 'Taparia',    logo: 'https://www.taparia.com/favicon.ico',                                                 color: '#E31837' },
  { name: 'Fenner',     logo: 'https://www.fenner.com/favicon.ico',                                                  color: '#003087' },
  { name: 'Rexnord',    logo: 'https://www.rexnord.com/favicon.ico',                                                 color: '#E2000F' },
]

// ═══════════════════════════════════════════════
//  ANIMATED COUNTER HOOK
// ═══════════════════════════════════════════════
function useCountUp(target, duration = 1800, delay = 0, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const timer = setTimeout(() => {
      let startTime = null
      const easeOut = t => 1 - Math.pow(1 - t, 3)
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(easeOut(progress) * target))
        if (progress < 1) requestAnimationFrame(step)
        else setCount(target)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(timer)
  }, [started, target, duration, delay])

  return count
}

// ═══════════════════════════════════════════════
//  STATS BAR
// ═══════════════════════════════════════════════
function StatsBar() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const counts = [
    useCountUp(statsData[0].target, 1800, 0,   started),
    useCountUp(statsData[1].target, 1800, 200, started),
    useCountUp(statsData[2].target, 1800, 400, started),
    useCountUp(statsData[3].target, 1800, 600, started),
  ]

  return (
    <div
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0047AB 0%, #1565c0 100%)',
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', right: '-40px', top: '-40px',
        fontSize: '200px', opacity: 0.05, userSelect: 'none', color: '#fff',
        pointerEvents: 'none',
      }}>⚙</div>

      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px', textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        {statsData.map((s, i) => (
          <div
            key={i}
            style={{
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              padding: '8px 16px',
            }}
          >
            <div style={{
              color: '#fff', fontSize: '42px', fontWeight: '800',
              lineHeight: 1, display: 'flex', alignItems: 'baseline',
              justifyContent: 'center', gap: '2px',
              opacity: started ? 1 : 0,
              transform: started ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
            }}>
              <span>{counts[i]}</span>
              <span style={{ fontSize: '26px', color: '#93c5fd', fontWeight: '800' }}>{s.suffix}</span>
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.72)', fontSize: '13px',
              marginTop: '6px', fontWeight: '500', letterSpacing: '0.04em',
              opacity: started ? 1 : 0,
              transition: `opacity 0.5s ease ${i * 0.15 + 0.3}s`,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════
//  HERO MAIN COMPONENT
// ═══════════════════════════════════════════════
function Hero() {
  const [slide, setSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [textVisible, setTextVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => goTo((slide + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [slide])

  function goTo(idx) {
    if (idx === slide) return
    setTextVisible(false)
    setTimeout(() => {
      setPrevSlide(slide)
      setSlide(idx)
      setTextVisible(true)
    }, 350)
  }

  const s = slides[slide]

  return (
    <section id="home" style={{ background: '#fff' }}>

      {/* ── HERO ── */}
      <div style={{
        position: 'relative',
        padding: '80px 24px 60px',
        overflow: 'hidden',
        minHeight: '540px',
      }}>

        {/* Background Image Slides */}
        {slides.map((sl, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${sl.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === slide ? 1 : 0,
              transform: i === slide ? 'scale(1)' : 'scale(1.06)',
              transition: 'opacity 1.2s ease-in-out, transform 6s ease',
              zIndex: 0,
            }}
          />
        ))}

        {/* Dark overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(0,18,55,0.80) 0%, rgba(0,45,120,0.60) 55%, rgba(0,18,55,0.35) 100%)',
        }} />

        {/* Decorative gear watermark */}
        <div style={{
          position: 'absolute', right: '-60px', top: '-60px',
          fontSize: '320px', opacity: 0.04, userSelect: 'none',
          color: '#fff', zIndex: 2, pointerEvents: 'none',
        }}>⚙</div>

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 3,
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'center',
        }}>

          {/* ── LEFT TEXT ── */}
          <div style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}>

            <div style={{
              display: 'inline-block',
              background: '#0047AB', color: '#fff',
              padding: '4px 14px', borderRadius: '4px',
              fontSize: '11px', fontWeight: '700',
              letterSpacing: '0.1em', marginBottom: '20px',
              boxShadow: '0 2px 12px rgba(0,71,171,0.4)',
            }}>
              {s.badge}
            </div>

            <div style={{ color: '#93c5fd', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
              {s.tag}
            </div>

            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 50px)',
              fontWeight: '800', color: '#ffffff',
              lineHeight: 1.15, marginBottom: '20px',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}>
              {s.title}
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: '16px', lineHeight: '1.75',
              marginBottom: '36px', maxWidth: '480px',
            }}>
              {s.sub}
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'linear-gradient(135deg, #0047AB, #1a6fd4)',
                  color: '#fff', border: 'none',
                  padding: '14px 32px', borderRadius: '8px',
                  fontWeight: '700', fontSize: '15px', cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0,71,171,0.45)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,71,171,0.5)' }}
                onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,71,171,0.45)' }}
              >
                Explore Products →
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff', border: '2px solid rgba(255,255,255,0.6)',
                  padding: '14px 28px', borderRadius: '8px',
                  fontWeight: '700', fontSize: '15px', cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                Request Quote
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '32px', alignItems: 'center' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === slide ? '28px' : '8px',
                    height: '8px', borderRadius: '4px', border: 'none',
                    background: i === slide ? '#fff' : 'rgba(255,255,255,0.35)',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {cards.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '12px', padding: '20px',
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.25s ease', cursor: 'pointer',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.25)'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)'
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '14px', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: '12px' }}>{item.desc}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Slide progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '3px', background: 'rgba(255,255,255,0.15)', zIndex: 4,
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #93c5fd, #fff)',
            width: `${((slide + 1) / slides.length) * 100}%`,
            transition: 'width 0.5s ease',
          }} />
        </div>

      </div>

      {/* ── ANIMATED STATS BAR ── */}
      <StatsBar />

      {/* ── BRANDS BAR ── */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e8edf5', padding: '18px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <div style={{ padding: '0 24px', flexShrink: 0, borderRight: '2px solid #e2e8f0' }}>
            <span style={{ color: '#94a3b8', fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
              AUTHORIZED<br />DISTRIBUTOR
            </span>
          </div>

          <div style={{ overflow: 'hidden', flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #f8fafc, transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #f8fafc, transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              animation: 'brandSlide 30s linear infinite',
              width: 'max-content',
            }}>
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} style={{ flexShrink: 0, margin: '0 16px' }}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                      transition: 'all 0.2s',
                      minWidth: '120px',
                      justifyContent: 'center',
                    }}
                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,71,171,0.15)'; e.currentTarget.style.borderColor = '#0047AB'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                      onError={e => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div style={{ display: 'none', width: '10px', height: '10px', borderRadius: '50%', background: brand.color, flexShrink: 0 }} />
                    <span style={{ fontWeight: '800', fontSize: '12px', color: '#1e293b', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes brandSlide {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

    </section>
  )
}

export default Hero