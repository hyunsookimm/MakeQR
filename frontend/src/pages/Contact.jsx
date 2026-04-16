import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { label: '메이크큐알 소개', path: '/about' },
  { label: '사업분야', path: '/about/business' },
  { label: '오시는길', path: '/about/location' },
  { label: '상담문의', path: '/about/contact' },
]

export default function Contact() {
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
        .c1 { animation-delay: 0.1s; }
        .c2 { animation-delay: 0.22s; }
        .c3 { animation-delay: 0.34s; }

        .contact-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-top: 3px solid #0a8fa8;
          border-radius: 16px;
          padding: 36px 40px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .contact-card:hover {
          box-shadow: 0 8px 32px rgba(10,143,168,0.12);
          transform: translateY(-3px);
        }
        .icon-circle {
          width: 52px; height: 52px; border-radius: 50%;
          background: #e0f4f7;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .contact-card:hover .icon-circle { background: #0a8fa8; }
        .contact-card:hover .icon-fill { fill: #fff !important; }

        .sub-label {
          font-size: 11px; color: #9ca3af; margin: 0 0 4px;
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px;
        }
        .contact-footer-text {
          font-size: 13px; color: #9ca3af; margin: 0;
          padding-top: 16px; border-top: 1px solid #f3f4f6;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
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
              <span style={{ color: '#0a8fa8' }}>상담문의</span>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* 타이틀 */}
          <div className="card-anim c0" style={{ marginBottom: 40 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Online Inquiry</h1>
            <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>We have One-Stop Total Solution for QRcode!</p>
          </div>

          {/* 전화 + 이메일 카드 */}
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>

            {/* 전화 카드 */}
            <div className="contact-card card-anim c1">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path className="icon-fill" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#0a8fa8"/>
                  </svg>
                </div>
                <div>
                  <p className="sub-label">전화 문의</p>
                  <a href="tel:032-323-0408" style={{ fontSize: 20, fontWeight: 700, color: '#111827', textDecoration: 'none', display: 'block' }}>
                    032-323-0408
                  </a>
                </div>
              </div>
              <p className="contact-footer-text">평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)</p>
            </div>

            {/* 이메일 카드 */}
            <div className="contact-card card-anim c2">
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div className="icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path className="icon-fill" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0a8fa8"/>
                  </svg>
                </div>
                <div>
                  <p className="sub-label">이메일 문의</p>
                  <a href="mailto:danny@innocerti.com" style={{ fontSize: 20, fontWeight: 700, color: '#111827', textDecoration: 'none', display: 'block' }}>
                    danny@innocerti.com
                  </a>
                </div>
              </div>
              <p className="contact-footer-text">이메일 상담시 업체명과 연락처를 기입해 주시길 바랍니다.</p>
            </div>

          </div>

          {/* 주소 카드 */}
          <div className="contact-card card-anim c3" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path className="icon-fill" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#0a8fa8"/>
              </svg>
            </div>
            <div>
              <p className="sub-label">주소</p>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: '0 0 4px' }}>
                경기 부천시 상동로117번길 37, 진성프라자 601호
              </p>
              <p style={{ fontSize: 13, color: '#9ca3af', margin: 0 }}>7호선 상동역 6번 출구</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}