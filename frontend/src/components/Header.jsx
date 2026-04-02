export default function Header() {
  return (
    <header style={{
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 32px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37,99,235,0.3)'
          }}>
            <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>QR</span>
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#111827', letterSpacing: '-0.5px' }}>
            make<span style={{ color: '#2563eb' }}>QR</span>
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {[
            ['메이크큐알', '#about'],
            ['디자인', '#portfolio'],
            ['시스템', '#system'],
            ['상담문의', '#contact'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              color: '#6b7280', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', padding: '8px 16px', borderRadius: 8,
              transition: 'all 0.15s'
            }}
              onMouseEnter={e => {
                e.target.style.color = '#2563eb'
                e.target.style.background = '#eff6ff'
              }}
              onMouseLeave={e => {
                e.target.style.color = '#6b7280'
                e.target.style.background = 'transparent'
              }}
            >{label}</a>
          ))}
          <a href="https://www.brandqr.net" target="_blank" rel="noreferrer" style={{
            background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
            color: '#fff', padding: '9px 18px', borderRadius: 10,
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(220,38,38,0.3)', marginLeft: 8
          }}>QR코드 위조방지 정품인증</a>
        </nav>
      </div>
    </header>
  )
}