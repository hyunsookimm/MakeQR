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
const COLORS = [
  '#000000', '#1a1a2e', '#0a4f6e', '#0a8fa8', '#1d6a4f',
  '#6b21a8', '#b91c1c', '#b45309', '#334155', '#475569',
  '#ffffff', '#f0f9ff', '#ecfdf5', '#fef9c3', '#fce7f3',
]
const LIGHT_COLORS = new Set(['#ffffff', '#f0f9ff', '#ecfdf5', '#fef9c3', '#fce7f3'])

export default function QrGenerator() {
  const [tab, setTab] = useState('링크')
  const [size, setSize] = useState(200)
  const [qrImage, setQrImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [fgColor, setFgColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')

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
    width: '100%',
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: 10,
    padding: '10px 14px',
    fontSize: 13,
    color: '#1a2a3a',
    outline: 'none',
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 400,
    boxSizing: 'border-box',
  }

  const labelStyle = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    color: '#0a6b80',
    marginBottom: 6,
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
  }

  const sectionLabel = {
    fontSize: 11,
    fontWeight: 600,
    color: '#0a6b80',
    marginBottom: 8,
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
  }

  const divider = {
    height: 1,
    background: 'rgba(0,0,0,0.1)',
    margin: '16px 0',
  }

  const renderForm = () => (
    <div>
      <div style={sectionLabel}>
        {{ '링크':'URL', '명함':'명함', '문구':'문구', '이메일':'이메일', '전화':'전화', '문자':'문자' }[tab]}
      </div>
      {tab === '링크' && (
        <input style={inputStyle} placeholder="https://example.com" value={url}
          onChange={e => setUrl(e.target.value)} />
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
                onChange={e => setCard({ ...card, [key]: e.target.value })} />
            </div>
          ))}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>메모</label>
            <input style={inputStyle} placeholder="메모를 입력하세요" value={card.memo}
              onChange={e => setCard({ ...card, memo: e.target.value })} />
          </div>
        </div>
      )}
      {tab === '문구' && (
        <textarea style={{ ...inputStyle, height: 90, resize: 'none' }} value={text}
          onChange={e => setText(e.target.value)} />
      )}
      {tab === '이메일' && (
        <input style={inputStyle} placeholder="example@email.com" value={emailVal}
          onChange={e => setEmailVal(e.target.value)} />
      )}
      {tab === '전화' && (
        <input style={inputStyle} placeholder="010-0000-0000" value={tel}
          onChange={e => setTel(e.target.value)} />
      )}
      {tab === '문자' && (
        <div>
          <label style={labelStyle}>전화번호</label>
          <input style={{ ...inputStyle, marginBottom: 8 }} placeholder="010-0000-0000" value={sms.phone}
            onChange={e => setSms({ ...sms, phone: e.target.value })} />
          <label style={labelStyle}>전송내용</label>
          <textarea style={{ ...inputStyle, height: 70, resize: 'none' }} value={sms.message}
            onChange={e => setSms({ ...sms, message: e.target.value })} />
        </div>
      )}
    </div>
  )

  const ColorPicker = ({ label, color, onChange }) => (
    <div style={{
      flex: 1, background: '#fff', borderRadius: 12,
      padding: 14, border: '1px solid rgba(0,0,0,0.08)',
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#5a6a7a', marginBottom: 10 }}>{label}</div>
      <div style={{
        height: 48, borderRadius: 10, marginBottom: 10,
        background: color, border: '1px solid rgba(0,0,0,0.1)',
        transition: 'background 0.2s',
      }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 5, marginBottom: 8 }}>
        {COLORS.map(hex => (
          <div key={hex} onClick={() => onChange(hex)} style={{
            aspectRatio: '1', borderRadius: 6, cursor: 'pointer',
            background: hex,
            border: color === hex ? '2px solid #0a8fa8' : '2px solid transparent',
            boxShadow: color === hex
              ? '0 0 0 2px rgba(10,143,168,0.35)'
              : LIGHT_COLORS.has(hex)
                ? '0 1px 3px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.08)'
                : '0 1px 3px rgba(0,0,0,0.12)',
            transform: color === hex ? 'scale(1.08)' : 'scale(1)',
            transition: 'all 0.12s',
          }} />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
        <div style={{ position: 'relative', width: 28, height: 28, flexShrink: 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            border: '1.5px dashed rgba(0,0,0,0.25)',
            background: 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
            opacity: 0.85,
          }} />
          <input type="color" value={color} onChange={e => onChange(e.target.value)}
            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }} />
        </div>
        <span style={{ fontSize: 11, color: '#8a9aaa' }}>직접 선택</span>
      </div>
    </div>
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
        .qr-wrap * { font-family: 'Noto Sans KR', sans-serif !important; }
        .qr-tab-btn:hover:not(.active) { background: rgba(255,255,255,0.9) !important; color: #1a2a3a !important; }
        .qr-size-btn:hover:not(.active) { background: rgba(255,255,255,0.9) !important; color: #1a2a3a !important; }
        .qr-input:focus { border-color: #0a8fa8 !important; box-shadow: 0 0 0 3px rgba(10,143,168,0.12) !important; }
        .qr-gen-btn:hover { opacity: 0.88 !important; }
        .qr-dl-btn:hover { background: #0a8fa8 !important; color: #fff !important; }
      `}</style>

      <div className="qr-wrap" style={{
        background: '#e8ecf0',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: 20,
        padding: '28px 24px',
        width: '100%',
        maxWidth: 460,
      }}>

        {/* 탭 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {TABS.map(({ key, label }) => (
            <button key={key} className={`qr-tab-btn${tab === key ? ' active' : ''}`}
              onClick={() => { setTab(key); setQrImage(null); setError('') }}
              style={{
                padding: '7px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500,
                cursor: 'pointer',
                border: `1px solid ${tab === key ? '#0a8fa8' : 'rgba(0,0,0,0.2)'}`,
                background: tab === key ? '#0a8fa8' : 'rgba(255,255,255,0.6)',
                color: tab === key ? '#fff' : '#3a4a5a',
                transition: 'all 0.15s',
              }}>{label}</button>
          ))}
        </div>

        {/* 폼 */}
        <div style={{ marginBottom: 4 }}>{renderForm()}</div>

        <div style={divider} />

        {/* 사이즈 */}
        <div style={sectionLabel}>SIZE</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {SIZES.map(s => (
            <button key={s} className={`qr-size-btn${size === s ? ' active' : ''}`}
              onClick={() => setSize(s)} style={{
                padding: '6px 13px', borderRadius: 7, fontSize: 11, fontWeight: 500,
                cursor: 'pointer',
                border: `1px solid ${size === s ? '#0a8fa8' : 'rgba(0,0,0,0.2)'}`,
                background: size === s ? '#0a8fa8' : 'rgba(255,255,255,0.6)',
                color: size === s ? '#fff' : '#3a4a5a',
                transition: 'all 0.15s',
              }}>{s}px</button>
          ))}
        </div>

        <div style={divider} />

        {/* 컬러 */}
        <div style={sectionLabel}>COLOR</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <ColorPicker label="전경색" color={fgColor} onChange={setFgColor} />
          <ColorPicker label="배경색" color={bgColor} onChange={setBgColor} />
        </div>

        {error && (
          <p style={{ color: '#ef4444', fontSize: 12, marginTop: 12, background: '#fef2f2', padding: '8px 12px', borderRadius: 8 }}>{error}</p>
        )}

        {/* 생성 버튼 */}
        <button className="qr-gen-btn" onClick={handleGenerate} disabled={loading} style={{
          width: '100%',
          background: loading ? '#9ca3af' : 'linear-gradient(135deg, #0a8fa8, #0a6b80)',
          color: '#fff', border: 'none', borderRadius: 12, padding: '13px 0',
          fontSize: 14, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: loading ? 'none' : '0 4px 14px rgba(10,143,168,0.3)',
          marginTop: 20, transition: 'opacity 0.15s',
        }}>
          {loading ? '생성 중...' : '↓ 생성하기'}
        </button>

        <p style={{ textAlign: 'center', fontSize: 11, color: '#9aa5b0', marginTop: 10, fontWeight: 400 }}>
          입력하신 정보는 저장되지 않습니다
        </p>

        {/* QR 미리보기 */}
        <div style={{
          marginTop: 20, background: 'rgba(255,255,255,0.5)',
          border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14,
          padding: 20, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 12,
        }}>
          {qrImage ? (
            <>
              <div style={{
                background: '#fff', borderRadius: 12, padding: 12,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}>
                <img src={qrImage} alt="QR코드"
                  style={{ width: Math.min(size, 160), height: Math.min(size, 160), display: 'block', borderRadius: 4 }} />
              </div>
              <button className="qr-dl-btn" onClick={handleDownload} style={{
                padding: '9px 24px', border: '1.5px solid #0a8fa8', borderRadius: 10,
                color: '#0a8fa8', background: '#fff', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.15s',
              }}>↓ PNG 다운로드</button>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 64, height: 64, margin: '0 auto 12px',
                display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 3,
              }}>
                {[1,1,1,0,1, 1,0,1,0,1, 1,1,1,0,0, 0,1,0,1,1, 1,0,0,0,1].map((v,i) => (
                  <div key={i} style={{ borderRadius: 2, background: v ? '#0a8fa8' : 'transparent' }} />
                ))}
              </div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#3a4a5a', marginBottom: 4 }}>QR코드 미리보기</p>
              <p style={{ fontSize: 12, color: '#8a9aaa' }}>내용을 입력하고 생성하기를 눌러주세요</p>
            </div>
          )}
        </div>

      </div>
    </>
  )
}