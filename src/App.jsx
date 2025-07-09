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

let proLineName = '装配线名称'

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
      if (!target) return ''

      return target.text
    }

    const formatStandards = (text) => {
      if (text) {
        return JSON.parse(text).map((item) => {
          return item.name + '：' + item.value
        }).join('\n')
      }
      return ''
    }

    const data = [
      [`包装 ${proLineName} 线巡检记录表`, null, null, null, null, null, null, null, null, null],
      [`销售订单号：${xlsxData.saleCode || ''}`, null, null, `批号：${xlsxData.batchNo || ''}`, null, null, `规格型号：${xlsxData.materialModel || ''}`, null, `日期：${xlsxData.textTime || ''}`, null],
      ['巡检开始时间（时：分）', null, null, '', null, null, null, null, null, null, null],
      ['类别', '检验项', null, '标准值', '实测值', null, null, null, null, null, null],
      ...xlsxData.performanceTestingItemList.map((l, i) => [
        i === 0 ? '性能检测'.split('').join('\n') : null,
        l.checkProjectName,
        formatStandards(l.standards),
        ...(l.realitySizes || []),
      ]),
      ...xlsxData.visualInspectionItemList.map((l, i) => [
        i === 0 ? '外观检验'.split('').join('\n') : null,
        l.checkProjectName,
        null,
        ...(l.realitySizes || []),
      ]),
      ...xlsxData.inspectionPackingItemList.map((l, i) => [
        i === 0 ? '包装方式检查'.split('').join('\n') : null,
        l.checkProjectName,
        null,
        ...(l.realitySizes || []),
      ]),
      ['判定（OK/NG）', null, null, ...(xlsxData.decision.realitySizes || [])],
      ['职位', null, null, ...(xlsxData.posts.realitySizes || [])],
      ['姓名（签字）', null, null, ...(xlsxData.nameSignature.realitySizes || [])],
      ['巡检结束时间（时：分）', null, null, ...(xlsxData.inspectionCheckEndTime.realitySizes || [])],
      ['异常处理记录：', null, null, null, null, null, null, null, null, null],
      [`注： 
1、当抽样超标后应在“异常处理记录”中记录处理过程。
2、“功能性参数检测”和“称重”项目抽检5个，填写实测值范围值。
3、“外观检验项”抽检30-50PCS。
4、检验项不适用打“/”。
5、IPQC和组长： 4H/次 ；QA和车间主管 ：  每天/次（多次换线时，只需在当时报表上填写记录）。`, null, null, null, null, null, null, null, null, null],
      [`审核：${getResultText(xlsxData.ultimatelyCheckResult)}`, null, `日期：${xlsxData.textTime || ''}`, null, null, `表单编号：SG-QR-145 版本：  A/1`, null, null, null, null],
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 45,
      },
      {
        wpx: 132,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
      {
        wpx: 94,
      },
    ]
    workSheet['!rows'] = [
      {
        hpx: 84,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
      {
        hpx: 136,
      },
      {
        hpx: 136,
      },
      {
        hpx: 36,
      },
    ]
    workSheet['!merges'] = [
      {
        s: { r: 0, c: 0, },
        e: { r: 0, c: 9, },
      },
      {
        s: { r: 1, c: 0, },
        e: { r: 1, c: 2, },
      },
      {
        s: { r: 1, c: 3, },
        e: { r: 1, c: 5, },
      },
      {
        s: { r: 1, c: 6, },
        e: { r: 1, c: 7, },
      },
      {
        s: { r: 1, c: 8, },
        e: { r: 1, c: 9, },
      },
      {
        s: { r: 2, c: 0, },
        e: { r: 2, c: 2, },
      },
      {
        s: { r: 2, c: 3, },
        e: { r: 2, c: 9, },
      },
      {
        s: { r: 4, c: 3, },
        e: { r: 4, c: 9, },
      },
      {
        s: { r: 4, c: 0, },
        e: { r: 9, c: 0, },
      },
      {
        s: { r: 10, c: 0, },
        e: { r: 13, c: 0, },
      },
      {
        s: { r: 14, c: 0, },
        e: { r: 20, c: 0, },
      },

      {
        s: { r: 10, c: 1, },
        e: { r: 10, c: 2, },
      },
      {
        s: { r: 11, c: 1, },
        e: { r: 11, c: 2, },
      },
      {
        s: { r: 12, c: 1, },
        e: { r: 12, c: 2, },
      },
      {
        s: { r: 13, c: 1, },
        e: { r: 13, c: 2, },
      },
      {
        s: { r: 14, c: 1, },
        e: { r: 14, c: 2, },
      },
      {
        s: { r: 15, c: 1, },
        e: { r: 15, c: 2, },
      },
      {
        s: { r: 16, c: 1, },
        e: { r: 16, c: 2, },
      },
      {
        s: { r: 17, c: 1, },
        e: { r: 17, c: 2, },
      },
      {
        s: { r: 18, c: 1, },
        e: { r: 18, c: 2, },
      },
      {
        s: { r: 19, c: 1, },
        e: { r: 19, c: 2, },
      },
      {
        s: { r: 20, c: 1, },
        e: { r: 20, c: 2, },
      },
      {
        s: { r: 21, c: 0, },
        e: { r: 21, c: 2, },
      },
      {
        s: { r: 22, c: 0, },
        e: { r: 22, c: 2, },
      },
      {
        s: { r: 23, c: 0, },
        e: { r: 23, c: 2, },
      },
      {
        s: { r: 24, c: 0, },
        e: { r: 24, c: 2, },
      },
      {
        s: { r: 25, c: 0, },
        e: { r: 25, c: 9, },
      },
      {
        s: { r: 26, c: 0, },
        e: { r: 26, c: 9, },
      },
      {
        s: { r: 27, c: 0, },
        e: { r: 27, c: 1, },
      },
      {
        s: { r: 27, c: 2, },
        e: { r: 27, c: 4, },
      },
      {
        s: { r: 27, c: 5, },
        e: { r: 27, c: 9, },
      },
    ]

    Array.from({ length: 28 }).forEach((_, i) => {
      const idx = i + 1
      'abcdefghij'.split('').map((l) => l.toUpperCase()).forEach((l) => {
        if (!workSheet[l + idx]) return
        workSheet[l + idx].s = {
          font: {
            sz: 14,
            name: '宋体',
          },
          alignment: {
            vertical: 'center',
            horizontal: 'center',
            wrapText: 1,
          },
        }
      })
    })

    workSheet['A26'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        wrapText: 1,
      },
    }
    workSheet['A27'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        wrapText: 1,
      },
    }
    workSheet['A1'].s = {
      font: {
        sz: 24,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        horizontal: 'center',
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
