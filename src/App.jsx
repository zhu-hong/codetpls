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
      ['植毛车间首件记录表', null, null, null, null],
      ['产品型号/规格：', `订单号：${xlsxData.saleCode || ''}`, '', `产品型号：${xlsxData.materialModel || ''}`, `批号：${xlsxData.productBatch || ''}`],
      ['检验项目', '标准值', '领班确认结果', '巡检确认结果', '备注'],
      ...xlsxData.checkItemList.map((c) => [
        c.checkProjectName,
        c.standards,
        c.foremanCheckResult,
        c.inspectionCheckResult,
        c.checkRemark,
      ]),
      ['异常处理记录：', null, null, null, null],
      [`注：1、物料规格/实际参数由送检人填写；
    2、确认结果，由品管人员根据订单要求进行确认；
    3、销售订单要求业务确认的订单，品管确认后还需业务签字确认。`, null, null, null, null],
      [`确认结果：            确认人：                  审核：                日期：${xlsxData.textTime}   
                                                      表单编号：${xlsxData.fromNo} 版本/次：${xlsxData.fromVersion}`, null, null, null, null],
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 120,
      },
      {
        wpx: 120,
      },
      {
        wpx: 120,
      },
      {
        wpx: 120,
      },
      {
        wpx: 120,
      },
    ]
    workSheet['!rows'] = [
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 40,
      },
      {
        hpx: 100,
      },
      {
        hpx: 40,
      },
    ]
    workSheet['!merges'] = [
      {
        s: { r: 0, c: 0, },
        e: { r: 0, c: 4, },
      },
      {
        s: { r: 1, c: 1, },
        e: { r: 1, c: 2, },
      },
      {
        s: { r: 18, c: 0, },
        e: { r: 18, c: 4, },
      },
      {
        s: { r: 18 + 1, c: 0, },
        e: { r: 18 + 1, c: 4, },
      },
      {
        s: { r: 18 + 2, c: 0, },
        e: { r: 18 + 2, c: 4, },
      },
    ]

    Array.from({ length: 21 }).forEach((_, i) => {
      const idx = i + 1
      'abcde'.split('').map((l) => l.toUpperCase()).forEach((l) => {
        workSheet[l+idx].s = {
          font: {
            sz: 14,
            name: '宋体',
          },
          alignment: {
            vertical: 'center',
            horizontal: 'center',
          },
        }
      })
    })
    workSheet['A1'].s = {
      font: {
        sz: 18,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    workSheet['B2'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['D2'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['E2'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['A19'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        wrapText: 1,
      },
    }
    workSheet['A20'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        wrapText: 1,
      },
    }
    workSheet['A21'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        wrapText: 1,
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
