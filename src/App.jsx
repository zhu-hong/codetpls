import Panzoom from './pan-zoom'
import { useRef, useEffect } from 'react'
import * as xlsx from 'xlsx-js-style'
import xlsxData from '../data.json'

const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i !== s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff
  }
  return buf
}

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

  const exportXlsx = () => {
    const workBook = xlsx.utils.book_new()

    const appearance = xlsxData.xlsx.filter((x) => x.type === 0)
    console.log(appearance)
    appearance.map((a, i) => {
      return [
        i === 0 ? '外观' : null,
      ]
    })

    const workSheet = xlsx.utils.json_to_sheet([
      ['装配车间首件检验记录表（组装）', null, null, null, null, null, null, null],
      ['销售订单：', null, '批号：', null, '规格型号：', '订单数量：', '日期：', '组别：'],
      ['首件制作/确认开始时间', null, null, '', '', '检验依据及确认文件', null, null],
      ['检验类', '检验项目', null, '检查结果/结论', '确认结果/结论', null, null, null],
    ], {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 135,
      },
      {
        wpx: 200,
      },
      {
        wpx: 160,
      },
      {
        wpx: 240,
      },
      {
        wpx: 250,
      },
      {
        wpx: 230,
      },
      {
        wpx: 220,
      },
      {
        wpx: 150,
      },
    ]
    workSheet['!rows'] = [
      {
        hpx: 114,
      },
      {
        hpx: 60,
      },
      {
        hpx: 50,
      },
      {
        hpx: 50,
      },
    ]
    workSheet['!merges'] = [
      // 装配车间首件检验记录表（组装）
      {
        s: { r: 0, c: 0 },
        e: { r: 0, c: 7 },
      },
      // 销售订单：
      {
        s: { r: 1, c: 0 },
        e: { r: 1, c: 1 },
      },
      // 批号：
      {
        s: { r: 1, c: 2 },
        e: { r: 1, c: 3 },
      },
      // 首件制作/确认开始时间
      {
        s: { r: 2, c: 0 },
        e: { r: 2, c: 2 },
      },
      // 检验依据及确认文件
      {
        s: { r: 2, c: 5 },
        e: { r: 3, c: 7 },
      },
      // 检验项目
      {
        s: { r: 3, c: 1 },
        e: { r: 3, c: 2 },
      },
    ]

    workSheet['A1'].s = {
      font: {
        sz: 24,
        bold: true,
        name: '宋体',
      },
      alignment: {
        horizontal: 'center',
        vertical: 'center',
      },
    }
    workSheet['A2'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['C2'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['E2'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['F2'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['G2'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['H2'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['A3'].s = {
      font: {
        sz: 20,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    workSheet['F3'].s = {
      font: {
        sz: 20,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    workSheet['A4'].s = {
      font: {
        sz: 20,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    workSheet['B4'].s = {
      font: {
        sz: 20,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    workSheet['D4'].s = {
      font: {
        sz: 20,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    workSheet['E4'].s = {
      font: {
        sz: 20,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }

    xlsx.utils.book_append_sheet(workBook, workSheet, 'sheet')

    const url = URL.createObjectURL(new Blob([s2ab(xlsx.write(workBook, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary',
    }))]))

    const a = document.createElement('a')
    a.href = url
    a.download = 'SheetJSTableExport.xlsx'

    a.dispatchEvent(new MouseEvent('click'))
    URL.revokeObjectURL(url)
  }

  return <div className="fixed top-0 bottom-0 left-0 right-0 overflow-hidden" ref={eventArea}>
    <div ref={ref} style={{ transformOrigin: '0 0' }}>
      <button onClick={exportXlsx}>导出</button>
    </div>
  </div>
}

export default App
