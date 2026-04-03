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
  { media: '서울경제', color: '#c0392b', bg: '#fdf0f0', text: '관세청, 전자상거래 전용 수입통관 플랫폼 구축…QR코드 본인인증 도입', url: 'https://sedaily.com/NewsView/2D41JYT2E9' },
  { media: '아주경제', color: '#1a5276', bg: '#eaf4fb', text: 'SSG닷컴, 병행수입 명품 협력사 QR코드 100% 도입…취소·반품률 20% 감소', url: 'https://www.ajunews.com/view/20140629092002314' },
  { media: '보안뉴스', color: '#1e8449', bg: '#eafaf1', text: 'QR코드 사용 급증…큐싱·QRL재킹 등 보안 위협 주의 필요', url: 'http://www.boannews.com/media/view.asp?idx=81734' },
  { media: 'QR TIGER', color: '#0a6b80', bg: '#eaf4fb', text: '2025년 QR코드 스캔율 19% 증가 전망…모바일 결제·인증 시장 확대', url: 'https://www.qrcode-tiger.com/ko/qr-code-forecast' },
  { media: '데일리시큐', color: '#6c3483', bg: '#f5eef8', text: '2025 대한민국 사이버보안 결산…QR코드 피싱 공격 급증', url: 'https://www.dailysecu.com/news/articleView.html?idxno=203952' },
]

const wrap = { maxWidth: 1100, margin: '0 auto', padding: '0 32px' }

