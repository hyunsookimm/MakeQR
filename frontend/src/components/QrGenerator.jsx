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

  const handleGenerate = async () => {
    const data = getQrData()
    if (!data.trim()) { setError('내용을 입력해주세요.'); return }
    setError(''); setLoading(true)
    try {
      const blob = await generateQr(data.trim(), size)
      setQrImage(URL.createObjectURL(blob))
    } catch { setError('QR 생성 중 오류가 발생했습니다.') }
    finally { setLoading(false) }
  }

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = qrImage; a.download = 'qrcode.png'; a.click()
  }

  const inputStyle = {
    width: '100%', border: '1.5px solid #c2e4f0', borderRadius: 10,
    padding: '9px 12px', fontSize: 13, outline: 'none',
    color: '#0a3d52', background: '#fff', boxSizing: 'border-box',
  }
  const labelStyle = { display: 'block', fontSize: 11, fontWeight: 600, color: '#4a8fa8', marginBottom: 4 }
  const tagStyle = {
    background: 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
    color: '#fff', fontSize: 12, fontWeight: 700,
    padding: '5px 12px', borderRadius: 8, flexShrink: 0,
  }

  const renderForm = () => {
    const tagMap = { '링크': 'URL', '명함': '명함', '문구': '문구', '이메일': '이메일', '전화': '전화', '문자': '문자' }
    const descMap = { '링크': '웹사이트 주소 또는 텍스트', '명함': '연락처 정보를 입력하세요', '문구': '텍스트를 입력하세요', '이메일': '이메일 주소를 입력하세요', '전화': '전화번호를 입력하세요', '문자': '문자 정보를 입력하세요' }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={tagStyle}>{tagMap[tab]}</span>
          <span style={{ fontSize: 13, color: '#4a8fa8' }}>{descMap[tab]}</span>
        </div>

        {tab === '링크' && (
          <input style={inputStyle} placeholder="https://example.com" value={url}
            onChange={e => setUrl(e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8fa8'}
            onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
        )}

        {tab === '명함' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px' }}>
            {[
              ['이름', 'name', '홍길동'],
              ['회사명', 'company', '(주)이노서티'],
              ['연락처', 'phone', '010-0000-0000'],
              ['이메일', 'email', 'example@email.com'],
              ['홈페이지', 'website', 'https://example.com'],
              ['주소', 'address', '서울시 강남구'],
            ].map(([label, key, placeholder]) => (
              <div key={key}>
                <label style={labelStyle}>{label}</label>
                <input style={inputStyle} placeholder={placeholder} value={card[key]}
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
          <textarea style={{ ...inputStyle, height: 100, resize: 'vertical' }} value={text}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div>
              <label style={labelStyle}>전화번호</label>
              <input style={inputStyle} placeholder="010-0000-0000" value={sms.phone}
                onChange={e => setSms({ ...sms, phone: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#0a8fa8'}
                onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
            </div>
            <div>
              <label style={labelStyle}>전송내용</label>
              <textarea style={{ ...inputStyle, height: 80, resize: 'vertical' }} value={sms.message}
                onChange={e => setSms({ ...sms, message: e.target.value })}
                onFocus={e => e.target.style.borderColor = '#0a8fa8'}
                onBlur={e => e.target.style.borderColor = '#c2e4f0'} />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{
      background: '#fff', borderRadius: 20, border: '1px solid #c2e4f0',
      padding: '32px 36px', width: '100%', maxWidth: 900,
      boxShadow: '0 4px 32px rgba(10,95,122,0.08)',
      display: 'flex', gap: 40,
    }}>

      {/* 왼쪽: 입력 영역 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* 탭 */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {TABS.map(({ key, label }) => (
            <button key={key} onClick={() => { setTab(key); setQrImage(null) }} style={{
              padding: '7px 16px', borderRadius: 10, fontSize: 13, cursor: 'pointer',
              border: `1.5px solid ${tab === key ? '#0a8fa8' : '#c2e4f0'}`,
              background: tab === key ? 'linear-gradient(135deg, #0a8fa8, #0a6b80)' : '#fff',
              color: tab === key ? '#fff' : '#4a8fa8',
              fontWeight: tab === key ? 700 : 500,
            }}>{label}</button>
          ))}
        </div>

        {/* 폼 */}
        <div style={{ marginBottom: 20 }}>
          {renderForm()}
        </div>

        {/* 사이즈 */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#4a8fa8', marginBottom: 8 }}>SIZE</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {SIZES.map(s => (
              <button key={s} onClick={() => setSize(s)} style={{
                padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                border: `1.5px solid ${size === s ? '#0a8fa8' : '#c2e4f0'}`,
                background: size === s ? '#eaf4fb' : '#fff',
                color: size === s ? '#0a5f7a' : '#4a8fa8',
              }}>{s}px</button>
            ))}
          </div>
        </div>

        {error && <p style={{ color: '#ef4444', fontSize: 13, marginBottom: 12, background: '#fef2f2', padding: '10px 14px', borderRadius: 8 }}>{error}</p>}

        <button onClick={handleGenerate} disabled={loading} style={{
          width: '100%',
          background: loading ? '#9ca3af' : 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
          color: '#fff', border: 'none', borderRadius: 14, padding: '13px 0',
          fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: loading ? 'none' : '0 4px 16px rgba(10,143,168,0.25)',
        }}>
          {loading ? '생성 중...' : '↓ 생성하기'}
        </button>

        <p style={{ marginTop: 12, fontSize: 11, color: '#4a8fa8', textAlign: 'center' }}>
          입력하신 정보는 저장되지 않습니다.
        </p>
      </div>

      {/* 오른쪽: QR 미리보기 */}
      <div style={{
        width: 240, flexShrink: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#eaf4fb', borderRadius: 16, border: '1px solid #c2e4f0',
        padding: '28px 20px', gap: 16,
      }}>
        {qrImage ? (
          <>
            <img src={qrImage} alt="QR코드" style={{ width: size, height: size, display: 'block', borderRadius: 8 }} />
            <button onClick={handleDownload} style={{
              padding: '10px 20px', border: '1.5px solid #0a8fa8', borderRadius: 12,
              color: '#0a8fa8', background: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
              width: '100%',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0a8fa8'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a8fa8' }}
            >↓ PNG 다운로드</button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 110, height: 110, borderRadius: 16,
              border: '2px dashed #c2e4f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 14px',
            }}>
              <span style={{ fontSize: 32 }}>📱</span>
            </div>
            <p style={{ fontSize: 12, color: '#4a8fa8', lineHeight: 1.6 }}>
              내용을 입력하고<br />생성하기를 눌러주세요
            </p>
          </div>
        )}
      </div>

    </div>
  )
}