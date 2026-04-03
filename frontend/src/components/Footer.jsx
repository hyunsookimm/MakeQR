export default function Footer() {
  return (
    <footer style={{ background: '#1f2937', color: '#9ca3af', padding: '40px 0' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
      }}>

        {/* 왼쪽: 로고 + 정보 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>

          {/* makeQR 로고 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
            <div style={{
              position: 'relative',
              width: 28, height: 28,
              background: '#9ca3af',
              borderRadius: 4,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginRight: 2,
            }}>
              <div style={{
                position: 'absolute',
                bottom: -5, right: 4,
                width: 0, height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '0px solid transparent',
                borderTop: '6px solid #9ca3af',
              }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2, padding: 4 }}>
                {[1,1,1, 1,0,1, 1,1,1].map((v, i) => (
                  <div key={i} style={{
                    width: 4, height: 4,
                    background: v ? '#1f2937' : 'transparent',
                    borderRadius: 0.5,
                  }} />
                ))}
              </div>
            </div>
            <span style={{ fontSize: 20, fontWeight: 800, color: '#9ca3af', letterSpacing: '-0.5px' }}>
              make<span style={{ color: '#4dd9f0' }}>QR</span>
            </span>
            <span style={{ fontSize: 9, color: '#6b7280', alignSelf: 'flex-start', marginTop: 4 }}>™</span>
          </div>

          {/* 회사 정보 */}
          <div>
            <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.8, margin: 0 }}>
              메이크큐알 by (주)이노서티 / 사업자등록번호: 113-86-79184<br />
              TEL: 032-323-0408 / E-mail: danny@innocerti.com<br />
              주소: 경기 부천시 상동로117번길 37, 진성프라자 601호<br />
              Copyright © 2010~2014 makeQR by Innocerti, Inc. All Rights Reserved.<br />
              QRcode 명칭은 일본 덴소웨이브의 등록상표입니다.
            </p>
          </div>
        </div>

        {/* 오른쪽: INNOCERTI 로고 */}
        <img
          src="/images/INNOCERTI.png"
          alt="INNOCERTI"
          style={{ height: 40, objectFit: 'contain', opacity: 0.8 }}
        />

      </div>
    </footer>
  )
}