export default function Home() {
  return (
    <div style={{ background: '#eaf4fb', minHeight: '100vh' }}>

      {/* 히어로 */}
      <section style={{
        background: 'linear-gradient(160deg, #ffffff 50%, #d4f0e8 100%)',
        borderBottom: '1px solid #c2e4f0',
        padding: '60px 0 48px',
      }}>
        <div style={{ ...wrap, textAlign: 'center' }}>
          <h1 style={{
            fontSize: 52, fontWeight: 800, color: '#0a3d52',
            marginBottom: 14, lineHeight: 1.18, letterSpacing: '-1.5px',
          }}>
            QR코드, 더 쉽고 빠르게
          </h1>
          <p style={{ color: '#4a8fa8', fontSize: 17, marginBottom: 40, lineHeight: 1.75 }}>
            간편한 QR 코드 생성부터 디자인 커스터마이징까지, 모든 것을 한 곳에서
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <QrGenerator />
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section style={{ background: '#ffffff', padding: '48px 0' }} id="system">
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a3d52', marginBottom: 8, letterSpacing: '-0.8px' }}>
              QRcode System Enterprise
            </h2>
            <p style={{ color: '#4a8fa8', fontSize: 14 }}>기업을 위한 전문 QR코드 시스템</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {CLIENTS.map(({ name, desc, subDesc, logo }) => (
              <div key={name} style={{
                background: '#eaf4fb', border: '1px solid #c2e4f0',
                borderRadius: 14, padding: '20px 12px', textAlign: 'center', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,143,168,0.12)'; e.currentTarget.style.borderColor = '#0a8fa8' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#c2e4f0' }}
              >
                <div style={{ height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                  <img src={logo} alt={name} style={{ maxHeight: 48, maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <p style={{ fontSize: 11, color: '#4a8fa8', lineHeight: 1.5 }}>{desc}</p>
                <p style={{ fontSize: 10, color: '#7ab8cc', marginTop: 3 }}>{subDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Issue */}
      <section style={{ background: '#eaf4fb', padding: '48px 0' }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a3d52', marginBottom: 8, letterSpacing: '-0.8px' }}>
              QRcode Hot Issue
            </h2>
            <p style={{ color: '#4a8fa8', fontSize: 14 }}>QR코드 관련 주요 뉴스 및 시스템 구축 사례</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

            <div style={{
              background: '#fff', border: '1px solid #c2e4f0', borderRadius: 16,
              padding: '24px', boxShadow: '0 2px 16px rgba(10,95,122,0.06)',
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
                color: '#fff', fontSize: 11, fontWeight: 700,
                padding: '4px 10px', borderRadius: 8, display: 'inline-block', marginBottom: 12,
              }}>시스템 구축 사례</span>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0a3d52', marginBottom: 12, letterSpacing: '-0.3px' }}>
                관세청, 병행수입물품 통관인증 QR코드
              </h3>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <img
                  src="/images/병행수입물품 통관표지 qr.jpg"
                  alt="병행수입물품 통관표지"
                  style={{ width: 130, borderRadius: 10, flexShrink: 0, objectFit: 'cover' }}
                />
                <p style={{ fontSize: 13, color: '#4a8fa8', lineHeight: 1.8, margin: 0 }}>
                  관세청은 대한민국 세관을 통해 정상적으로 수입된 제품에 한하여,
                  공식적인 세관 통관을 인증하는 QR코드 표지를 발급하고 있습니다.
                  정부는 본 제도를 통하여 병행수입물품에 대한 신뢰를 높임으로써,
                  병행수입 활성화에 따른 물가안정을 목표로 하고 있습니다.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e8edf5', paddingTop: 12 }}>
                <p style={{ fontSize: 12, color: '#0a8fa8', fontWeight: 600, marginBottom: 10 }}>
                  ※ 본 시스템은 메이크큐알에서 제안 및 구축하였습니다!
                </p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['QR코드 통관인증', '병행수입 활성화', '위조방지 시스템', '관세청 공식 인증'].map(tag => (
                    <span key={tag} style={{
                      background: '#eaf4fb', color: '#0a8fa8', fontSize: 11, fontWeight: 600,
                      padding: '3px 8px', borderRadius: 99, border: '1px solid #c2e4f0',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              background: '#fff', border: '1px solid #c2e4f0', borderRadius: 16,
              padding: '24px', boxShadow: '0 2px 16px rgba(10,95,122,0.06)',
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: '#0a3d52', marginBottom: 16, letterSpacing: '-0.3px' }}>
                News & Press Release
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {NEWS.map(({ media, color, bg, text, url }) => (
                  <a key={media} href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <div style={{
                      display: 'flex', gap: 10, alignItems: 'center',
                      padding: '8px 10px', borderRadius: 10, border: '1px solid #e8edf5',
                      transition: 'all 0.15s', background: '#fff',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a8fa8'; e.currentTarget.style.background = '#f7fcfd' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8edf5'; e.currentTarget.style.background = '#fff' }}
                    >
                      <div style={{
                        flexShrink: 0, width: 52, height: 32, borderRadius: 6,
                        background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: 10, fontWeight: 800, color }}>{media}</span>
                      </div>
                      <p style={{ fontSize: 12, color: '#0a3d52', lineHeight: 1.5, margin: 0 }}>{text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Identity Guide */}
      <section style={{ background: '#ffffff', padding: '48px 0' }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a3d52', marginBottom: 8, letterSpacing: '-0.8px' }}>
              QRcode Visual Identity Guide
            </h2>
            <p style={{ color: '#4a8fa8', fontSize: 14 }}>브랜드에 맞는 QR코드 디자인 가이드</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

            <div style={{
              background: '#fff', border: '1px solid #c2e4f0', borderRadius: 16,
              overflow: 'hidden', boxShadow: '0 2px 16px rgba(10,95,122,0.06)',
              display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px',
            }}>
              <img
                src="/images/비씨카드.jpg"
                alt="비씨카드 QR Visual Identity"
                style={{ width: 130, height: 130, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
              />
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0a3d52', marginBottom: 8 }}>
                  비씨카드 QRcode Visual Identity Guide
                </h3>
                <p style={{ fontSize: 13, color: '#4a8fa8', lineHeight: 1.7, margin: 0 }}>
                  BC카드의 브랜드 아이덴티티를 담은 QR코드 디자인 가이드 제작.
                  기업 브랜드와 QR코드를 결합한 고품질 디자인 서비스를 제공합니다.
                </p>
              </div>
            </div>

            <div style={{
              background: '#fff', border: '1px solid #c2e4f0', borderRadius: 16,
              padding: '20px 24px', boxShadow: '0 2px 16px rgba(10,95,122,0.06)',
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0a3d52', marginBottom: 12 }}>
                QRcode in News
              </h3>
              <div style={{ borderRadius: 10, overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height="180"
                  src="https://www.youtube.com/embed/_15KXOGyoOA"
                  title="QR코드 뉴스"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: 'block' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ background: '#eaf4fb', padding: '48px 0' }} id="portfolio">
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a3d52', marginBottom: 8, letterSpacing: '-0.8px' }}>
              QRcode Design Portfolio
            </h2>
            <p style={{ color: '#4a8fa8', fontSize: 14 }}>다양한 분야에 적용된 QR코드 디자인</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {PORTFOLIO.map(({ name, file }) => (
              <div key={name} style={{
                background: '#fff', border: '1px solid #c2e4f0', borderRadius: 14,
                overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,143,168,0.12)'; e.currentTarget.style.borderColor = '#0a8fa8' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#c2e4f0' }}
              >
                <div style={{ background: '#f7f9fc', aspectRatio: '1', overflow: 'hidden' }}>
                  <img
                    src={`/images/${file}`}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#0a3d52', margin: 0 }}>{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 문의 */}
      <section style={{ background: '#ffffff', padding: '56px 0' }} id="contact">
        <div style={{ ...wrap, textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0a3d52', marginBottom: 12, letterSpacing: '-0.8px' }}>
            QR코드 시스템 문의
          </h2>
          <p style={{ color: '#4a8fa8', fontSize: 15, marginBottom: 28, lineHeight: 1.8 }}>
            기업 맞춤형 QR 시스템 구축, 디자인 QR 제작 등<br />
            무엇이든 편하게 문의해주세요.
          </p>
          <a href="tel:032-323-0408" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
            color: '#fff', textDecoration: 'none',
            padding: '14px 36px', borderRadius: 14, fontSize: 16, fontWeight: 700,
            boxShadow: '0 6px 20px rgba(10,143,168,0.28)',
          }}>📞 032-323-0408</a>
        </div>
      </section>

    </div>
  )
}