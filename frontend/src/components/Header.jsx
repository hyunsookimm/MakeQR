export default function Header() {
  return (
    <header style={{
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #c2e4f0',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38,
            background: 'linear-gradient(135deg, #0a5f7a, #0a8fa8)',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(10,143,168,0.25)',
          }}>
            <span style={{ color: '#fff', fontSize: 11, fontWeight: 800 }}>QR</span>
          </div>
          <span style={{ fontSize: 21, fontWeight: 800, color: '#0a3d52', letterSpacing: '-0.8px' }}>
            make<span style={{ color: '#0a8fa8' }}>QR</span>
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {[
            ['메이크큐알', '#about'],
            ['디자인', '#portfolio'],
            ['시스템', '#system'],
            ['상담문의', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              color: '#4a8fa8', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', padding: '8px 14px', borderRadius: 8,
            }}
              onMouseEnter={e => { e.target.style.color = '#0a5f7a'; e.target.style.background = '#eaf4fb' }}
              onMouseLeave={e => { e.target.style.color = '#4a8fa8'; e.target.style.background = 'transparent' }}
            >{label}</a>
          ))}

          <a href="https://www.brandqr.net" target="_blank" rel="noreferrer" style={{
            marginLeft: 8,
            background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
            color: '#fff', padding: '9px 18px', borderRadius: 10,
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 3px 10px rgba(10,143,168,0.28)',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >QR코드 위조방지 정품인증</a>
        </nav>
      </div>
    </header>
  )
}