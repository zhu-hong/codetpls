import Panzoom from './pan-zoom'
import { useRef, useEffect } from 'react'

function App() {
  const ref = useRef(null)
  const eventArea = useRef(null)
  const pz = useRef(null)

  useEffect(() => {
    if (pz.current === null) {
      pz.current = new Panzoom(ref.current, {
        eventArea: eventArea.current,
      })
    }
  }, [])

  return <div className="fixed top-0 bottom-0 left-0 right-0 overflow-hidden" ref={eventArea}>
    <div ref={ref} style={{ transformOrigin: '0 0' }}>
      <div className='flex flex-col items-center gap-24px'>
        <h1>产品标识卡（20x10）</h1>

        <div style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 225" shapeRendering="crispEdges" width="450" height="225">
            <rect x="0" y="0" width="450" height="225" fill="#ffffff" />

            <rect x="4" y="4" width="442" height="217" fill="#ffffff" stroke='#000000' strokeWidth='1' />

            <line x1='4' y1='81' x2='446' y2='81' stroke='#000000' strokeWidth='1' />
            <line x1='4' y1='104' x2='446' y2='104' stroke='#000000' strokeWidth='1' />
            <line x1='4' y1='127' x2='446' y2='127' stroke='#000000' strokeWidth='1' />
            <line x1='4' y1='150' x2='336' y2='150' stroke='#000000' strokeWidth='1' />
            <line x1='4' y1='173' x2='336' y2='173' stroke='#000000' strokeWidth='1' />
            <line x1='4' y1='196' x2='336' y2='196' stroke='#000000' strokeWidth='1' />

            <line x1='64' y1='81' x2='64' y2='221' stroke='#000000' strokeWidth='1' />
            <line x1='336' y1='81' x2='336' y2='221' stroke='#000000' strokeWidth='1' />
            <line x1='260' y1='81' x2='260' y2='127' stroke='#000000' strokeWidth='1' />
            <line x1='206' y1='104' x2='206' y2='127' stroke='#000000' strokeWidth='1' />
            <line x1='386' y1='104' x2='386' y2='127' stroke='#000000' strokeWidth='1' />
            <line x1='170' y1='150' x2='170' y2='221' stroke='#000000' strokeWidth='1' />
            <line x1='230' y1='150' x2='230' y2='221' stroke='#000000' strokeWidth='1' />
            <line x1='124' y1='173' x2='124' y2='196' stroke='#000000' strokeWidth='1' />
            <line x1='270' y1='173' x2='270' y2='196' stroke='#000000' strokeWidth='1' />

            <svg x="364" y="14" width="72" height="72" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25">
              <rect width="25" height="25" fill="#ffffff"></rect>
              <path fill="#000000"
                d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
              </path>
            </svg>

            <g fontWeight="700" fontFamily="微软雅黑" fill="#000000">
              <text fontWeight="800" x="225" y="45" dominantBaseline="middle" textAnchor="middle"
                fontSize="24">产品标识卡</text>

              <text x='34' y='113' dominantBaseline="middle" textAnchor="middle" fontSize='14'>供应商</text>
              <text x='68' y='116' fontSize='12'></text>

              <text x='34' y='135' dominantBaseline="middle" textAnchor="middle" fontSize='14'>品名</text>
              <text x='68' y='138' fontSize='12'></text>

              <text x='34' y='158' dominantBaseline="middle" textAnchor="middle" fontSize='14'>规格</text>
              <text x='68' y='161' fontSize='12'></text>

              <text x='34' y='181' dominantBaseline="middle" textAnchor="middle" fontSize='14'>捆/炉号</text>
              <text x='68' y='184' fontSize='12'></text>

              <text x='34' y='204' dominantBaseline="middle" textAnchor="middle" fontSize='14'>数量</text>
              <text x='68' y='207' fontSize='12'></text>

              <text x='34' y='228' dominantBaseline="middle" textAnchor="middle" fontSize='14'>生产日期</text>
              <text x='68' y='231' fontSize='12'></text>

              <text x='296' y='113' dominantBaseline="middle" textAnchor="middle" fontSize='14'>采购单号</text>
              <text x='340' y='116' fontSize='12'></text>

              <text x='234' y='135' dominantBaseline="middle" textAnchor="middle" fontSize='14'>牌号</text>
              <text x='264' y='138' fontSize='12'></text>

              <text x='360' y='135' dominantBaseline="middle" textAnchor="middle" fontSize='14'>产地</text>
              <text x='390' y='138' fontSize='12'></text>

              <text x='200' y='181' dominantBaseline="middle" textAnchor="middle" fontSize='14'>批号</text>
              <text x='234' y='184' fontSize='12'></text>

              <text x='146' y='204' dominantBaseline="middle" textAnchor="middle" fontSize='14'>净重</text>
              <text x='174' y='207' fontSize='12'></text>

              <text x='250' y='204' dominantBaseline="middle" textAnchor="middle" fontSize='14'>毛重</text>
              <text x='274' y='207' fontSize='12'></text>

              <text x='200' y='228' dominantBaseline="middle" textAnchor="middle" fontSize='14'>检验员</text>
              <text x='234' y='231' fontSize='12'></text>
            </g>
          </svg>
        </div>

        <h1>委外产品标识卡（9x10）</h1>

        <div style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="450" height="500">
            <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

            <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25">
              <rect width="25" height="25" fill="#ffffff"></rect>
              <path fill="#000000"
                d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
              </path>
            </svg>

            <g fontWeight="700" fontFamily="微软雅黑" fill="#000000">
              <text fontWeight="800" x="225" y="28" dominantBaseline="middle" textAnchor="middle"
                fontSize="16">宁波途兴汽车部件有限公司</text>
              <text fontWeight="800" x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">委外产品标识卡</text>

              <text x="436" y="144" fontSize="15" textAnchor="end"></text>

              <text x="20" y="132" fontSize="16">炉号</text>
              <text x="64" y="132" fontSize="16"></text>

              <text x="20" y="211" fontSize="16">委外订单号</text>
              <text x="112" y="211" fontSize="16"></text>
              <line x1="112" y1="215" x2="406" y2="215" stroke="#000000" strokeWidth="2" />

              <text x="20" y="261" fontSize="16">产品名称</text>
              <text x="112" y="261" fontSize="16"></text>
              <line x1="112" y1="265" x2="220" y2="265" stroke="#000000" strokeWidth="2" />
              <text x="235" y="261" fontSize="16">供应商</text>
              <text x="294" y="261" fontSize="16"></text>
              <line x1="294" y1="265" x2="406" y2="265" stroke="#000000" strokeWidth="2" />

              <text x="20" y="311" fontSize="16">数量</text>
              <text x="112" y="311" fontSize="16"></text>
              <line x1="112" y1="315" x2="406" y2="315" stroke="#000000" strokeWidth="2" />

              <text x="20" y="361" fontSize="16">批号</text>
              <text x="112" y="361" fontSize="16"></text>
              <line x1="112" y1="365" x2="406" y2="365" stroke="#000000" strokeWidth="2" />

              <text x="20" y="411" fontSize="16">操作工</text>
              <text x="112" y="411" fontSize="16"></text>
              <line x1="112" y1="415" x2="406" y2="415" stroke="#000000" strokeWidth="2" />

              <text x="20" y="461" fontSize="16">生产日期</text>
              <text x="112" y="461" fontSize="16"></text>
              <line x1="112" y1="465" x2="406" y2="465" stroke="#000000" strokeWidth="2" />
            </g>
          </svg>
        </div>

        <h1>工序标识卡（9x10）</h1>

        <div style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="450" height="500">
            <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

            <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25">
              <rect width="25" height="25" fill="#ffffff"></rect>
              <path fill="#000000"
                d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
              </path>
            </svg>

            <g fontWeight="700" fontFamily="微软雅黑" fill="#000000">
              <text fontWeight="800" x="225" y="28" dominantBaseline="middle" textAnchor="middle"
                fontSize="16">宁波途兴汽车部件有限公司</text>
              <text fontWeight="800" x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">工序标识卡</text>

              <text x="436" y="144" fontSize="15" textAnchor="end"></text>

              <text x="20" y="122" fontSize="16">炉号</text>
              <text x="64" y="122" fontSize="16"></text>

              <text x="20" y="186" fontSize="16">生产车间</text>
              <text x="110" y="186" fontSize="16"></text>
              <line x1="110" y1="190" x2="220" y2="190" stroke="#000000" strokeWidth="2" />
              <text x="230" y="186" fontSize="16">班次</text>
              <text x="302" y="186" fontSize="16"></text>
              <line x1="302" y1="190" x2="406" y2="190" stroke="#000000" strokeWidth="2" />

              <text x="20" y="226" fontSize="16">产品名称</text>
              <text x="110" y="226" fontSize="16"></text>
              <line x1="110" y1="230" x2="220" y2="230" stroke="#000000" strokeWidth="2" />
              <text x="230" y="226" fontSize="16">图号</text>
              <text x="302" y="226" fontSize="16"></text>
              <line x1="302" y1="230" x2="406" y2="230" stroke="#000000" strokeWidth="2" />

              <text x="20" y="266" fontSize="16">本道工序</text>
              <text x="110" y="266" fontSize="16"></text>
              <line x1="110" y1="270" x2="220" y2="270" stroke="#000000" strokeWidth="2" />
              <text x="230" y="266" fontSize="16">下道工序</text>
              <text x="302" y="266" fontSize="16"></text>
              <line x1="302" y1="270" x2="406" y2="270" stroke="#000000" strokeWidth="2" />

              <text x="20" y="306" fontSize="16">生产批次</text>
              <text x="110" y="306" fontSize="16"></text>
              <line x1="110" y1="310" x2="406" y2="310" stroke="#000000" strokeWidth="2" />

              <text x="20" y="346" fontSize="16">数量</text>
              <text x="110" y="346" fontSize="16"></text>
              <line x1="110" y1="350" x2="406" y2="350" stroke="#000000" strokeWidth="2" />

              <text x="20" y="386" fontSize="16">操作工</text>
              <text x="110" y="386" fontSize="16"></text>
              <line x1="110" y1="390" x2="406" y2="390" stroke="#000000" strokeWidth="2" />

              <text x="20" y="426" fontSize="16">检验结论</text>
              <text x="110" y="426" fontSize="16"></text>
              <line x1="110" y1="430" x2="406" y2="430" stroke="#000000" strokeWidth="2" />

              <text x="20" y="466" fontSize="16">生产日期</text>
              <text x="110" y="466" fontSize="16"></text>
              <line x1="110" y1="470" x2="406" y2="470" stroke="#000000" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <h1>不良品标识卡（9x10）</h1>

        <div style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="450" height="500">
            <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

            <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25">
              <rect width="25" height="25" fill="#ffffff"></rect>
              <path fill="#000000"
                d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
              </path>
            </svg>

            <g fontWeight="700" fontFamily="微软雅黑" fill="#000000">
              <text fontWeight="800" x="225" y="28" dominantBaseline="middle" textAnchor="middle"
                fontSize="16">宁波途兴汽车部件有限公司</text>
              <text fontWeight="800" x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">不良品标识卡</text>

              <text x="436" y="144" fontSize="15" textAnchor="end"></text>

              <text x="20" y="122" fontSize="16">炉号</text>
              <text x="64" y="122" fontSize="16"></text>

              <text x="20" y="186" fontSize="16">生产车间</text>
              <text x="110" y="186" fontSize="16"></text>
              <line x1="110" y1="190" x2="220" y2="190" stroke="#000000" strokeWidth="2" />
              <text x="230" y="186" fontSize="16">班次</text>
              <text x="302" y="186" fontSize="16"></text>
              <line x1="302" y1="190" x2="406" y2="190" stroke="#000000" strokeWidth="2" />

              <text x="20" y="226" fontSize="16">产品名称</text>
              <text x="110" y="226" fontSize="16"></text>
              <line x1="110" y1="230" x2="220" y2="230" stroke="#000000" strokeWidth="2" />
              <text x="230" y="226" fontSize="16">图号</text>
              <text x="302" y="226" fontSize="16"></text>
              <line x1="302" y1="230" x2="406" y2="230" stroke="#000000" strokeWidth="2" />

              <text x="20" y="266" fontSize="16">本道工序</text>
              <text x="110" y="266" fontSize="16"></text>
              <line x1="110" y1="270" x2="220" y2="270" stroke="#000000" strokeWidth="2" />
              <text x="230" y="266" fontSize="16">下道工序</text>
              <text x="302" y="266" fontSize="16"></text>
              <line x1="302" y1="270" x2="406" y2="270" stroke="#000000" strokeWidth="2" />

              <text x="20" y="306" fontSize="16">生产批次</text>
              <text x="110" y="306" fontSize="16"></text>
              <line x1="110" y1="310" x2="406" y2="310" stroke="#000000" strokeWidth="2" />

              <text x="20" y="346" fontSize="16">数量</text>
              <text x="110" y="346" fontSize="16"></text>
              <line x1="110" y1="350" x2="406" y2="350" stroke="#000000" strokeWidth="2" />

              <text x="20" y="386" fontSize="16">操作工</text>
              <text x="110" y="386" fontSize="16"></text>
              <line x1="110" y1="390" x2="406" y2="390" stroke="#000000" strokeWidth="2" />

              <text x="20" y="426" fontSize="16">不合格原因</text>
              <text x="110" y="426" fontSize="16"></text>
              <line x1="110" y1="430" x2="406" y2="430" stroke="#000000" strokeWidth="2" />

              <text x="20" y="466" fontSize="16">生产日期</text>
              <text x="110" y="466" fontSize="16"></text>
              <line x1="110" y1="470" x2="406" y2="470" stroke="#000000" strokeWidth="2" />
            </g>
          </svg>
        </div>

        <h1>首件送检条码（9x10）</h1>

        <div style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="450" height="500">
            <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

            <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25">
              <rect width="25" height="25" fill="#ffffff"></rect>
              <path fill="#000000"
                d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
              </path>
            </svg>

            <g fontWeight="700" fontFamily="微软雅黑" fill="#000000">
              <text fontWeight="800" x="225" y="28" dominantBaseline="middle" textAnchor="middle"
                fontSize="16">宁波途兴汽车部件有限公司</text>
              <text fontWeight="800" x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">首件送检条码</text>

              <text x="436" y="144" fontSize="15" textAnchor="end"></text>

              <text x="20" y="211" fontSize="16">生产车间</text>
              <text x="112" y="211" fontSize="16"></text>
              <line x1="112" y1="215" x2="220" y2="215" stroke="#000000" strokeWidth="2" />
              <text x="235" y="211" fontSize="16">班次</text>
              <text x="294" y="211" fontSize="16"></text>
              <line x1="294" y1="215" x2="406" y2="215" stroke="#000000" strokeWidth="2" />

              <text x="20" y="261" fontSize="16">产品名称</text>
              <text x="112" y="261" fontSize="16"></text>
              <line x1="112" y1="265" x2="220" y2="265" stroke="#000000" strokeWidth="2" />
              <text x="235" y="261" fontSize="16">图号</text>
              <text x="294" y="261" fontSize="16"></text>
              <line x1="294" y1="265" x2="406" y2="265" stroke="#000000" strokeWidth="2" />

              <text x="20" y="311" fontSize="16">本道工序</text>
              <text x="112" y="311" fontSize="16"></text>
              <line x1="112" y1="315" x2="406" y2="315" stroke="#000000" strokeWidth="2" />

              <text x="20" y="361" fontSize="16">送检单位</text>
              <text x="112" y="361" fontSize="16"></text>
              <line x1="112" y1="365" x2="406" y2="365" stroke="#000000" strokeWidth="2" />

              <text x="20" y="411" fontSize="16">操作工</text>
              <text x="112" y="411" fontSize="16"></text>
              <line x1="112" y1="415" x2="406" y2="415" stroke="#000000" strokeWidth="2" />

              <text x="20" y="461" fontSize="16">送检时间</text>
              <text x="112" y="461" fontSize="16"></text>
              <line x1="112" y1="465" x2="406" y2="465" stroke="#000000" strokeWidth="2" />
            </g>
          </svg>
        </div>

        <h1>供应商标签（5x8）</h1>

        <div style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 720" shapeRendering="crispEdges" width="450" height="720">
            <rect x="0" y="0" width="450" height="720" fill="#ffffff" />
            <g fontWeight="700" fontFamily="微软雅黑" fill="#000000">
              <text fontWeight="800" x="225" y="48" dominantBaseline="middle" textAnchor="middle" fontSize="34">底盘供应商标签</text>

              <text x="32" y="106" fontSize="22">采购订单：</text>

              <text x="32" y="146" fontSize="22">物料号：</text>

              <text x="32" y="186" fontSize="22"></text>
              <text x="32" y="212" fontSize="22"></text>

              <text x="32" y="252" fontSize="22">生产日期：</text>

              <text x="32" y="292" fontSize="22">批次：</text>

              <text x="32" y="332" fontSize="22">炉号：</text>
              <text x="233" y="332" fontSize="22">数量：</text>

              <text x="32" y="372" fontSize="22">供应商：</text>

              <text x="32" y="412" fontSize="22">生产地址：</text>

              <text x="32" y="452" fontSize="22">追溯号：</text>
            </g>

            <svg x="135" y="500" width="180" height="180" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25">
              <rect width="25" height="25" fill="#ffffff"></rect>
              <path fill="#000000"
                d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
              </path>
            </svg>
          </svg>
        </div>

      </div>
    </div>
  </div>
}

export default App
