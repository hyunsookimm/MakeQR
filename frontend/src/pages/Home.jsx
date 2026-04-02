import QrGenerator from '../components/QrGenerator'

const CLIENTS = ['관세청', '삼성카드', '우정사업본부', '동아제약', '국립농산물품질관리원']
const PORTFOLIO = [
  'QUA', 'CJ 오쇼핑', 'GSshop', '삼성생명',
  'NIKE', 'LG 3D sound', '한국타이어', 'LG optimus',
  '팬텍', '미스터피자', '라네즈', '아시아나 OZ',
  'Daegu2011', 'KORID', 'KEPCO', 'MND',
  '고용노동부', '한국환경공단', '한국교직원공제회', '한국서부발전',
]

const wrap = { maxWidth: 1000, margin: '0 auto', padding: '0 24px' }

export default function Home() {
  return (
    <div style={{ background: '#f8f9fc', minHeight: '100vh' }}>

      {/* 히어로 */}
      <section style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '80px 0' }}>
        <div style={{ ...wrap, textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: '#eff6ff', color: '#2563eb',
            fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 999, marginBottom: 16
          }}>무료 QR코드 생성 서비스</span>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: '#111827', marginBottom: 16, lineHeight: 1.2 }}>
            QR코드, 더 쉽고 빠르게
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 17, marginBottom: 48, lineHeight: 1.7 }}>
            URL을 입력하면 즉시 QR코드를 생성하고 다운로드할 수 있습니다.<br />
            입력하신 정보는 저장되지 않습니다.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <QrGenerator />
          </div>
        </div>
      </section>

      {/* 고객사 */}
      <section style={{ background: '#fff', padding: '64px 0', marginTop: 8 }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
              QRcode System Enterprise
            </h2>
            <p style={{ color: '#9ca3af', fontSize: 14 }}>기업 DB 연동 맞춤형 QR 시스템 구축</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {CLIENTS.map((name) => (
              <div key={name} style={{
                background: '#f9fafb', border: '1px solid #f0f0f0', borderRadius: 12,
                padding: '20px 12px', textAlign: 'center'
              }}>
                <div style={{
                  width: 40, height: 40, background: '#dbeafe', borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px', color: '#2563eb', fontSize: 11, fontWeight: 700
                }}>QR</div>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Issue */}
      <section style={{ background: '#f8f9fc', padding: '64px 0' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>QRcode Hot Issue</h2>
          <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 32 }}>QR코드 관련 주요 뉴스 및 시스템 구축 사례</p>
          <div style={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: 16, padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
              <div style={{
                width: 64, height: 64, background: '#2563eb', borderRadius: 12, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 11, fontWeight: 700, textAlign: 'center', lineHeight: 1.4
              }}>관세청<br/>인증</div>
              <div>
                <span style={{
                  fontSize: 12, fontWeight: 600, color: '#2563eb',
                  background: '#eff6ff', padding: '3px 10px', borderRadius: 999
                }}>시스템 구축 사례</span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', margin: '10px 0 8px' }}>
                  관세청, 병행수입물품 통관인증 QR코드
                </h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>
                  대한민국 세관을 통해 정상적으로 수입된 제품에 한하여 공식적인 세관 통관을 인증하는
                  QR코드 표지를 발급하고 있습니다. 본 시스템은 makeQR에서 제안 및 구축하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity */}
      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
            QRcode Visual Identity Guide
          </h2>
          <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 32 }}>브랜드 아이덴티티가 담긴 맞춤형 QR코드 디자인</p>
          <div style={{
            background: 'linear-gradient(135deg, #2563eb, #60a5fa)',
            borderRadius: 16, padding: 40, color: '#fff'
          }}>
            <p style={{ fontSize: 13, color: '#bfdbfe', marginBottom: 8 }}>대표 사례</p>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              비씨카드 QRcode Visual Identity Guide
            </h3>
            <p style={{ fontSize: 14, color: '#bfdbfe', lineHeight: 1.7 }}>
              BC카드의 브랜드 아이덴티티를 담은 QR코드 디자인 가이드 제작.<br />
              기업 브랜드와 QR코드를 결합한 고품질 디자인 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 포트폴리오 */}
      <section style={{ background: '#f8f9fc', padding: '64px 0' }}>
        <div style={wrap}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827', marginBottom: 8 }}>
            QRcode Design Portfolio
          </h2>
          <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 32 }}>국내 최다 · 최고 수준의 QR코드 디자인 레퍼런스</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {PORTFOLIO.map((name) => (
              <div key={name} style={{
                background: '#fff', border: '1px solid #f0f0f0', borderRadius: 12,
                padding: '20px 16px', textAlign: 'center', cursor: 'pointer'
              }}>
                <div style={{
                  width: 48, height: 48, background: '#f3f4f6', borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px', color: '#9ca3af', fontSize: 11, fontWeight: 700
                }}>QR</div>
                <p style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 문의 */}
      <section style={{ background: '#fff', padding: '80px 0' }} id="contact">
        <div style={{ ...wrap, textAlign: 'center' }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, color: '#111827', marginBottom: 16 }}>
            QR코드 시스템 문의
          </h2>
          <p style={{ color: '#9ca3af', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
            기업 맞춤형 QR 시스템 구축, 디자인 QR 제작 등<br />
            무엇이든 편하게 문의해주세요.
          </p>
          <a href="tel:032-323-0408" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#2563eb', color: '#fff', textDecoration: 'none',
            padding: '16px 40px', borderRadius: 16, fontSize: 17, fontWeight: 600
          }}>
            📞 032-323-0408
          </a>
        </div>
      </section>

    </div>
  )
}