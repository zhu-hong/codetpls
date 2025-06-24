import Panzoom from './pan-zoom'
import { useRef, useEffect } from 'react'
import * as xlsx from 'xlsx-js-style'
import xlsxData from '../data.json'
import { MentionsInput, Mention } from 'react-mentions'

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
      ['表面处理车间巡检记录表', null, null, null, null, null, null, null, null, null],
      [`订单号：${xlsxData.saleCode || ''}`, null, null, `批号：${xlsxData.processType || ''}`, null, '规格型号：', xlsxData.materialModel || '', '日期：', xlsxData.endTime || '', null],
      [`调油比例：${xlsxData.blendingRatio || ''}`, null, null, `订单数量：${xlsxData.releaseQty || ''}`, null, `喷漆工艺：${xlsxData.paintingProcess || ''}`, null, null, null, null],
      [`巡检时间（时：分）`, null, null, null, null, null, null, null, null, null],
      [`塑料件用料`, null, null, null, null, null, null, null, null, null],
      [`工艺时效`, null, null, null, null, null, null, null, null, null],
      [`颜色`, null, null, null, null, null, null, null, null, null],
      [`附着力`, '百格测试', null, null, null, null, null, null, null, null],
      [null, '直接粘贴测试', null, null, null, null, null, null, null, null],
      [null, '耐醇测试', null, null, null, null, null, null, null, null],
      [null, '膜厚测试', null, null, null, null, null, null, null, null],
      [null, '水煮测试', null, null, null, null, null, null, null, null],
      [`外观`, '色差', null, null, null, null, null, null, null, null],
      [null, '积油', null, null, null, null, null, null, null, null],
      [null, '少油', null, null, null, null, null, null, null, null],
      [null, '飞油', null, null, null, null, null, null, null, null],
      [null, '脏污', null, null, null, null, null, null, null, null],
      [null, '哑色', null, null, null, null, null, null, null, null],
      [null, '烧底', null, null, null, null, null, null, null, null],
      [null, '透光', null, null, null, null, null, null, null, null],
      [`产品摆放`, null, null, null, null, null, null, null, null, null],
      [`判定（OK/NG)		`, null, null, null, null, null, null, null, null, null],
      [`职位		`, null, null, null, null, null, null, null, null, null],
      [`姓名（签字）`, null, null, null, null, null, null, null, null, null],
      [`巡检结束时间（时：分）`, null, null, null, null, null, null, null, null, null],
      [`检验时间`, '入库数量', '抽检数量', '转序检验项目', null, null, null, null, '不良数', '结果判定'],
      [null, null, null, '用料', '颜色', '附着力', '外观', '产品摆放', null, null],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['异常处理记录：', null, null, null, null, null, null, null, null, null],
      [`注： 1、每个检验项目只填发现不合格数和不良现象； 2、当抽样超标后应在“异常处理记录”中记录处理过程；
     2、检验项不适用打“/”
     3、水煮测试每个单同一时间段只做一次测试，不同时间段多批次根据喷的批次来做测试
     4、重涂产品分开标注进行测试
     5、IPQC和组长： 4H/次 ；QA和车间主管 ：  每天/次。 （多次换线时，只需在当时报表上填写记录）`, null, null, null, null, null, null, null, null, null],
      ['审核：', null, null, null, `日期：${xlsxData.endTime || ''}`, null, '表单编号：SG-QR-101 版本：  A/3', null, null, null],
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
        hpx: 58,
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
        hpx: 84,
      },
      {
        hpx: 132,
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
        e: { r: 1, c: 4, },
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
        e: { r: 2, c: 4, },
      },
      {
        s: { r: 2, c: 5, },
        e: { r: 2, c: 9, },
      },
      {
        s: { r: 3, c: 0, },
        e: { r: 3, c: 2, },
      },
      {
        s: { r: 4, c: 0, },
        e: { r: 4, c: 2, },
      },
      {
        s: { r: 5, c: 0, },
        e: { r: 5, c: 2, },
      },
      {
        s: { r: 6, c: 0, },
        e: { r: 6, c: 2, },
      },
      {
        s: { r: 7, c: 0, },
        e: { r: 11, c: 0, },
      },
      {
        s: { r: 7, c: 1, },
        e: { r: 7, c: 2, },
      },
      {
        s: { r: 8, c: 1, },
        e: { r: 8, c: 2, },
      },
      {
        s: { r: 9, c: 1, },
        e: { r: 9, c: 2, },
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
        s: { r: 12, c: 0, },
        e: { r: 19, c: 0, },
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
        s: { r: 20, c: 0, },
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
        e: { r: 26, c: 0, },
      },
      {
        s: { r: 25, c: 1, },
        e: { r: 26, c: 1, },
      },
      {
        s: { r: 25, c: 2, },
        e: { r: 26, c: 2, },
      },
      {
        s: { r: 25, c: 8, },
        e: { r: 26, c: 8, },
      },
      {
        s: { r: 25, c: 9, },
        e: { r: 26, c: 9, },
      },
      {
        s: { r: 25, c: 3, },
        e: { r: 25, c: 7, },
      },
      {
        s: { r: 29, c: 0, },
        e: { r: 29, c: 9, },
      },
      {
        s: { r: 30, c: 0, },
        e: { r: 30, c: 9, },
      },
      {
        s: { r: 31, c: 0, },
        e: { r: 31, c: 3, },
      },
      {
        s: { r: 31, c: 4, },
        e: { r: 31, c: 5, },
      },
      {
        s: { r: 31, c: 6, },
        e: { r: 31, c: 9, },
      },
    ]

    Array.from({ length: 32 }).forEach((_, i) => {
      const idx = i + 1
      'abcdefghij'.split('').map((l) => l.toUpperCase()).forEach((l) => {
        workSheet[l+idx].s = {
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

    workSheet['A1'].s = {
      font: {
        sz: 24,
        name: '宋体',
        bold: true,
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
