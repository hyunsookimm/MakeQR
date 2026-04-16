import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { label: '메이크큐알 소개', path: '/about' },
  { label: '사업분야', path: '/about/business' },
  { label: '오시는길', path: '/about/location' },
  { label: '상담문의', path: '/about/contact' },
]

export default function BusinessArea() {
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
              <span style={{ color: '#0a8fa8' }}>사업분야</span>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* 타이틀 */}
          <div className="card-anim c0" style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Business Area</h1>
            <p style={{ fontSize: 16, color: '#374151', fontWeight: 400 }}>We have One-Stop Total Solution for QRcode!</p>
          </div>

          {/* 소개 텍스트 */}
          <div className="card-anim c1">
            <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.9, marginBottom: 56 }}>
              메이크큐알(makeQR)은 QR코드 전문 기업으로서, QR코드 디자인에서 부터 시스템 개발 그리고 솔루션 사업 등 QR코드에 관련한 모든 사업을 추진하고 있습니다.<br />
              메이크큐알(makeQR)만의 높은 기술력과 오랜 노하우를 바탕으로 귀사에 최적화된 QR코드 활용방안과 해결책을 제시해 드리겠습니다!
            </p>
          </div>

          {/* 메인 이미지 + 설명 레이아웃 */}
          <div className="card-anim c2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}>

            {/* 왼쪽: System */}
            <div style={{ textAlign: 'right', minWidth: 160 }}>
              <p style={{ fontSize: 22, fontWeight: 700, color: '#0a8fa8', marginBottom: 6 }}>System</p>
              <p style={{ fontSize: 13, color: '#9ca3af' }}>Stable, Optimize, Trustable</p>
            </div>

            {/* 가운데 이미지 */}
            <div className="card-anim c3" style={{ flexShrink: 0 }}>
              <img
                src="/images/cimg.jpg"
                alt="Business Area"
                style={{ width: 440, maxWidth: '100%', display: 'block' }}
              />
            </div>

            {/* 오른쪽: Design + Solution */}
            <div style={{ minWidth: 160 }}>
              <div style={{ marginBottom: 40 }}>
                <p style={{ fontSize: 22, fontWeight: 700, color: '#e53935', marginBottom: 6 }}>Design</p>
                <p style={{ fontSize: 13, color: '#9ca3af' }}>Creative, Idea, Quality, Visual</p>
              </div>
              <div>
                <p style={{ fontSize: 22, fontWeight: 700, color: '#43a047', marginBottom: 6 }}>Solution</p>
                <p style={{ fontSize: 13, color: '#9ca3af' }}>Simple, Easy, Comportable</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}