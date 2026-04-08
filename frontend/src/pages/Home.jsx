import { useEffect, useRef } from 'react'
import QrGenerator from '../components/QrGenerator'

const CLIENTS = [
  { name: '관세청', desc: '병행수입품 통관인증 시스템', subDesc: '(관세청)', logo: '/images/관세청.jpg' },
  { name: '삼성카드', desc: 'QR코드 이력관리 시스템', subDesc: '(삼성카드)', logo: '/images/삼성카드.jpg' },
  { name: '우정사업본부', desc: 'QR & 바코드 생성관리 시스템', subDesc: '(우정사업본부)', logo: '/images/우정사업본부.jpg' },
  { name: '동아제약', desc: 'QR코드 생성관리 시스템', subDesc: '(동아제약)', logo: '/images/동아제약.jpg' },
  { name: '국립농산물품질관리원', desc: '농식품 인증정보 시스템', subDesc: '(국립농산물품질관리원)', logo: '/images/국립농산물품질관리원.jpg' },
]

const PORTFOLIO = [
  { name: 'QUA', file: 'pof_QUA.jpg' },
  { name: 'CJ 오쇼핑', file: 'pof_CJO.jpg' },
  { name: 'GS shop', file: 'pof_GSshop.jpg' },
  { name: '삼성생명', file: 'pof_SamungLife.jpg' },
  { name: 'NIKE', file: 'pof_NIKE.jpg' },
  { name: 'LG 3D sound', file: 'pof_LG3Dsound.jpg' },
  { name: '한국타이어', file: 'pof_Hankook.jpg' },
  { name: 'LG optimus Vu', file: 'pof_LGoptimusVu.jpg' },
  { name: '팬텍', file: 'pof_Pantech.jpg' },
  { name: '미스터피자', file: 'pof_MrPizza.jpg' },
  { name: '라네즈', file: 'pof_LANEIGE.jpg' },
  { name: '아시아나 OZ', file: 'pof_AsianaOZ.jpg' },
  { name: 'Daegu2011', file: 'pof_Daegu2011.jpg' },
  { name: 'KORID', file: 'pof_KORID.jpg' },
  { name: 'KEPCO', file: 'pof_KEPCO.jpg' },
  { name: 'MND', file: 'pof_MND.jpg' },
  { name: '고용노동부 1318', file: 'pof_1318.jpg' },
  { name: '한국환경공단', file: 'pof_Keco.jpg' },
  { name: '한국교직원공제회', file: 'pof_KTCU.jpg' },
  { name: 'WP', file: 'pof_wp.jpg' },
]

const NEWS = [
  { media: '서울경제', color: '#c0392b', bg: '#2a1a1a', text: '관세청, 전자상거래 전용 수입통관 플랫폼 구축…QR코드 본인인증 도입', url: 'https://sedaily.com/NewsView/2D41JYT2E9' },
  { media: '아주경제', color: '#5b9bd5', bg: '#1a2030', text: 'SSG닷컴, 병행수입 명품 협력사 QR코드 100% 도입…취소·반품률 20% 감소', url: 'https://www.ajunews.com/view/20140629092002314' },
  { media: '보안뉴스', color: '#4caf7d', bg: '#1a2820', text: 'QR코드 사용 급증…큐싱·QRL재킹 등 보안 위협 주의 필요', url: 'http://www.boannews.com/media/view.asp?idx=81734' },
  { media: 'QR TIGER', color: '#0a8fa8', bg: '#0a1e24', text: '2025년 QR코드 스캔율 19% 증가 전망…모바일 결제·인증 시장 확대', url: 'https://www.qrcode-tiger.com/ko/qr-code-forecast' },
  { media: '데일리시큐', color: '#b07dd4', bg: '#1e1a28', text: '2025 대한민국 사이버보안 결산…QR코드 피싱 공격 급증', url: 'https://www.dailysecu.com/news/articleView.html?idxno=203952' },
]

