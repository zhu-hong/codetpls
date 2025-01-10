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

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 225" shapeRendering="crispEdges" width="200mm" height="100mm">
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

          <svg x="372" y="8" width="70" height="70" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <svg x="346" y="130" width='90' height='68' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 872 657">
            <path d="M681.14 169.39c-7.91 3.95-26.79 13.75-31.28 19.65-2.8 3.64-4.03 7.95-3.42 11.95.59 4.01 2.96 7.4 6.6 9.4 2.26 1.25 4.94 1.93 7.74 1.95 6.26.06 12.57-3.06 16.44-8.13 4.5-5.9 7.37-24.59 8.4-32.35.28-2.15-2.28-3.57-4.48-2.47M578.1 206.86c-7.91 3.95-26.79 13.75-31.28 19.65-2.8 3.64-4.03 7.95-3.42 11.95.59 4.01 2.96 7.4 6.6 9.4 2.27 1.26 4.93 1.93 7.75 1.95 6.25.07 12.57-3.05 16.44-8.12 4.5-5.9 7.37-24.58 8.4-32.34.27-2.16-2.29-3.58-4.49-2.49m-56.29 57.62c-7.91 3.95-26.78 13.75-31.28 19.65-2.8 3.64-4.03 7.95-3.42 11.95.59 4.01 2.96 7.4 6.6 9.4 2.27 1.26 4.93 1.93 7.75 1.96 6.25.06 12.56-3.06 16.43-8.13 4.51-5.9 7.38-24.59 8.4-32.34.29-2.15-2.24-3.58-4.48-2.49m39.42-107.17c4.5-5.9 7.37-24.59 8.4-32.35.28-2.16-2.27-3.58-4.47-2.48-7.91 3.95-26.79 13.75-31.28 19.65-2.8 3.64-4.03 7.95-3.42 11.95.59 4.01 2.96 7.4 6.6 9.4 2.27 1.26 4.93 1.93 7.74 1.95 6.25.07 12.56-3.05 16.43-8.12M242.5 135.87c-7.9 3.94-26.77 13.73-31.28 19.64-5.79 7.59-4.37 17.17 3.17 21.36 2.26 1.25 4.94 1.93 7.74 1.95 6.25.06 12.57-3.06 16.44-8.12 4.5-5.9 7.37-24.59 8.4-32.35.29-2.16-2.27-3.58-4.47-2.48m220.21 400.57c0 65.25-53.39 118.64-118.64 118.64s-118.64-53.39-118.64-118.64c0-11.87 11.86-23.73 23.72-23.73 11.87 0 23.73 11.86 23.73 23.73 0 35.59 29.66 65.25 65.25 65.25 35.6 0 65.25-29.66 65.25-65.25v-152s-107.62-.02-211.68-.03l16.09 41.87-22.4.11L200 467.63l-42.18-49.53 18.31.12-13.62-33.82c-86.19-.01-162.46 0-162.52.03V657h871.98V384.44H462.71zm-276.5-342.95c-7.91 3.95-26.79 13.75-31.28 19.65-5.79 7.58-4.37 17.16 3.18 21.35 2.27 1.26 4.93 1.93 7.74 1.95 6.26.06 12.57-3.06 16.44-8.13 4.5-5.9 7.37-24.59 8.4-32.35.28-2.15-2.28-3.57-4.48-2.47m439.89-46.82c-7.91 3.95-26.78 13.75-31.28 19.65-2.8 3.64-4.03 7.95-3.42 11.95.59 4.01 2.96 7.4 6.6 9.4 2.27 1.26 4.93 1.93 7.75 1.96 6.25.06 12.56-3.06 16.43-8.13 4.51-5.9 7.38-24.59 8.4-32.34.28-2.15-2.24-3.58-4.48-2.49" fill='#040000' />
            <path d="M.02 0v384.44c0-154.44 189.82-278.2 409.3-290.06v-17.8c0-11.87 11.86-23.73 23.73-23.73s23.73 11.86 23.73 23.73v17.8C682.18 106.24 871.98 230 872 384.44V0zm78.5 196.24c-1.03 7.76-3.9 26.45-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.82-.03-5.48-.7-7.74-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.19-1.09 4.77.33 4.48 2.48m56.3-57.61c-1.02 7.76-3.89 26.44-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.8-.02-5.48-.7-7.74-1.96-7.54-4.19-8.97-13.77-3.18-21.36 4.5-5.9 23.38-15.7 31.28-19.64 2.2-1.1 4.77.33 4.48 2.49m47.99-60.2c-1.03 7.76-3.9 26.45-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.82-.03-5.48-.7-7.74-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.19-1.09 4.76.33 4.48 2.48m56.28-57.61c-1.02 7.76-3.89 26.44-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.8-.02-5.48-.7-7.74-1.96-7.54-4.19-8.97-13.77-3.18-21.36 4.5-5.9 23.38-15.7 31.28-19.64 2.21-1.1 4.77.33 4.48 2.49m55.87 57.34c-1.03 7.76-3.9 26.45-8.4 32.35-3.87 5.07-10.18 8.19-16.44 8.13-2.82-.03-5.48-.7-7.74-1.95-7.54-4.19-8.97-13.77-3.18-21.35 4.5-5.9 23.38-15.7 31.28-19.65 2.21-1.1 4.77.32 4.48 2.47m56.3-57.62c-1.03 7.76-3.9 26.45-8.4 32.35-3.87 5.07-10.18 8.19-16.44 8.12-2.8-.02-5.48-.7-7.74-1.95-7.54-4.19-8.97-13.77-3.17-21.36 4.5-5.91 23.37-15.7 31.27-19.64 2.2-1.09 4.76.32 4.48 2.48m266.36 44.24c-1.02 7.75-3.89 26.43-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.82-.03-5.48-.7-7.74-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .63-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.21-1.11 4.77.32 4.48 2.48m17.12-28.51c-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.2-1.09 4.76.32 4.47 2.48-1.03 7.76-3.9 26.45-8.4 32.35-3.87 5.07-10.18 8.19-16.44 8.12-2.82-.03-5.48-.7-7.74-1.95-3.63-2-6.01-5.39-6.59-9.4m43.32 53.99c-1.03 7.76-3.9 26.45-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.12-2.82-.03-5.48-.7-7.75-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.21-1.09 4.77.33 4.49 2.49m51.45 21.66c-1.03 7.76-3.9 26.45-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.82-.03-5.48-.7-7.75-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.22-1.09 4.78.33 4.49 2.48m0-83.1c-1.03 7.76-3.9 26.45-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.12-2.82-.03-5.48-.7-7.75-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.22-1.09 4.78.33 4.49 2.49m48.59 31.52c-1.03 7.76-3.9 26.45-8.4 32.35-3.87 5.07-10.18 8.19-16.44 8.13-2.8-.02-5.48-.7-7.74-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .63-8.31 3.42-11.95 4.49-5.89 23.37-15.7 31.28-19.65 2.21-1.1 4.77.32 4.48 2.47m49.64-55.56c-1.03 7.76-3.9 26.45-8.4 32.34-3.87 5.07-10.18 8.19-16.44 8.13-2.82-.03-5.48-.7-7.75-1.95-3.64-2-6.01-5.38-6.6-9.4-.61-4 .62-8.31 3.42-11.95 4.5-5.9 23.38-15.7 31.28-19.65 2.22-1.1 4.78.32 4.49 2.48" fill='#040000' />
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="45" dominantBaseline="middle" textAnchor="middle"
              fontSize="24">产品标识卡</text>

            <text x='34' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='14'>供应商</text>
            <text x='68' y='99' fontSize='12'>{"${data.SupplierName ?? ''}"}</text>

            <text x='34' y='120' dominantBaseline="middle" textAnchor="middle" fontSize='14'>品名</text>
            <text x='68' y='121' fontSize='12'>{"${data.ProductName ?? ''}"}</text>

            <text x='34' y='143' dominantBaseline="middle" textAnchor="middle" fontSize='14'>规格</text>
            <text x='68' y='144' fontSize='12'>{"${data.ProductSpec ?? ''}"}</text>

            <text x='34' y='166' dominantBaseline="middle" textAnchor="middle" fontSize='14'>捆/炉号</text>
            <text x='68' y='167' fontSize='12'>{"${data.HeatNumber ?? ''}"}</text>

            <text x='34' y='189' dominantBaseline="middle" textAnchor="middle" fontSize='14'>数量</text>
            <text x='68' y='190' fontSize='12'>{"${data.Amount ?? ''}"}</text>

            <text x='34' y='213' dominantBaseline="middle" textAnchor="middle" fontSize='14'>生产日期</text>
            <text x='68' y='214' fontSize='12'>{"${data.ProductionDate ?? ''}"}</text>

            <text x='296' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='14'>采购单号</text>
            <text x='340' y='99' fontSize='12'>{"${data.ERPCode ?? ''}"}</text>

            <text x='234' y='120' dominantBaseline="middle" textAnchor="middle" fontSize='14'>牌号</text>
            <text x='264' y='121' fontSize='12'>{"${data.Mark ?? ''}"}</text>

            <text x='360' y='120' dominantBaseline="middle" textAnchor="middle" fontSize='14'>产地</text>
            <text x='390' y='121' fontSize='12'></text>

            <text x='200' y='166' dominantBaseline="middle" textAnchor="middle" fontSize='14'>批号</text>
            <text x='234' y='167' fontSize='12'>{"${data.Lot ?? ''}"}</text>

            <text x='146' y='189' dominantBaseline="middle" textAnchor="middle" fontSize='14'>净重</text>
            <text x='174' y='190' fontSize='12'>{"${data.NetWeight ?? ''}"}</text>

            <text x='250' y='189' dominantBaseline="middle" textAnchor="middle" fontSize='14'>毛重</text>
            <text x='274' y='190' fontSize='12'>{"${data.GrossWeight ?? ''}"}</text>

            <text x='200' y='213' dominantBaseline="middle" textAnchor="middle" fontSize='14'>检验员</text>
            <text x='234' y='214' fontSize='12'></text>

            <text x='392' y='214' dominantBaseline="middle" textAnchor="middle" fontSize='18'>防雨防湿</text>
          </g>
        </svg>

        <h1>委外产品标识卡（9x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="90mm" height="100mm">
          <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

          <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="28" dominantBaseline="middle" textAnchor="middle"
              fontSize="16">宁波途兴汽车部件有限公司</text>
            <text x="225" y="72" dominantBaseline="middle" textAnchor="middle" fontSize="18">委外产品标识卡</text>

            <text x="20" y="122" fontSize="16">炉号</text>
            <text x="64" y="122" fontSize="14">{"${data.HeatNumber ?? ''}"}</text>

            <text x="20" y="175" fontSize="16">委外订单号</text>
            <text x="106" y="175" fontSize="14">{"${data.OrderCode ?? ''}"}</text>
            <line x1="106" y1="180" x2="410" y2="180" stroke="#000000" strokeWidth="2" />

            <text x="20" y="226" fontSize="16">产品名称</text>
            <text x="134" y="226" fontSize="16" transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>
            <line x1="106" y1="230" x2="250" y2="230" stroke="#000000" strokeWidth="2" />
            <text x="255" y="226" fontSize="16">供应商</text>
            <text x="310" y="226" fontSize="14">{"${data.SupplierName ?? ''}"}</text>
            <line x1="310" y1="230" x2="410" y2="230" stroke="#000000" strokeWidth="2" />

            <text x="20" y="276" fontSize="16">数量</text>
            <text x="106" y="276" fontSize="14">{"${data.Amount ?? ''}"}</text>
            <line x1="106" y1="280" x2="410" y2="280" stroke="#000000" strokeWidth="2" />

            <text x="20" y="326" fontSize="16">钢印号</text>
            <text x="106" y="326" fontSize="14">{"${data.SteelSealNumber ?? ''}"}</text>
            <line x1="106" y1="330" x2="410" y2="330" stroke="#000000" strokeWidth="2" />

            <text x="20" y="376" fontSize="16">批号</text>
            <text x="106" y="376" fontSize="14">{"${data.Lot ?? ''}"}</text>
            <line x1="106" y1="380" x2="410" y2="380" stroke="#000000" strokeWidth="2" />

            <text x="20" y="426" fontSize="16">操作工</text>
            <text x="106" y="426" fontSize="14">{"${data.UserName ?? ''}"}</text>
            <line x1="106" y1="430" x2="410" y2="430" stroke="#000000" strokeWidth="2" />

            <text x="20" y="476" fontSize="16">生产日期</text>
            <text x="106" y="476" fontSize="14">{"${data.ProductionDate ?? ''}"}</text>
            <line x1="106" y1="480" x2="410" y2="480" stroke="#000000" strokeWidth="2" />
          </g>
        </svg>

        <h1>委外工序标识卡（9x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="90mm" height="100mm">
          <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

          <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="28" dominantBaseline="middle" textAnchor="middle"
              fontSize="16">宁波途兴汽车部件有限公司</text>
            <text x="225" y="62" dominantBaseline="middle" textAnchor="middle" fontSize="18">委外工序标识卡</text>

            <text x="20" y="100" fontSize="14">炉号</text>
            <text x="64" y="100" fontSize="12">{"${data.HeatNumber ?? ''}"}</text>

            <text x="20" y="120" fontSize="14">供应商</text>
            <text x="78" y="120" fontSize="12">{"${data.SupplierName ?? ''}"}</text>

            <text x="20" y="156" fontSize="16">委外任务号</text>
            <text x="106" y="156" fontSize="14">{"${data.TaskCode ?? ''}"}</text>
            <line x1="106" y1="160" x2="410" y2="160" stroke="#000000" strokeWidth="2" />

            <text x="20" y="196" fontSize="16">产品名称</text>
            <text x="134" y="196" fontSize="16" transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>
            <line x1="106" y1="200" x2="410" y2="200" stroke="#000000" strokeWidth="2" />

            <text x="20" y="236" fontSize="16">工序</text>
            <text x="134" y="236" fontSize="16" transform='scale(0.8, 1)'>{"${data.ProcessName ?? ''}"}</text>
            <line x1="106" y1="240" x2="410" y2="240" stroke="#000000" strokeWidth="2" />

            <text x="20" y="276" fontSize="16">生产批次</text>
            <text x="134" y="276" fontSize="16" transform='scale(0.8, 1)'>{"${data.Lot ?? ''}"}</text>
            <line x1="106" y1="280" x2="410" y2="280" stroke="#000000" strokeWidth="2" />

            <text x="20" y="316" fontSize="16">钢印号</text>
            <text x="106" y="316" fontSize="14">{"${data.SteelSealNumber ?? ''}"}</text>
            <line x1="106" y1="320" x2="410" y2="320" stroke="#000000" strokeWidth="2" />

            <text x="20" y="356" fontSize="16">数量</text>
            <text x="106" y="356" fontSize="14">{"${data.Amount ?? ''}"}</text>
            <line x1="106" y1="360" x2="410" y2="360" stroke="#000000" strokeWidth="2" />

            <text x="20" y="396" fontSize="16">操作工</text>
            <text x="106" y="396" fontSize="14">{"${data.UserName ?? ''}"}</text>
            <line x1="106" y1="400" x2="410" y2="400" stroke="#000000" strokeWidth="2" />

            <text x="20" y="436" fontSize="16">检验结论</text>
            <text x="106" y="436" fontSize="14">{"${data.Result ?? ''}"}</text>
            <line x1="106" y1="440" x2="410" y2="440" stroke="#000000" strokeWidth="2" />

            <text x="20" y="476" fontSize="16">生产日期</text>
            <text x="106" y="476" fontSize="14">{"${data.ProductionDate ?? ''}"}</text>
            <line x1="106" y1="480" x2="410" y2="480" stroke="#000000" strokeWidth="2" />
          </g>
        </svg>

        <h1>工序标识卡（9x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="90mm" height="100mm">
          <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

          <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="28" dominantBaseline="middle" textAnchor="middle"
              fontSize="16">宁波途兴汽车部件有限公司</text>
            <text x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">工序标识卡</text>

            <text x="20" y="132" fontSize="16">炉号</text>
            <text x="64" y="132" fontSize="14">{"${data.HeatNumber ?? ''}"}</text>

            <text x="20" y="188" fontSize="16">生产车间</text>
            <text x="94" y="188" fontSize="14">{"${data.WorkshopName ?? ''}"}</text>
            <line x1="94" y1="192" x2="236" y2="192" stroke="#000000" strokeWidth="2" />
            <text x="240" y="188" fontSize="16">班次</text>
            <text x="306" y="188" fontSize="14">{"${data.ShiftName ?? ''}"}</text>
            <line x1="306" y1="192" x2="410" y2="192" stroke="#000000" strokeWidth="2" />

            <text x="20" y="224" fontSize="16">产品名称</text>
            <text x="116" y="224" fontSize="16" transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>
            <line x1="94" y1="228" x2="236" y2="228" stroke="#000000" strokeWidth="2" />
            <text x="240" y="224" fontSize="16">图号</text>
            <text x="306" y="224" fontSize="14">{"${data.ProductDrawingNumber ?? ''}"}</text>
            <line x1="306" y1="228" x2="410" y2="228" stroke="#000000" strokeWidth="2" />

            <text x="20" y="260" fontSize="16">本道工序</text>
            <text x="94" y="260" fontSize="14">{"${data.CurrentProcessName ?? ''}"}</text>
            <line x1="94" y1="264" x2="236" y2="264" stroke="#000000" strokeWidth="2" />
            <text x="240" y="260" fontSize="16">下道工序</text>
            <text x="306" y="260" fontSize="14">{"${data.NextProcessName ?? ''}"}</text>
            <line x1="306" y1="264" x2="410" y2="264" stroke="#000000" strokeWidth="2" />

            <text x="20" y="296" fontSize="16">生产批次</text>
            <text x="94" y="296" fontSize="14">{"${data.Lot ?? ''}"}</text>
            <line x1="94" y1="300" x2="410" y2="300" stroke="#000000" strokeWidth="2" />

            <text x="20" y="332" fontSize="16">钢印号</text>
            <text x="94" y="332" fontSize="14">{"${data.SteelSealNumber ?? ''}"}</text>
            <line x1="94" y1="336" x2="410" y2="336" stroke="#000000" strokeWidth="2" />

            <text x="20" y="368" fontSize="16">数量</text>
            <text x="94" y="368" fontSize="14">{"${data.Amount ?? ''}"}</text>
            <line x1="94" y1="372" x2="410" y2="372" stroke="#000000" strokeWidth="2" />

            <text x="20" y="404" fontSize="16">操作工</text>
            <text x="94" y="404" fontSize="14">{"${data.UserName ?? ''}"}</text>
            <line x1="94" y1="408" x2="410" y2="408" stroke="#000000" strokeWidth="2" />

            <text x="20" y="440" fontSize="16">检验结论</text>
            <text x="94" y="440" fontSize="14">{"${data.Result ?? ''}"}</text>
            <line x1="94" y1="444" x2="410" y2="444" stroke="#000000" strokeWidth="2" />

            <text x="20" y="476" fontSize="16">生产日期</text>
            <text x="94" y="476" fontSize="14">{"${data.ProductionDate ?? ''}"}</text>
            <line x1="94" y1="480" x2="410" y2="480" stroke="#000000" strokeWidth="2" />
          </g>
        </svg>

        <h1>不良品标识卡（9x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="90mm" height="100mm">
          <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

          <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="28" dominantBaseline="middle" textAnchor="middle"
              fontSize="16">宁波途兴汽车部件有限公司</text>
            <text x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">不良品标识卡</text>

            <text x="436" y="144" fontSize="14" textAnchor="end">{"${data.Code ?? ''}"}</text>

            <text x="20" y="132" fontSize="16">炉号</text>
            <text x="64" y="132" fontSize="14">{"${data.HeatNumber ?? ''}"}</text>

            <text x="20" y="188" fontSize="16">生产车间</text>
            <text x="94" y="188" fontSize="14">{"${data.WorkshopName ?? ''}"}</text>
            <line x1="94" y1="192" x2="236" y2="192" stroke="#000000" strokeWidth="2" />
            <text x="240" y="188" fontSize="16">班次</text>
            <text x="306" y="188" fontSize="14">{"${data.ShiftName ?? ''}"}</text>
            <line x1="306" y1="192" x2="410" y2="192" stroke="#000000" strokeWidth="2" />

            <text x="20" y="224" fontSize="16">产品名称</text>
            <text x="116" y="224" fontSize="16" transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>
            <line x1="94" y1="228" x2="236" y2="228" stroke="#000000" strokeWidth="2" />
            <text x="240" y="224" fontSize="16">图号</text>
            <text x="306" y="224" fontSize="14">{"${data.ProductDrawingNumber ?? ''}"}</text>
            <line x1="306" y1="228" x2="410" y2="228" stroke="#000000" strokeWidth="2" />

            <text x="20" y="260" fontSize="16">本道工序</text>
            <text x="94" y="260" fontSize="14">{"${data.CurrentProcessName ?? ''}"}</text>
            <line x1="94" y1="264" x2="236" y2="264" stroke="#000000" strokeWidth="2" />
            <text x="240" y="260" fontSize="16">下道工序</text>
            <text x="306" y="260" fontSize="14">{"${data.NextProcessName ?? ''}"}</text>
            <line x1="306" y1="264" x2="410" y2="264" stroke="#000000" strokeWidth="2" />

            <text x="20" y="296" fontSize="16">生产批次</text>
            <text x="94" y="296" fontSize="14">{"${data.Lot ?? ''}"}</text>
            <line x1="94" y1="300" x2="410" y2="300" stroke="#000000" strokeWidth="2" />

            <text x="20" y="332" fontSize="16">钢印号</text>
            <text x="94" y="332" fontSize="14">{"${data.SteelSealNumber ?? ''}"}</text>
            <line x1="94" y1="336" x2="410" y2="336" stroke="#000000" strokeWidth="2" />

            <text x="20" y="368" fontSize="16">数量</text>
            <text x="94" y="368" fontSize="14">{"${data.Amount ?? ''}"}</text>
            <line x1="94" y1="372" x2="410" y2="372" stroke="#000000" strokeWidth="2" />

            <text x="20" y="404" fontSize="16">操作工</text>
            <text x="94" y="404" fontSize="14">{"${data.UserName ?? ''}"}</text>
            <line x1="94" y1="408" x2="410" y2="408" stroke="#000000" strokeWidth="2" />

            <text x="24" y="440" fontSize="16" transform='scale(0.82, 1)'>不合格原因</text>
            <text x="94" y="440" fontSize="14">{"${data.DefectTypeName ?? ''}"}</text>
            <line x1="94" y1="444" x2="410" y2="444" stroke="#000000" strokeWidth="2" />

            <text x="20" y="476" fontSize="16">生产日期</text>
            <text x="94" y="476" fontSize="14">{"${data.ProductionDate ?? ''}"}</text>
            <line x1="94" y1="480" x2="410" y2="480" stroke="#000000" strokeWidth="2" />
          </g>
        </svg>

        <h1>首件送检条码（9x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" shapeRendering="crispEdges" width="90mm" height="100mm">
          <rect x="0" y="0" width="450" height="500" fill="#ffffff" />

          <svg x="329" y="16" width="105" height="105" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="28" dominantBaseline="middle" textAnchor="middle"
              fontSize="16">宁波途兴汽车部件有限公司</text>
            <text x="225" y="76" dominantBaseline="middle" textAnchor="middle" fontSize="18">首件送检条码</text>

            <text x="436" y="144" fontSize="15" textAnchor="end">{"${data.Code ?? ''}"}</text>

            <text x="20" y="186" fontSize="16">生产车间</text>
            <text x="90" y="186" fontSize="14">{"${data.WorkshopName ?? ''}"}</text>
            <line x1="90" y1="190" x2="226" y2="190" stroke="#000000" strokeWidth="2" />
            <text x="242" y="186" fontSize="16">班次</text>
            <text x="276" y="186" fontSize="14">{"${data.ShiftName ?? ''}"}</text>
            <line x1="276" y1="190" x2="410" y2="190" stroke="#000000" strokeWidth="2" />

            <text x="20" y="230" fontSize="16">产品名称</text>
            <text x="112" y="230" fontSize="16" transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>
            <line x1="90" y1="236" x2="232" y2="236" stroke="#000000" strokeWidth="2" />
            <text x="242" y="230" fontSize="16">图号</text>
            <text x="276" y="230" fontSize="14">{"${data.ProductDrawingNumber ?? ''}"}</text>
            <line x1="276" y1="236" x2="410" y2="236" stroke="#000000" strokeWidth="2" />

            <text x="20" y="280" fontSize="16">本道工序</text>
            <text x="90" y="280" fontSize="14">{"${data.CurrentProcessName ?? ''}"}</text>
            <line x1="90" y1="284" x2="410" y2="284" stroke="#000000" strokeWidth="2" />

            <text x="20" y="330" fontSize="16">钢印号</text>
            <text x="90" y="330" fontSize="14">{"${data.SteelSealNumber ?? ''}"}</text>
            <line x1="90" y1="334" x2="410" y2="334" stroke="#000000" strokeWidth="2" />

            <text x="20" y="380" fontSize="16">送检单位</text>
            <text x="90" y="380" fontSize="14">{"${data.WorkcenterName ?? ''}"}</text>
            <line x1="90" y1="384" x2="410" y2="384" stroke="#000000" strokeWidth="2" />

            <text x="20" y="430" fontSize="16">操作工</text>
            <text x="90" y="430" fontSize="14">{"${data.UserName ?? ''}"}</text>
            <line x1="90" y1="436" x2="410" y2="436" stroke="#000000" strokeWidth="2" />

            <text x="20" y="480" fontSize="16">送检时间</text>
            <text x="90" y="480" fontSize="14">{"${data.Date ?? ''}"}</text>
            <line x1="90" y1="484" x2="410" y2="484" stroke="#000000" strokeWidth="2" />
          </g>
        </svg>

        <h1>物料标识卡（14.7x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 306" shapeRendering="crispEdges" width="147mm" height="100mm">
          <rect x="0" y="0" width="450" height="306" fill="#ffffff" />

          <svg x="20" y="20" width="90" height="90" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <image x='374' y='44' width='40' height='30' href='data:image/png;base64,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Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUdaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMSA3OS5hOGQ0NzUzNDksIDIwMjMvMDMvMjMtMTM6MDU6NDUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC43IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMi0wNVQxNDoyMTo0OSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTItMDVUMTQ6MjQ6NTUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTItMDVUMTQ6MjQ6NTUrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGU5MDAz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' />

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="64" dominantBaseline="middle" textAnchor="middle"
              fontSize="32">物料标识卡</text>

            <text x="24" y="154" fontSize="16">名称</text>
            <text x="76" y="154" fontSize="14" transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>
            <line x1="60" y1="158" x2="204" y2="158" stroke="#000000" strokeWidth="2" />
            <text x="210" y="154" fontSize="16">图号</text>
            <text x="250" y="154" fontSize="14">{"${data.ProductDrawingNumber ?? ''}"}</text>
            <line x1="250" y1="158" x2="360" y2="158" stroke="#000000" strokeWidth="2" />

            <text x="24" y="194" fontSize="16">钢印号</text>
            <text x="78" y="194" fontSize="14">{"${data.SteelSealNumber ?? ''}"}</text>
            <line x1="78" y1="198" x2="360" y2="198" stroke="#000000" strokeWidth="2" />

            <text x="24" y="234" fontSize="16">数量</text>
            <text x="64" y="234" fontSize="14">{"${data.Amount ?? ''}"}</text>
            <line x1="64" y1="238" x2="204" y2="238" stroke="#000000" strokeWidth="2" />
            <text x="210" y="234" fontSize="16">批次</text>
            <text x="250" y="234" fontSize="14">{"${data.Lot ?? ''}"}</text>
            <line x1="250" y1="238" x2="360" y2="238" stroke="#000000" strokeWidth="2" />

            <text x="24" y="274" fontSize="16">供应商</text>
            <text x="78" y="274" fontSize="14">{"${data.SupplierName ?? ''}"}</text>
            <line x1="78" y1="278" x2="204" y2="278" stroke="#000000" strokeWidth="2" />
            <text x="210" y="274" fontSize="16">生产日期</text>
            <text x="278" y="274" fontSize="14">{"${data.ProductionDate ?? ''}"}</text>
            <line x1="278" y1="278" x2="360" y2="278" stroke="#000000" strokeWidth="2" />

            <text x="384" y="116" fontSize="24">建</text>
            <text x="384" y="156" fontSize="24">新</text>
            <text x="384" y="196" fontSize="24">赵</text>
            <text x="384" y="236" fontSize="24">氏</text>
          </g>
        </svg>

        <h1>工序流转卡（14.7x10）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 306" shapeRendering="crispEdges" width="147mm" height="100mm">
          <rect x="0" y="0" width="450" height="306" fill="#ffffff" />

          <svg x="24" y="14" width="37" height="37" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25">
            <rect width="25" height="25" fill="#ffffff"></rect>
            <path fill="#000000"
              d="M0 0h7v1H0zM8 0h2v1H8zM11 0h1v1H11zM14 0h1v1H14zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM12 1h1v1H12zM16 1h1v1H16zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM14 2h3v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1H10zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM12 4h1v1H12zM14 4h1v1H14zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1H10zM12 5h2v1H12zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM9 7h1v1H9zM12 7h4v1H12zM3 8h1v1H3zM6 8h1v1H6zM9 8h2v1H9zM12 8h2v1H12zM15 8h1v1H15zM19 8h3v1H19zM23,8 h2v1H23zM4 9h1v1H4zM8 9h5v1H8zM17 9h1v1H17zM19 9h2v1H19zM22 9h1v1H22zM24,9 h1v1H24zM0 10h3v1H0zM5 10h3v1H5zM9 10h2v1H9zM13 10h1v1H13zM15 10h2v1H15zM18 10h3v1H18zM0 11h1v1H0zM2 11h3v1H2zM10 11h1v1H10zM16 11h1v1H16zM19 11h3v1H19zM0 12h2v1H0zM3 12h6v1H3zM11 12h2v1H11zM14 12h2v1H14zM18 12h1v1H18zM20 12h1v1H20zM22 12h1v1H22zM24,12 h1v1H24zM1 13h1v1H1zM3 13h2v1H3zM10 13h1v1H10zM15 13h3v1H15zM21 13h1v1H21zM23,13 h2v1H23zM0 14h1v1H0zM3 14h2v1H3zM6 14h3v1H6zM10 14h1v1H10zM14 14h1v1H14zM21 14h1v1H21zM23 14h1v1H23zM1 15h1v1H1zM5 15h1v1H5zM7 15h1v1H7zM10 15h4v1H10zM15 15h1v1H15zM17 15h3v1H17zM24,15 h1v1H24zM0 16h2v1H0zM3 16h2v1H3zM6 16h2v1H6zM9 16h2v1H9zM16 16h5v1H16zM24,16 h1v1H24zM8 17h1v1H8zM11 17h3v1H11zM15 17h2v1H15zM20 17h2v1H20zM23 17h1v1H23zM0 18h7v1H0zM9 18h2v1H9zM12 18h1v1H12zM14 18h1v1H14zM16 18h1v1H16zM18 18h1v1H18zM20 18h1v1H20zM22 18h2v1H22zM0 19h1v1H0zM6 19h1v1H6zM11 19h1v1H11zM13 19h2v1H13zM16 19h1v1H16zM20 19h1v1H20zM22,19 h3v1H22zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM10 20h1v1H10zM12 20h2v1H12zM15 20h6v1H15zM22 20h1v1H22zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM8 21h1v1H8zM11 21h2v1H11zM14 21h3v1H14zM18 21h2v1H18zM21 21h1v1H21zM23 21h1v1H23zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM9 22h1v1H9zM12 22h2v1H12zM15 22h2v1H15zM18 22h3v1H18zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h2v1H9zM14 23h1v1H14zM19 23h3v1H19zM24,23 h1v1H24zM0 24h7v1H0zM9 24h1v1H9zM11 24h1v1H11zM16 24h3v1H16zM20 24h1v1H20zM22 24h1v1H22zM24,24 h1v1H24z">
            </path>
          </svg>

          <g fontWeight="800" fontFamily="微软雅黑" fill="#000000">
            <text x="225" y="32" dominantBaseline="middle" textAnchor="middle" fontSize="13">建新赵氏科技有限公司减震骨架生产工序流转卡</text>

            <rect x="14" y="58" width="422" height="217" fill="#ffffff" stroke='#000000' strokeWidth='1' />

            <line x1="14" y1="82" x2="436" y2="82" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="106" x2="436" y2="106" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="130" x2="436" y2="130" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="154" x2="436" y2="154" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="178" x2="436" y2="178" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="202" x2="436" y2="202" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="226" x2="436" y2="226" stroke="#000000" strokeWidth="1" />
            <line x1="14" y1="250" x2="436" y2="250" stroke="#000000" strokeWidth="1" />

            <line x1="64" y1="58" x2="64" y2="275" stroke="#000000" strokeWidth="1" />
            <line x1="158" y1="58" x2="158" y2="275" stroke="#000000" strokeWidth="1" />
            <line x1="208" y1="58" x2="208" y2="275" stroke="#000000" strokeWidth="1" />
            <line x1="258" y1="106" x2="258" y2="275" stroke="#000000" strokeWidth="1" />
            <line x1="308" y1="58" x2="308" y2="275" stroke="#000000" strokeWidth="1" />
            <line x1="360" y1="58" x2="360" y2="275" stroke="#000000" strokeWidth="1" />

            <text x='38' y='74' dominantBaseline="middle" textAnchor="middle" fontSize='8'>日期</text>
            <text x='112' y='74' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.ProductionDate ?? ''}"}</text>

            <text x='38' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='8'>生产批次</text>
            <text x='112' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Lot ?? ''}"}</text>

            <text x='183' y='74' dominantBaseline="middle" textAnchor="middle" fontSize='8'>物料编码</text>
            <text x='258' y='74' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.ProductCode ?? ''}"}</text>

            <text x='183' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='8'>数量</text>
            <text x='258' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Amount ?? ''}"}</text>

            <text x='334' y='74' dominantBaseline="middle" textAnchor="middle" fontSize='8'>物料名称</text>
            <text x='498' y='74' dominantBaseline="middle" textAnchor="middle" fontSize='8' transform='scale(0.8, 1)'>{"${data.ProductName ?? ''}"}</text>

            <text x='334' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='8'>产品图号</text>
            <text x='398' y='98' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.ProductDrawingNumber ?? ''}"}</text>

            <text x='112' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>流转工序</text>
            <text x='182' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>订单号</text>
            <text x='232' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>班次</text>
            <text x='282' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>生产时间</text>
            <text x='334' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>工序完成时间</text>
            <text x='398' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>操作人员</text>

            <text x='38' y='122' dominantBaseline="middle" textAnchor="middle" fontSize='8'>序号</text>

            <text x='38' y='146' dominantBaseline="middle" textAnchor="middle" fontSize='8'>1</text>
            <text x='112' y='146' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Process[0] ?? ''}"}</text>

            <text x='38' y='170' dominantBaseline="middle" textAnchor="middle" fontSize='8'>2</text>
            <text x='112' y='170' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Process[1] ?? ''}"}</text>

            <text x='38' y='194' dominantBaseline="middle" textAnchor="middle" fontSize='8'>3</text>
            <text x='112' y='194' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Process[2] ?? ''}"}</text>

            <text x='38' y='218' dominantBaseline="middle" textAnchor="middle" fontSize='8'>4</text>
            <text x='112' y='218' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Process[3] ?? ''}"}</text>

            <text x='38' y='242' dominantBaseline="middle" textAnchor="middle" fontSize='8'>5</text>
            <text x='112' y='242' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Process[4] ?? ''}"}</text>

            <text x='38' y='266' dominantBaseline="middle" textAnchor="middle" fontSize='8'>6</text>
            <text x='112' y='266' dominantBaseline="middle" textAnchor="middle" fontSize='7'>{"${data.Process[5] ?? ''}"}</text>

            <text x="20" y="294" fontSize="8">送货单位/送货人：</text>
            <text x="250" y="294" fontSize="8">送货单位/送货人：</text>
          </g>
        </svg>

        <h1>供应商标签（5x8）</h1>

        <svg style={{ boxShadow: '0px 0px 20px 6px rgba(0,0,0,0.2)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 720" shapeRendering="crispEdges" width="50mm" height="80mm">
          <rect x="0" y="0" width="450" height="720" fill="#ffffff" />
          <g fontWeight="900" fontFamily="微软雅黑" fill="#000000">
            <text transform='scale(.9 1)' x="225" y="54" dominantBaseline="middle" textAnchor="middle" fontSize="34">底盘供应商标签</text>

            <text transform='scale(.9 1)' x="26" y="112" fontSize="26">采购订单：{"${data.ERPCode ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="152" fontSize="26">物料号：{"${data.ProductCode ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="192" fontSize="26">{"${data.ProductName?.split('-')?.[0] ?? ''}-"}</text>
            <text transform='scale(.9 1)' x="26" y="218" fontSize="26">{"${data.ProductName?.split('-')?.[1] ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="258" fontSize="26">生产日期：{"${data.ProductionDate ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="298" fontSize="26">批次：{"${data.Lot ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="338" fontSize="26">炉号：{"${data.HeatNumber ?? ''}"}</text>
            <text transform='scale(.9 1)' x="253" y="338" fontSize="26">数量：{"${data.Amount ?? ''}${data.UnitName ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="380" fontSize="26">供应商：{"${data.Supplier ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="420" fontSize="26">生产地址：{"${data.Address ?? ''}"}</text>

            <text transform='scale(.9 1)' x="26" y="460" fontSize="26">追溯号：{"${data.TraceCode ?? ''}"}</text>
          </g>

          <svg x="135" y="510" width="180" height="180" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg"
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
}

export default App
