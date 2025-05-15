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

    function getResultText(status) {
      const l = [
        {
          "value": "10",
          "text": "合格",
          "title": "合格"
        },
        {
          "value": "1",
          "text": "合格",
          "title": "合格"
        },
        {
          "value": "-1",
          "text": "不合格",
          "title": "不合格"
        },
        {
          "value": "2",
          "text": "不适用",
          "title": "不适用"
        }
      ]

      const target = l.find((l) => l.value == status)
      if(!target) return ''

      return target.text
    }

    const data = [
      ['SMT首件确认记录表', null, null, null, null, null, null, null, null],
      ['订单号', xlsxData.saleCode, '产品型号', xlsxData.materialModel, '线别', xlsxData.workshopName, '班别', xlsxData.lineName, '日期', xlsxData.textTime],
      ['工序', '检查项目', null, null, null, '检查结果(OK/NG)', null, null, '不良情形/处理状况', null],
      [null, null, null, null, null, '1', '2', '3', null, null],
      ...xlsxData.beforeTheFurnaceVOList.map((b, i) => ([
        i === 0 ? '炉前' : null,
        `${i + 1}、` + b.checkProjectName + '____________。',
        null,
        null,
        null,
        ...b.checkResultList.slice(0, 3).map((r) => getResultText(r)),
        null,
        null,
      ])),
      ...xlsxData.aoiVoList.map((b, i) => ([
        i === 0 ? 'AOI' : null,
        `${i + 1}、` + b.checkProjectName + '____________。',
        null,
        null,
        null,
        ...b.checkResultList.slice(0, 3).map((r) => getResultText(r)),
        null,
        null,
      ])),
      ...xlsxData.functionTestVOList.map((b, i) => ([
        i === 0 ? '功能测试' : null,
        `${i + 1}、` + b.checkProjectName + '____________。',
        null,
        null,
        null,
        ...b.checkResultList.slice(0, 3).map((r) => getResultText(r)),
        null,
        null,
      ])),
      [`炉前自检：${getResultText(xlsxData.beforeTheFurnaceCheck)}          技术员确认：${getResultText(xlsxData.technicianConfirm)}          AOI自检：${getResultText(xlsxData.aoiCheck)}           QC确认：${getResultText(xlsxData.qcConfirm)}         。`, null, null, null, null, null, null, null, null,],
      [`    审核：${getResultText(xlsxData.audit)}                   日期：${xlsxData.textTime || ''}                          表单编号：${xlsxData.fromNo}   ${xlsxData.fromVersion}`, null, null, null, null, null, null, null, null,],
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
      {
        wpx: 96,
      },
    ]
    workSheet['!rows'] = [
      {
        hpx: 36,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
      {
        hpx: 24,
      },
    ]
    workSheet['!merges'] = [
      {
        s: { r: 0, c: 0 },
        e: { r: 0, c: 9 },
      },
      {
        s: { r: 2, c: 0 },
        e: { r: 3, c: 0 },
      },
      {
        s: { r: 2, c: 1 },
        e: { r: 3, c: 4 },
      },
      {
        s: { r: 2, c: 5 },
        e: { r: 2, c: 7 },
      },
      {
        s: { r: 2, c: 8 },
        e: { r: 3, c: 9 },
      },
      {
        s: { r: 4, c: 0 },
        e: { r: 8, c: 0 },
      },
      {
        s: { r: 9, c: 0 },
        e: { r: 14, c: 0 },
      },
      {
        s: { r: 15, c: 0 },
        e: { r: 18, c: 0 },
      },
      {
        s: { r: 4, c: 1 },
        e: { r: 4, c: 4 },
      },
      {
        s: { r: 5, c: 1 },
        e: { r: 5, c: 4 },
      },
      {
        s: { r: 6, c: 1 },
        e: { r: 6, c: 4 },
      },
      {
        s: { r: 7, c: 1 },
        e: { r: 7, c: 4 },
      },
      {
        s: { r: 8, c: 1 },
        e: { r: 8, c: 4 },
      },
      {
        s: { r: 9, c: 1 },
        e: { r: 9, c: 4 },
      },
      {
        s: { r: 10, c: 1 },
        e: { r: 10, c: 4 },
      },
      {
        s: { r: 11, c: 1 },
        e: { r: 11, c: 4 },
      },
      {
        s: { r: 12, c: 1 },
        e: { r: 12, c: 4 },
      },
      {
        s: { r: 13, c: 1 },
        e: { r: 13, c: 4 },
      },
      {
        s: { r: 14, c: 1 },
        e: { r: 14, c: 4 },
      },
      {
        s: { r: 15, c: 1 },
        e: { r: 15, c: 4 },
      },
      {
        s: { r: 16, c: 1 },
        e: { r: 16, c: 4 },
      },
      {
        s: { r: 17, c: 1 },
        e: { r: 17, c: 4 },
      },
      {
        s: { r: 18, c: 1 },
        e: { r: 18, c: 4 },
      },
      {
        s: { r: 4, c: 8 },
        e: { r: 18, c: 9 },
      },
      {
        s: { r: 4, c: 8 },
        e: { r: 18, c: 9 },
      },
      {
        s: { r: 19, c: 0 },
        e: { r: 19, c: 9 },
      },
      {
        s: { r: 20, c: 0 },
        e: { r: 20, c: 9 },
      },
    ]

    Array.from({ length: 21 }).forEach((_, i) => {
      const idx = i + 1
      'abcdefghij'.split('').map((l) => l.toUpperCase()).forEach((l) => {
        if(workSheet[l+idx]) {
          workSheet[l+idx].s = {
            font: {
              sz: 14,
              name: '宋体',
            },
            alignment: {
              vertical: 'center',
              horizontal: 'left',
            },
          }
        }
      })
    })
    workSheet['A1'].s = {
      font: {
        sz: 22,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
      },
    }
    ;(['A3', 'B3', 'F3', 'F4', 'G4', 'H4', 'I3', 'A5', 'A10', 'A16']).forEach((c) => {
      workSheet[c].s = {
        font: {
          sz: 14,
          name: '宋体',
          bold: true,
        },
        alignment: {
          vertical: 'center',
          horizontal: 'center',
        },
      }
    })

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