const wrap = { maxWidth: 1100, margin: '0 auto', padding: '0 24px' }

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function AnimatedSection({ children, style = {} }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} style={{
      opacity: 0,
      transform: 'translateY(40px)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      ...style,
    }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hero-title { font-size: 64px; }
        .hero-buttons { flex-direction: row; }
        .clients-grid { grid-template-columns: repeat(5, 1fr); }
        .hot-issue-grid { grid-template-columns: 1fr 1fr; }
        .vi-grid { grid-template-columns: 1fr 1fr; }
        .portfolio-grid { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 1024px) {
          .hero-title { font-size: 52px; }
          .hero-grid { gap: 40px; }
          .portfolio-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-title { font-size: 42px; }
          .hero-buttons { flex-direction: column; }
          .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hot-issue-grid { grid-template-columns: 1fr !important; }
          .vi-grid { grid-template-columns: 1fr !important; }
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .vi-card { flex-direction: column !important; }
          .vi-card img { width: 100% !important; height: 200px !important; }
          .contact-title { font-size: 36px !important; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 36px; }
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* ── 히어로 ── */}
      <section style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 60% 50%, rgba(10,143,168,0.15) 0%, transparent 60%), #0a0a0a',
        display: 'flex', alignItems: 'center',
        padding: '80px 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,143,168,0.12) 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '3%', width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(10,143,168,0.08) 0%, transparent 70%)', animation: 'pulse 6s ease-in-out infinite', pointerEvents: 'none' }} />

        <div style={{ ...wrap, width: '100%' }}>
          <div className="hero-grid">
            <div>
              <AnimatedSection>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(10,143,168,0.15)', border: '1px solid rgba(10,143,168,0.3)',
                  color: '#0a8fa8', fontSize: 12, fontWeight: 700,
                  padding: '6px 16px', borderRadius: 99, marginBottom: 24, letterSpacing: '1px',
                }}>무료 QR코드 생성 서비스</div>
              </AnimatedSection>

              <AnimatedSection style={{ transitionDelay: '0.1s' }}>
                <h1 className="hero-title" style={{
                  fontWeight: 900, color: '#fff',
                  lineHeight: 1.1, letterSpacing: '-2px', marginBottom: 24,
                }}>
                  QR코드,<br />
                  <span style={{
                    background: 'linear-gradient(135deg, #0a8fa8, #4dd9f0)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>더 쉽고</span><br />
                  빠르게
                </h1>
              </AnimatedSection>

              <AnimatedSection style={{ transitionDelay: '0.2s' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>
                  간편한 QR 코드 생성부터 디자인 커스터마이징까지,<br />
                  모든 것을 한 곳에서
                </p>
              </AnimatedSection>

              <AnimatedSection style={{ transitionDelay: '0.3s' }}>
                <div className="hero-buttons" style={{ display: 'flex', gap: 12 }}>
                  <a href="#generator" style={{
                    background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
                    color: '#fff', textDecoration: 'none',
                    padding: '14px 28px', borderRadius: 12,
                    fontSize: 15, fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(10,143,168,0.4)',
                    transition: 'all 0.2s', textAlign: 'center',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,143,168,0.5)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,143,168,0.4)' }}
                  >지금 바로 생성하기 →</a>
                  <a href="#portfolio" style={{
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff', textDecoration: 'none',
                    padding: '14px 28px', borderRadius: 12,
                    fontSize: 15, fontWeight: 600, transition: 'all 0.2s', textAlign: 'center',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                  >포트폴리오 보기</a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection style={{ transitionDelay: '0.2s' }}>
              <div id="generator" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <QrGenerator />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Enterprise (라이트) ── */}
      <section style={{ background: '#f8fafc', padding: '64px 0' }} id="system">
        <div style={wrap}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0a0a0a', marginBottom: 8, letterSpacing: '-1px' }}>
                QRcode System <span style={{ color: '#0a8fa8' }}>Enterprise</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: 15 }}>기업을 위한 전문 QR코드 시스템</p>
            </div>
          </AnimatedSection>
          <AnimatedSection style={{ transitionDelay: '0.1s' }}>
            <div className="clients-grid" style={{ display: 'grid', gap: 12 }}>
              {CLIENTS.map(({ name, desc, subDesc, logo }) => (
                <div key={name} style={{
                  background: '#fff', border: '1px solid #e8edf5',
                  borderRadius: 16, padding: '20px 12px', textAlign: 'center', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,143,168,0.12)'; e.currentTarget.style.borderColor = '#0a8fa8' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e8edf5' }}
                >
                  <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <img src={logo} alt={name} style={{ maxHeight: 48, maxWidth: '100%', objectFit: 'contain' }} />
                  </div>
                  <p style={{ fontSize: 11, color: '#4a8fa8', lineHeight: 1.5 }}>{desc}</p>
                  <p style={{ fontSize: 10, color: '#9ca3af', marginTop: 3 }}>{subDesc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Hot Issue (다크) ── */}
      <section style={{ background: '#111318', padding: '64px 0' }}>
        <div style={wrap}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-1px' }}>
                QRcode <span style={{ color: '#0a8fa8' }}>Hot Issue</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>QR코드 관련 주요 뉴스 및 시스템 구축 사례</p>
            </div>
          </AnimatedSection>
          <AnimatedSection style={{ transitionDelay: '0.1s' }}>
            <div className="hot-issue-grid" style={{ display: 'grid', gap: 20 }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: '28px',
              }}>
                <span style={{
                  background: 'rgba(10,143,168,0.2)', border: '1px solid rgba(10,143,168,0.3)',
                  color: '#0a8fa8', fontSize: 11, fontWeight: 700,
                  padding: '4px 12px', borderRadius: 99, display: 'inline-block', marginBottom: 14,
                }}>시스템 구축 사례</span>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
                  관세청, 병행수입물품 통관인증 QR코드
                </h3>
                <div style={{ display: 'flex', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
                  <img
                    src="/images/병행수입물품 통관표지 qr.jpg"
                    alt="병행수입물품 통관표지"
                    style={{ width: 130, borderRadius: 10, flexShrink: 0, objectFit: 'cover' }}
                  />
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, margin: 0, flex: 1, minWidth: 160 }}>
                    관세청은 대한민국 세관을 통해 정상적으로 수입된 제품에 한하여,
                    공식적인 세관 통관을 인증하는 QR코드 표지를 발급하고 있습니다.
                    정부는 본 제도를 통하여 병행수입물품에 대한 신뢰를 높임으로써,
                    병행수입 활성화에 따른 물가안정을 목표로 하고 있습니다.
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14 }}>
                  <p style={{ fontSize: 12, color: '#0a8fa8', fontWeight: 600, marginBottom: 10 }}>
                    ※ 본 시스템은 메이크큐알에서 제안 및 구축하였습니다!
                  </p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['QR코드 통관인증', '병행수입 활성화', '위조방지 시스템', '관세청 공식 인증'].map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(10,143,168,0.1)', color: '#0a8fa8', fontSize: 11, fontWeight: 600,
                        padding: '3px 10px', borderRadius: 99, border: '1px solid rgba(10,143,168,0.2)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: '28px',
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
                  News & Press Release
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {NEWS.map(({ media, color, bg, text, url }) => (
                    <a key={media} href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                      <div style={{
                        display: 'flex', gap: 10, alignItems: 'center',
                        padding: '10px 12px', borderRadius: 10,
                        border: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(255,255,255,0.02)', transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(10,143,168,0.4)'; e.currentTarget.style.background = 'rgba(10,143,168,0.06)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                      >
                        <div style={{
                          flexShrink: 0, width: 52, height: 32, borderRadius: 6,
                          background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <span style={{ fontSize: 10, fontWeight: 800, color }}>{media}</span>
                        </div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: 0 }}>{text}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Visual Identity Guide (라이트) ── */}
      <section style={{ background: '#f8fafc', padding: '64px 0' }}>
        <div style={wrap}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0a0a0a', marginBottom: 8, letterSpacing: '-1px' }}>
                QRcode Visual <span style={{ color: '#0a8fa8' }}>Identity Guide</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: 15 }}>브랜드에 맞는 QR코드 디자인 가이드</p>
            </div>
          </AnimatedSection>
          <AnimatedSection style={{ transitionDelay: '0.1s' }}>
            <div className="vi-grid" style={{ display: 'grid', gap: 20 }}>
              <div className="vi-card" style={{
                background: '#fff', border: '1px solid #e8edf5', borderRadius: 16,
                overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px',
              }}>
                <img
                  src="/images/비씨카드.jpg"
                  alt="비씨카드 QR Visual Identity"
                  style={{ width: 130, height: 130, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0a0a0a', marginBottom: 8 }}>
                    비씨카드 QRcode Visual Identity Guide
                  </h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
                    BC카드의 브랜드 아이덴티티를 담은 QR코드 디자인 가이드 제작.
                    기업 브랜드와 QR코드를 결합한 고품질 디자인 서비스를 제공합니다.
                  </p>
                </div>
              </div>

              <div style={{
                background: '#fff', border: '1px solid #e8edf5', borderRadius: 16,
                padding: '20px 24px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0a0a0a', marginBottom: 12 }}>
                  QRcode in News
                </h3>
                <div style={{ borderRadius: 10, overflow: 'hidden' }}>
                  <iframe
                    width="100%" height="180"
                    src="https://www.youtube.com/embed/_15KXOGyoOA"
                    title="QR코드 뉴스" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen style={{ display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Portfolio (다크) ── */}
      <section style={{ background: '#0a0a0a', padding: '64px 0' }} id="portfolio">
        <div style={wrap}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 8, letterSpacing: '-1px' }}>
                QRcode Design <span style={{ color: '#0a8fa8' }}>Portfolio</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>다양한 분야에 적용된 QR코드 디자인</p>
            </div>
          </AnimatedSection>
          <AnimatedSection style={{ transitionDelay: '0.1s' }}>
            <div className="portfolio-grid" style={{ display: 'grid', gap: 12 }}>
              {PORTFOLIO.map(({ name, file }) => (
                <div key={name} style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 14, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(10,143,168,0.5)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,143,168,0.15)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                    <img
                      src={`/images/${file}`} alt={name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '10px 12px', textAlign: 'center' }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.7)', margin: 0 }}>{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 상담 문의 ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a1a1e 0%, #0a2a30 50%, #0a1a1e 100%)',
        padding: '80px 0', position: 'relative', overflow: 'hidden',
      }} id="contact">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(10,143,168,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <AnimatedSection>
          <div style={{ ...wrap, textAlign: 'center', position: 'relative' }}>
            <h2 className="contact-title" style={{
              fontSize: 48, fontWeight: 900, color: '#fff',
              marginBottom: 16, letterSpacing: '-1.5px', lineHeight: 1.2,
            }}>
              QR코드 시스템<br />
              <span style={{
                background: 'linear-gradient(135deg, #0a8fa8, #4dd9f0)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>지금 문의하세요</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 40, lineHeight: 1.8 }}>
              기업 맞춤형 QR 시스템 구축, 디자인 QR 제작 등<br />
              무엇이든 편하게 문의해주세요.
            </p>
            <a href="tel:032-323-0408" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
              color: '#fff', textDecoration: 'none',
              padding: '16px 40px', borderRadius: 14, fontSize: 17, fontWeight: 700,
              boxShadow: '0 8px 32px rgba(10,143,168,0.4)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(10,143,168,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(10,143,168,0.4)' }}
            >📞 032-323-0408</a>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}