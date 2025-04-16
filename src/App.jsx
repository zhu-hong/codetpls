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

    const data = [
      ['注塑车间巡检表', null, null, null, null, null, null, null, null, null],
      [`销售订单号：${xlsxData.saleCode || ''}`, null, null, `型号规格：${xlsxData.materialModel || ''}`, null, `日期：${xlsxData.endTime || ''}`, null, `机台：${xlsxData.deviceNumber || ''}`, `班次：${xlsxData.teamClass || ''}`, `用料：${xlsxData.materials || ''}`],
      [`巡检开始时间（时：分）`, xlsxData.createTime ? xlsxData.createTime.split(' ')[1].split(':').slice(1).join(':') : '', null, null, null, null, null, null, null, null],
      ['类别', '检验项', '标准值', '实际值', null, null, null, null, null, null],
      ...xlsxData.checkItemVOList.map((c, i) => [
        i === 0
        ?
        '参数检查'
        :
        null,
        c.checkProjectName,
        c.standards,
        ...(c.realitySizes || []),
      ]),
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
      {
        wpx: 110,
      },
    ]
    workSheet['!rows'] = [

    ]
    workSheet['!merges'] = [
      {
        s: { r: 0, c: 0 },
        e: { r: 0, c: 9 },
      },
      {
        s: { r: 1, c: 0 },
        e: { r: 1, c: 2 },
      },
      {
        s: { r: 1, c: 3 },
        e: { r: 1, c: 4 },
      },
      {
        s: { r: 1, c: 5 },
        e: { r: 1, c: 6 },
      },
      {
        s: { r: 2, c: 0 },
        e: { r: 2, c: 2 },
      },
      {
        s: { r: 3, c: 3 },
        e: { r: 3, c: 9 },
      },
      {
        s: { r: 4, c: 0 },
        e: { r: 4 + xlsxData.checkItemVOList.length - 1, c: 0 },
      },
    ]

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
