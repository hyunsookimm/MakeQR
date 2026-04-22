import { Link, useLocation } from 'react-router-dom'

const TABS = [
  { label: '브랜드/기업', path: '/design/brand' },
  { label: '기관/단체/학교', path: '/design/public' },
  { label: '교육/의료/기타', path: '/design/edu' },
  { label: '그래픽 QR코드', path: '/design/graphic' },
  { label: 'QR코드 V.I', path: '/design/vi', hot: true },
]

const IMAGES = [
  'pof_AIA', 'pof_AsianaOZ', 'pof_BabyLeague', 'pof_BIGBANG', 'pof_CHEILwordwide',
  'pof_CJO', 'pof_ckdhc', 'pof_Dilight', 'pof_DongA', 'pof_DORCO',
  'pof_GalaxyNote2', 'pof_GalaxyS', 'pof_GalaxyTab', 'pof_GoreTex', 'pof_GS25',
  'pof_GS25_sikgaek', 'pof_GScaltex', 'pof_GSshop', 'pof_handok', 'pof_Hankook',
  'pof_HCMgallery', 'pof_HELIX', 'pof_High1', 'pof_Hi-mart', 'pof_K3',
  'pof_KDnavien', 'pof_KEB', 'pof_KorandoC', 'pof_LANEIGE', 'pof_LG3Dsound',
  'pof_LGoptimusVu', 'pof_LIGA', 'pof_Magic', 'pof_MetLife', 'pof_MOBIS',
  'pof_MrPizza', 'pof_natracare', 'pof_NaturanceFromn', 'pof_NIKE', 'pof_ollehebook',
  'pof_OSSTEM', 'pof_Pantech', 'pof_QUA', 'pof_samungcard_Shopfinder',
  'pof_SamungLife', 'pof_skbroadband', 'pof_SleekStyle', 'pof_TeenieWeenie',
  'pof_TLJ', 'pof_TOTO', 'pof_Twinkids', 'pof_VaViC',
]

export default function DesignBrand() {
  const location = useLocation()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
        .design-wrap * { font-family: 'Noto Sans KR', sans-serif; }
        .design-sub-tab:hover { color: #0a8fa8 !important; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-anim { opacity: 0; animation: fadeSlideUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .c0 { animation-delay: 0.05s; }
        .c1 { animation-delay: 0.15s; }
        .c2 { animation-delay: 0.25s; }
        .c3 { animation-delay: 0.35s; }

        .pof-item { border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; transition: all 0.2s; cursor: pointer; background: #fff; }
        .pof-item:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(10,143,168,0.15); border-color: #0a8fa8; }
        .pof-item img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; }
        .pof-item p { font-size: 11px; color: #6b7280; text-align: center; padding: 8px 4px; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .hot-badge { background: #ef4444; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-left: 4px; }
        .bnn-img-wrap { border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 12px 16px; background: #fff; }

        @media (max-width: 768px) {
          .pof-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .title-row { flex-direction: column !important; align-items: flex-start !important; }
          .bnn-row { display: none !important; }
        }
      `}</style>

      <div className="design-wrap" style={{ background: '#fff' }}>

        {/* 서브 탭 네비 */}
        <div style={{ borderBottom: '1px solid #e5e7eb', background: '#fff', position: 'sticky', top: 64, zIndex: 50 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              {TABS.map(({ label, path, hot }) => {
                const active = location.pathname === path
                return (
                  <Link key={path} to={path} className="design-sub-tab" style={{
                    padding: '14px 20px', fontSize: 14, fontWeight: active ? 600 : 400,
                    color: active ? '#0a8fa8' : '#4b5563',
                    borderBottom: active ? '2px solid #0a8fa8' : '2px solid transparent',
                    textDecoration: 'none', transition: 'color 0.15s', whiteSpace: 'nowrap',
                    display: 'flex', alignItems: 'center',
                  }}>
                    {label}
                    {hot && <span className="hot-badge">HOT</span>}
                  </Link>
                )
              })}
            </div>
            {/* 브레드크럼 */}
            <div style={{ fontSize: 12, color: '#9ca3af', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>HOME</Link>
              <span>›</span>
              <span>DESIGN</span>
              <span>›</span>
              <span style={{ color: '#0a8fa8' }}>브랜드/기업</span>
            </div>
          </div>
        </div>

        {/* 본문 */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px 80px' }}>

          {/* 타이틀 + 배너 이미지 */}
          <div className="card-anim c0 title-row" style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', marginBottom: 24, gap: 24,
          }}>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Brand & Corporation</h1>
              <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>Make your QRcode Different & Special!</p>
            </div>
            {/* 배너 이미지 2개 */}
            <div className="bnn-row" style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <div className="bnn-img-wrap">
                <img src="/images/bnn_img01.gif" alt="NCSOFT Graphic QRcode" style={{ height: 60, objectFit: 'contain' }} />
              </div>
              <div className="bnn-img-wrap">
                <img src="/images/bnn_img02.gif" alt="BCcard Visual Identity" style={{ height: 60, objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          {/* 설명 */}
          <div className="card-anim c1" style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.9, margin: 0 }}>
              QR코드 디자인은 기존의 천편일률적인 QR코드에 디자인적인 요소를 플러스하여, 독창적인 스타일로 만드는 특색있는 QR코드를 말합니다.<br />
              QR코드 디자인은 기업의 로고나 고유 컬러 또는 형태 등을 적용시킬 수 있기에, 기업이나 브랜드의 아이덴터티를 표현 할 수 있다는 장점이 있습니다.
            </p>
          </div>

          {/* 구분선 */}
          <div className="card-anim c2" style={{ height: 1, background: '#e5e7eb', marginBottom: 40 }} />

          {/* 이미지 그리드 */}
          <div className="card-anim c3">
            <div className="pof-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
            }}>
              {IMAGES.map(name => (
                <div key={name} className="pof-item">
                  <img src={`/images/${name}.jpg`} alt={name.replace('pof_', '')} />
                  <p>{name.replace('pof_', '')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}