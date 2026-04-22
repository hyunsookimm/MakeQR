import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        .header-nav { display: flex; align-items: center; gap: 4px; }
        .header-logo span { font-size: 21px; }
        .nav-link {
          color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 500;
          text-decoration: none; padding: 8px 14px; border-radius: 8px;
          transition: all 0.15s;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.08); }
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .header-logo span { font-size: 18px; }
        }
      `}</style>

      <header style={{
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link to="/" className="header-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38,
              background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(10,143,168,0.4)',
              flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontSize: 11, fontWeight: 800 }}>QR</span>
            </div>
            <span style={{ fontWeight: 800, color: '#fff', letterSpacing: '-0.8px' }}>
              make<span style={{ color: '#0a8fa8' }}>QR</span>
            </span>
          </Link>

          <nav className="header-nav">
            <Link to="/about" className="nav-link">메이크큐알</Link>
            <Link to="/design/brand" className="nav-link">디자인</Link>
            <a className="nav-link" style={{ cursor: 'pointer' }} onClick={e => {
              e.preventDefault()
              navigate('/')
              setTimeout(() => {
                const el = document.querySelector('#system')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            }}>시스템</a>
            <Link to="/about/contact" className="nav-link">상담문의</Link>

            <a href="https://www.brandqr.net" target="_blank" rel="noreferrer" style={{
              marginLeft: 8,
              background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
              color: '#fff', padding: '9px 18px', borderRadius: 10,
              fontSize: 13, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 3px 12px rgba(10,143,168,0.4)',
              transition: 'all 0.15s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >QR코드 위조방지 정품인증</a>
          </nav>
        </div>
      </header>
    </>
  )
}