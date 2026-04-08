import { useState } from 'react'
import { generateQr } from '../api/qrApi'

const SIZES = [80, 120, 160, 200, 240, 300]
const TABS = [
  { key: '링크', label: 'URL' },
  { key: '명함', label: '명함' },
  { key: '문구', label: '문구' },
  { key: '이메일', label: '이메일' },
  { key: '전화', label: '전화' },
  { key: '문자', label: '문자' },
]

export default function QrGenerator() {
  const [tab, setTab] = useState('링크')
  const [size, setSize] = useState(200)
  const [qrImage, setQrImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fgColor, setFgColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#FFFFFF')

  const [url, setUrl] = useState('')
  const [card, setCard] = useState({ name: '', company: '', phone: '', email: '', address: '', website: '', memo: '' })
  const [text, setText] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [tel, setTel] = useState('')
  const [sms, setSms] = useState({ phone: '', message: '' })

  const getQrData = () => {
    switch (tab) {
      case '링크': return url
      case '명함': return `BEGIN:VCARD\nVERSION:3.0\nFN:${card.name}\nORG:${card.company}\nTEL:${card.phone}\nEMAIL:${card.email}\nADR:${card.address}\nURL:${card.website}\nNOTE:${card.memo}\nEND:VCARD`
      case '문구': return text
      case '이메일': return `mailto:${emailVal}`
      case '전화': return `tel:${tel}`
      case '문자': return `smsto:${sms.phone}:${sms.message}`
      default: return ''
    }
  }

  const validateInput = () => {
    switch (tab) {
      case '링크': return url.trim() !== ''
      case '명함': return card.name.trim() !== '' || card.phone.trim() !== ''
      case '문구': return text.trim() !== ''
      case '이메일': return emailVal.trim() !== ''
      case '전화': return tel.trim() !== ''
      case '문자': return sms.phone.trim() !== ''
      default: return false
    }
  }

  const handleGenerate = async () => {
    if (!validateInput()) { setError('내용을 입력해주세요.'); return }
    const data = getQrData()
    setError(''); setLoading(true)
    try {
      const blob = await generateQr(data.trim(), size, fgColor, bgColor)
      setQrImage(URL.createObjectURL(blob))
    } catch { setError('QR 생성 중 오류가 발생했습니다.') }
    finally { setLoading(false) }
  }

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = qrImage; a.download = 'qrcode.png'; a.click()
  }

  const inputStyle = {
    width: '100%', border: '1.5px solid #c2e4f0', borderRadius: 8,
    padding: '8px 10px', fontSize: 13, outline: 'none',
    color: '#0a3d52', background: '#fff', boxSizing: 'border-box',
  }
  const labelStyle = { display: 'block', fontSize: 11, fontWeight: 600, color: '#4a8fa8', marginBottom: 4 }

  const renderForm = () => {
    const tagMap = { '링크': 'URL', '명함': '명함', '문구': '문구', '이메일': '이메일', '전화': '전화', '문자': '문자' }
    const descMap = {
      '링크': '웹사이트 주소 또는 텍스트',
      '명함': '연락처 정보를 입력하세요',
      '문구': '텍스트를 입력하세요',
      '이메일': '이메일 주소를 입력하세요',
      '전화': '전화번호를 입력하세요',
      '문자': '문자 정보를 입력하세요',
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{
            background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
            color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '4px 10px', borderRadius: 6, flexShrink: 0,
          }}>{tagMap[tab]}</span>
          <span style={{ fontSize: 12, color: '#4a8fa8' }}>{descMap[tab]}</span>
        </div>

        {tab === '링크' && (
          <input style={inputStyle} placeholder="https://example.com" value={url}
            onChange={e => setUrl(e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8fa8'}
            onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
        )}
        {tab === '명함' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 10px' }}>
            {[['이름','name','홍길동'],['회사명','company','(주)이노서티'],
              ['연락처','phone','010-0000-0000'],['이메일','email','example@email.com'],
              ['홈페이지','website','https://...'],['주소','address','서울시']
            ].map(([label, key, ph]) => (
              <div key={key}>
                <label style={labelStyle}>{label}</label>
                <input style={inputStyle} placeholder={ph} value={card[key]}
                  onChange={e => setCard({ ...card, [key]: e.target.value })}
                  onFocus={e => e.target.style.borderColor = '#0a8fa8'}
                  onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
              </div>
            ))}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>메모</label>
              <input style={inputStyle} placeholder="메모를 입력하세요" value={card.memo}
                onChange={e => setCard({ ...card, memo: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#0a8fa8'}
                onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
            </div>
          </div>
        )}
        {tab === '문구' && (
          <textarea style={{ ...inputStyle, height: 90, resize: 'none' }} value={text}
            onChange={e => setText(e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8fa8'}
            onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
        )}
        {tab === '이메일' && (
          <input style={inputStyle} placeholder="example@email.com" value={emailVal}
            onChange={e => setEmailVal(e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8fa8'}
            onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
        )}
        {tab === '전화' && (
          <input style={inputStyle} placeholder="010-0000-0000" value={tel}
            onChange={e => setTel(e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8fa8'}
            onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
        )}
        {tab === '문자' && (
          <div>
            <label style={labelStyle}>전화번호</label>
            <input style={{ ...inputStyle, marginBottom: 8 }} placeholder="010-0000-0000" value={sms.phone}
              onChange={e => setSms({ ...sms, phone: e.target.value })}
              onFocus={e => e.target.style.borderColor = '#0a8fa8'}
              onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
            <label style={labelStyle}>전송내용</label>
            <textarea style={{ ...inputStyle, height: 70, resize: 'none' }} value={sms.message}
              onChange={e => setSms({ ...sms, message: e.target.value })}
              onFocus={e => e.target.style.borderColor = '#0a8fa8'}
              onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{
      background: '#fff', borderRadius: 20, border: '1px solid #c2e4f0',
      padding: '24px', width: '100%', maxWidth: 860,
      boxShadow: '0 4px 32px rgba(10,95,122,0.08)',
      display: 'flex', gap: 24, alignItems: 'stretch',
    }}>

      {/* 왼쪽: 입력 영역 */}
      <div style={{ width: 260, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>

        {/* 탭 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {TABS.map(({ key, label }) => (
            <button key={key} onClick={() => { setTab(key); setQrImage(null); setError('') }} style={{
              padding: '5px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
              border: `1.5px solid ${tab === key ? '#0a8fa8' : '#c2e4f0'}`,
              background: tab === key ? 'linear-gradient(135deg, #0a8fa8, #0a6b80)' : '#fff',
              color: tab === key ? '#fff' : '#4a8fa8',
              fontWeight: tab === key ? 700 : 500,
            }}>{label}</button>
          ))}
        </div>

        {/* 폼 */}
        <div style={{ minHeight: 200, marginBottom: 16 }}>
          {renderForm()}
        </div>

        {/* 사이즈 */}
        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#4a8fa8', marginBottom: 8 }}>SIZE</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {SIZES.map(s => (
              <button key={s} onClick={() => setSize(s)} style={{
                padding: '5px 10px', borderRadius: 7, fontSize: 11, fontWeight: 600, cursor: 'pointer',
                border: `1.5px solid ${size === s ? '#0a8fa8' : '#c2e4f0'}`,
                background: size === s ? '#eaf4fb' : '#fff',
                color: size === s ? '#0a5f7a' : '#4a8fa8',
              }}>{s}px</button>
            ))}
          </div>
        </div>

        {/* 색상 */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#4a8fa8', marginBottom: 8 }}>COLOR</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>전경색</label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                border: '1.5px solid #c2e4f0', borderRadius: 8,
                padding: '6px 10px', background: '#fff',
              }}>
                <input type="color" value={fgColor} onChange={e => setFgColor(e.target.value)}
                  style={{ width: 22, height: 22, border: 'none', padding: 0, cursor: 'pointer', borderRadius: 4, background: 'none' }} />
                <span style={{ fontSize: 11, color: '#0a3d52', fontFamily: 'monospace' }}>{fgColor}</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>배경색</label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                border: '1.5px solid #c2e4f0', borderRadius: 8,
                padding: '6px 10px', background: '#fff',
              }}>
                <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)}
                  style={{ width: 22, height: 22, border: 'none', padding: 0, cursor: 'pointer', borderRadius: 4, background: 'none' }} />
                <span style={{ fontSize: 11, color: '#0a3d52', fontFamily: 'monospace' }}>{bgColor}</span>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <p style={{ color: '#ef4444', fontSize: 12, marginBottom: 10, background: '#fef2f2', padding: '8px 12px', borderRadius: 8 }}>{error}</p>
        )}

        <button onClick={handleGenerate} disabled={loading} style={{
          width: '100%',
          background: loading ? '#9ca3af' : 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
          color: '#fff', border: 'none', borderRadius: 12, padding: '12px 0',
          fontSize: 14, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: loading ? 'none' : '0 4px 16px rgba(10,143,168,0.25)',
          marginTop: 'auto',
        }}>
          {loading ? '생성 중...' : '↓ 생성하기'}
        </button>

        <p style={{ marginTop: 10, fontSize: 11, color: '#9ca3af', textAlign: 'center' }}>
          입력하신 정보는 저장되지 않습니다.
        </p>
      </div>

      {/* 오른쪽: QR 미리보기 */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(145deg, #eaf4fb, #f0fdf9)',
        borderRadius: 16, border: '1px solid #c2e4f0',
        position: 'relative', overflow: 'hidden',
        minWidth: 0, alignSelf: 'stretch',
      }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: 'rgba(10,143,168,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -30, left: -30, width: 100, height: 100, borderRadius: '50%', background: 'rgba(10,143,168,0.04)', pointerEvents: 'none' }} />

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 16, padding: '24px',
        }}>
          {qrImage ? (
            <>
              <div style={{
                background: '#fff', borderRadius: 16, padding: 14,
                boxShadow: '0 8px 32px rgba(10,95,122,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 200, height: 200, flexShrink: 0,
              }}>
                <img src={qrImage} alt="QR코드"
                  style={{ width: Math.min(size, 172), height: Math.min(size, 172), display: 'block', borderRadius: 4 }} />
              </div>
              <button onClick={handleDownload} style={{
                padding: '10px 28px', border: '1.5px solid #0a8fa8', borderRadius: 10,
                color: '#0a8fa8', background: '#fff', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.15s',
                boxShadow: '0 2px 8px rgba(10,143,168,0.1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0a8fa8'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a8fa8' }}
              >↓ PNG 다운로드</button>
            </>
          ) : (
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 120, height: 120, margin: '0 auto 20px',
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, padding: 12,
                background: '#fff', borderRadius: 16,
                boxShadow: '0 4px 20px rgba(10,95,122,0.10)',
              }}>
                {[1,1,1, 1,0,1, 1,1,1, 0,0,0, 0,1,0, 0,0,0, 1,1,1, 1,0,1, 1,1,1].map((v, i) => (
                  <div key={i} style={{ borderRadius: 3, background: v ? '#0a8fa8' : 'transparent' }} />
                ))}
              </div>
              <p style={{ fontSize: 14, fontWeight: 600, color: '#0a3d52', marginBottom: 6 }}>QR코드 미리보기</p>
              <p style={{ fontSize: 12, color: '#4a8fa8', lineHeight: 1.6 }}>내용을 입력하고<br />생성하기를 눌러주세요</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}