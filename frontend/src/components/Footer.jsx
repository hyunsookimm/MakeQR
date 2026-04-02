export default function Footer() {
  return (
    <footer style={{ background: '#1f2937', color: '#9ca3af', padding: '48px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{
            width: 32, height: 32, background: '#2563eb', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>QR</span>
          </div>
          <span style={{ color: '#fff', fontSize: 16, fontWeight: 700 }}>makeQR</span>
        </div>
        <p style={{ fontSize: 14, marginBottom: 8 }}>
          makeQR by (주)이노서티 | 사업자등록번호: 113-86-79184
        </p>
        <p style={{ fontSize: 14, marginBottom: 24 }}>
          TEL: 032-323-0408
        </p>
        <div style={{ borderTop: '1px solid #374151', paddingTop: 24 }}>
          <p style={{ fontSize: 12, color: '#6b7280' }}>
            Copyright © 2024 makeQR by Innocerti, Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}