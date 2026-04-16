import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { label: '메이크큐알 소개', path: '/about' },
  { label: '사업분야', path: '/about/business' },
  { label: '오시는길', path: '/about/location' },
  { label: '상담문의', path: '/about/contact' },
]

export default function Location() {
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
              <span style={{ color: '#0a8fa8' }}>오시는길</span>
            </div>
          </div>
        </div>
        {/* 본문 */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* 타이틀 */}
          <div className="card-anim c0" style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Office Location</h1>
            <p style={{ fontSize: 16, color: '#374151', fontWeight: 400 }}>We have One-Stop Total Solution for QRcode!</p>
          </div>

          {/* 지도 */}
          <div className="card-anim c1" style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb', marginBottom: 24 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25320.0912203085!2d126.71530008316041!3d37.507649215664735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7d12f6102e57%3A0x39f15056ec640925!2z7KeE7ISx7ZSE65287J6Q!5e0!3m2!1sko!2skr!4v1776287652525!5m2!1sko!2skr"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="office location"
            />
          </div>

          {/* 주소 정보 */}
          <div className="card-anim c2" style={{ fontSize: 14, color: '#4b5563', lineHeight: 2 }}>
            <p>주소: 경기 부천시 상동로117번길 37, 진성프라자 601호 / 7호선 상동역 6번 출구</p>
            <p>TEL: 032-323-0408 / E-mail: danny@innocerti.com</p>
          </div>

        </div>
      </div>
    </>
  )
}