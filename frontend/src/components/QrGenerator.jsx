import { useState } from 'react'
import { generateQr } from '../api/qrApi'

const SIZES = [80, 120, 160, 200, 240, 300]
const TABS = ['링크', '명함', '문구', '이메일', '전화', '문자']

export default function QrGenerator() {
  const [tab, setTab] = useState('링크')
  const [size, setSize] = useState(200)
  const [qrImage, setQrImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // 각 탭별 입력값
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
    width: '100%', border: '1px solid #e5e7eb', borderRadius: 8,
    padding: '10px 14px', fontSize: 14, outline: 'none', marginBottom: 10
  }
  const labelStyle = { display: 'block', fontSize: 13, color: '#6b7280', marginBottom: 4 }

  const renderForm = () => {
    switch (tab) {
      case '링크':
        return (
          <div>
            <label style={labelStyle}>URL</label>
            <input style={inputStyle} placeholder="https://example.com" value={url} onChange={e => setUrl(e.target.value)} />
          </div>
        )
      case '명함':
        return (
          <div>
            {[['이름', 'name'], ['회사명', 'company'], ['연락처', 'phone'], ['이메일', 'email'], ['주소', 'address'], ['홈페이지', 'website'], ['메모', 'memo']].map(([label, key]) => (
              <div key={key}>
                <label style={labelStyle}>{label}</label>
                <input style={inputStyle} value={card[key]} onChange={e => setCard({ ...card, [key]: e.target.value })} />
              </div>
            ))}
          </div>
        )
      case '문구':
        return (
          <div>
            <label style={labelStyle}>문구</label>
            <textarea style={{ ...inputStyle, height: 100, resize: 'vertical' }} value={text} onChange={e => setText(e.target.value)} />
          </div>
        )
      case '이메일':
        return (
          <div>
            <label style={labelStyle}>이메일 주소</label>
            <input style={inputStyle} placeholder="example@email.com" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
          </div>
        )
      case '전화':
        return (
          <div>
            <label style={labelStyle}>전화번호</label>
            <input style={inputStyle} placeholder="010-0000-0000" value={tel} onChange={e => setTel(e.target.value)} />
          </div>
        )
      case '문자':
        return (
          <div>
            <label style={labelStyle}>전화번호</label>
            <input style={inputStyle} placeholder="010-0000-0000" value={sms.phone} onChange={e => setSms({ ...sms, phone: e.target.value })} />
            <label style={labelStyle}>전송내용</label>
            <textarea style={{ ...inputStyle, height: 80, resize: 'vertical' }} value={sms.message} onChange={e => setSms({ ...sms, message: e.target.value })} />
          </div>
        )
      default: return null
    }
  }

  return (
    <div style={{
      background: '#fff', borderRadius: 16, border: '1px solid #f0f0f0',
      padding: 32, width: '100%', maxWidth: 480
    }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1a1a2e', marginBottom: 20 }}>
        QR코드 무료 생성
      </h2>

      {/* 탭 */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
        {TABS.map(t => (
          <button key={t} onClick={() => { setTab(t); setQrImage(null) }} style={{
            padding: '6px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer',
            border: `1px solid ${tab === t ? '#2563eb' : '#e5e7eb'}`,
            background: tab === t ? '#2563eb' : '#fff',
            color: tab === t ? '#fff' : '#6b7280',
            fontWeight: tab === t ? 600 : 400
          }}>
            {t}
          </button>
        ))}
      </div>

      {/* 폼 */}
      {renderForm()}

      {/* 사이즈 */}
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>사이즈</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {SIZES.map(s => (
            <button key={s} onClick={() => setSize(s)} style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 13, cursor: 'pointer',
              border: `1px solid ${size === s ? '#2563eb' : '#e5e7eb'}`,
              background: size === s ? '#2563eb' : '#fff',
              color: size === s ? '#fff' : '#6b7280'
            }}>
              {s}px
            </button>
          ))}
        </div>
      </div>

      {error && <p style={{ color: '#ef4444', fontSize: 13, marginBottom: 16 }}>{error}</p>}

      <button onClick={handleGenerate} disabled={loading} style={{
        width: '100%', background: '#2563eb', color: '#fff', border: 'none',
        borderRadius: 12, padding: '12px 0', fontSize: 15, fontWeight: 500, cursor: 'pointer'
      }}>
        {loading ? '생성 중...' : 'QR코드 생성'}
      </button>

      {qrImage && (
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ padding: 16, border: '1px solid #f0f0f0', borderRadius: 12 }}>
            <img src={qrImage} alt="QR코드" style={{ width: size, height: size }} />
          </div>
          <button onClick={handleDownload} style={{
            padding: '10px 24px', border: '1px solid #2563eb', borderRadius: 12,
            color: '#2563eb', background: '#fff', fontSize: 14, fontWeight: 500, cursor: 'pointer'
          }}>
            ↓ PNG 다운로드
          </button>
        </div>
      )}

      <p style={{ marginTop: 24, fontSize: 12, color: '#9ca3af', textAlign: 'center' }}>
        입력하신 정보는 저장되지 않습니다.
      </p>
    </div>
  )
}