import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { label: '메이크큐알 소개', path: '/about' },
  { label: '사업분야', path: '/about/business' },
  { label: '오시는길', path: '/about/location' },
  { label: '상담문의', path: '/about/contact' },
]

export default function About() {
  const location = useLocation()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
        .about-wrap * { font-family: 'Noto Sans KR', sans-serif; }
        .about-sub-tab:hover { color: #0a8fa8 !important; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-anim { opacity: 0; animation: fadeSlideUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .c0 { animation-delay: 0.05s; }
        .c1 { animation-delay: 0.15s; }
        .c2 { animation-delay: 0.25s; }
        .c3 { animation-delay: 0.35s; }
        .c4 { animation-delay: 0.45s; }
      `}</style>

      <div className="about-wrap" style={{ background: '#fff' }}>

        {/* 서브 탭 네비 */}
        <div style={{ borderBottom: '1px solid #e5e7eb', background: '#fff', position: 'sticky', top: 64, zIndex: 50 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              {TABS.map(({ label, path }) => {
                const active = location.pathname === path
                return (
                  <Link key={path} to={path} className="about-sub-tab" style={{
                    padding: '14px 20px', fontSize: 14, fontWeight: active ? 600 : 400,
                    color: active ? '#0a8fa8' : '#4b5563',
                    borderBottom: active ? '2px solid #0a8fa8' : '2px solid transparent',
                    textDecoration: 'none', transition: 'color 0.15s', whiteSpace: 'nowrap',
                  }}>{label}</Link>
                )
              })}
            </div>
            <div style={{ fontSize: 12, color: '#9ca3af', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>HOME</Link>
              <span>›</span>
              <span>ABOUT</span>
              <span>›</span>
              <span style={{ color: '#0a8fa8' }}>메이크큐알 소개</span>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* 타이틀 */}
          <div className="card-anim c0" style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 8 }}>About makeQR</h1>
            <p style={{ fontSize: 16, color: '#374151', fontWeight: 400 }}>We have One-Stop Total Solution for QRcode!</p>
          </div>

          {/* 소개 텍스트 */}
          <div className="card-anim c1">
            <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.9, marginBottom: 48 }}>
              All about QRcode! 메이크큐알(makeQR)은 QR코드 무료생성 서비스를 제공하며, QR코드 시스템 개발 및 솔루션 그리고 QR코드 디자인 제작에 이르기 까지,
              QR코드에 관련한 모든 서비스를 제공하는 <strong style={{ color: '#111827' }}>대한민국 최고의 QR코드 전문 기업</strong>입니다.
            </p>
          </div>

          {/* 브랜드 이미지 */}
          <div className="card-anim c2" style={{ marginBottom: 48 }}>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
              <img
                src="/images/clogo.gif"
                alt="makeQR & QRMS"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          {/* 본문 단락 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card-anim c3">
              <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 2 }}>
                메이크큐알은 QR코드 초기 시장부터 서비스를 시작하였으며, 관세청 [병행수입물품 통관인증 시스템], 삼성카드 [QR코드 이력관리 시스템],
                우정사업본부 [QR & 바코드 생성관리 시스템], 국립농산물품질관리원 [농식품 인증정보 시스템] 등 다 수 기관 및 기업들에 최적화한 맞춤형 QR코드
                시스템을 구축함으로써, 앞선 기술력과 안정된 노하우를 인정받고 있으며, 그 외 다 수의 지방자치단체에서는 본 사에서 개발한 QR코드 시스템
                도입을 통하여, 중량체 쓰레기봉투의 정품인증 서비스를 제공하고 있습니다.
              </p>
            </div>
            <div className="card-anim c4">
              <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 2 }}>
                또한 국내 상당 수 기업 및 기관들의 QR코드 디자인을 제작함으로써, QR코드 디자인 분야에서는 타 사와는 비교 할 수 없는 정도의 높은 퀄리티
                및 결과물을 보유하고 있으며, 메이크큐알만의 오랜 경험과 노하우를 바탕으로 개발한 <strong style={{ color: '#111827' }}>QRMS (QRcode Management System)</strong> 솔루션을 통하여,
                저렴한 비용으로도 QR코드 시스템의 도입이 가능합니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}