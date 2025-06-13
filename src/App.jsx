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
      ['表面处理车间首件记录表', null, null, null, null],
      [`订单号：${xlsxData.saleCode || ''}`, null, `规格型号：${xlsxData.materialModel || ''}`, `订单数量：${xlsxData.releaseQty || ''}`, null],
      [`送检人：${xlsxData.textMan || ''}`, null, `烘烤温度/时间：${xlsxData.bakeWarmTime || ''}`, `喷漆工艺：${xlsxData.paintingProcess || ''}`, null],
      [`送检日期：${xlsxData.textTime || ''}`, null, `调油比例（油漆：固化剂：水）：${xlsxData.blendingRatio || ''}`, '', null],
      ['检验项', null, '测试结果', '确认结果', '确认时间/确认人'],
      ['用料', null, xlsxData.materials ? getResultText(xlsxData.materials.checkResult) : '', xlsxData.materials ? getResultText(xlsxData.materials.confirmCheckResult) : '', ''],
      ['流量（s）', null, xlsxData.materials ? getResultText(xlsxData.flowRate.checkResult) : '', xlsxData.flowRate ? getResultText(xlsxData.materials.confirmCheckResult) : '', null],
      [`试喷（大货前一天试喷测试验证）`, '百格测试', getResultText(xlsxData.testSprayList[0].checkResult), getResultText(xlsxData.testSprayList[0].checkResult), null],
      [null, '直接粘贴测试', getResultText(xlsxData.testSprayList[1].checkResult), getResultText(xlsxData.testSprayList[1].checkResult), null],
      [null, '耐醇测试', getResultText(xlsxData.testSprayList[2].checkResult), getResultText(xlsxData.testSprayList[2].checkResult), null],
      [null, '膜厚测试', getResultText(xlsxData.testSprayList[3].checkResult), getResultText(xlsxData.testSprayList[3].checkResult), null],
      [null, '水煮测试', getResultText(xlsxData.testSprayList[4].checkResult), getResultText(xlsxData.testSprayList[4].checkResult), null],
      [null, '反粘测试', getResultText(xlsxData.testSprayList[5].checkResult), getResultText(xlsxData.testSprayList[5].checkResult), null],
      [`色差检验`, 'A面', getResultText(xlsxData.chromaticAberrationTestList[0].checkResult), getResultText(xlsxData.chromaticAberrationTestList[0].checkResult), ''],
      [null, 'B面', getResultText(xlsxData.chromaticAberrationTestList[1].checkResult), getResultText(xlsxData.chromaticAberrationTestList[1].checkResult), null],
      [null, 'C面', getResultText(xlsxData.chromaticAberrationTestList[2].checkResult), getResultText(xlsxData.chromaticAberrationTestList[2].checkResult), null],
      [`附着力`, '百格测试', getResultText(xlsxData.adhesionList[0].checkResult), getResultText(xlsxData.adhesionList[0].checkResult), ''],
      [null, '直接粘贴测试', getResultText(xlsxData.adhesionList[1].checkResult), getResultText(xlsxData.adhesionList[1].checkResult), null],
      [null, '耐醇测试', getResultText(xlsxData.adhesionList[2].checkResult), getResultText(xlsxData.adhesionList[2].checkResult), null],
      [null, '膜厚测试', getResultText(xlsxData.adhesionList[3].checkResult), getResultText(xlsxData.adhesionList[3].checkResult), null],
      [`外观检验`, '透光检验', getResultText(xlsxData.visualInspectionList[0].checkResult), getResultText(xlsxData.visualInspectionList[0].checkResult), ''],
      [null, '积油', getResultText(xlsxData.visualInspectionList[1].checkResult), getResultText(xlsxData.visualInspectionList[1].checkResult), null],
      [null, '少油', getResultText(xlsxData.visualInspectionList[2].checkResult), getResultText(xlsxData.visualInspectionList[2].checkResult), null],
      [null, '飞油', getResultText(xlsxData.visualInspectionList[3].checkResult), getResultText(xlsxData.visualInspectionList[3].checkResult), null],
      [null, '脏污', getResultText(xlsxData.visualInspectionList[4].checkResult), getResultText(xlsxData.visualInspectionList[4].checkResult), null],
      [null, '哑色', getResultText(xlsxData.visualInspectionList[5].checkResult), getResultText(xlsxData.visualInspectionList[5].checkResult), null],
      [null, '烧底', getResultText(xlsxData.visualInspectionList[6].checkResult), getResultText(xlsxData.visualInspectionList[6].checkResult), null],
      [`喷涂位置`, '核对订单要求', getResultText(xlsxData.sprayingPositionList[0].checkResult), getResultText(xlsxData.sprayingPositionList[0].checkResult), null],
      [`异常处理记录`, null, null, null, null],
      [`备注：1、测试结果由送检人填写，确认结果由巡检填写。不适用检验项打“/”，透光检验适用于透光主体。                   
      2、首件记录表与喷漆工艺参数表一起提交，由IPQC复测工艺参数（工艺参数和首件提交后默认参数是被生产确认过
      3、大货生产前一天需进行大货试喷验证，验证通过后可生产大货，大货前一天未试喷测试验证的不允许生产大货`, null, null, null, null],
      [`   生产：${getResultText(xlsxData.ultimatelyCheckResult)}                                   审核：                                          日期：${xlsxData.textTime || ''}    				`, null, null, null, null],
      [`表单编号：SG-QR-146 版本/次：A/3`, null, null, null, null],
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 96,
      },
      {
        wpx: 120,
      },
      {
        wpx: 320,
      },
      {
        wpx: 96,
      },
      {
        wpx: 132,
      },
    ]
    workSheet['!rows'] = [
      {
        hpx: 48,
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
        hpx: 72,
      },
      {
        hpx: 96,
      },
      {
        hpx: 36,
      },
      {
        hpx: 36,
      },
    ]
    workSheet['!merges'] = [
      {
        s: { r: 0, c: 0, },
        e: { r: 0, c: 4, },
      },
      {
        s: { r: 1, c: 0, },
        e: { r: 1, c: 1, },
      },
      {
        s: { r: 1, c: 3, },
        e: { r: 1, c: 4, },
      },
      {
        s: { r: 2, c: 0, },
        e: { r: 2, c: 1, },
      },
      {
        s: { r: 2, c: 3, },
        e: { r: 2, c: 4, },
      },
      {
        s: { r: 3, c: 0, },
        e: { r: 3, c: 1, },
      },
      {
        s: { r: 3, c: 3, },
        e: { r: 3, c: 4, },
      },
      {
        s: { r: 4, c: 0, },
        e: { r: 4, c: 1, },
      },
      {
        s: { r: 5, c: 0, },
        e: { r: 5, c: 1, },
      },
      {
        s: { r: 5, c: 4, },
        e: { r: 12, c: 4, },
      },
      {
        s: { r: 6, c: 0, },
        e: { r: 6, c: 1, },
      },
      {
        s: { r: 7, c: 0, },
        e: { r: 12, c: 0, },
      },
      {
        s: { r: 13, c: 0, },
        e: { r: 15, c: 0, },
      },
      {
        s: { r: 16, c: 0, },
        e: { r: 19, c: 0, },
      },
      {
        s: { r: 20, c: 0, },
        e: { r: 26, c: 0, },
      },
      {
        s: { r: 13, c: 4, },
        e: { r: 27, c: 4, },
      },
      {
        s: { r: 28, c: 0, },
        e: { r: 28, c: 4, },
      },
      {
        s: { r: 29, c: 0, },
        e: { r: 29, c: 4, },
      },
      {
        s: { r: 30, c: 0, },
        e: { r: 30, c: 4, },
      },
      {
        s: { r: 31, c: 0, },
        e: { r: 31, c: 4, },
      },
    ]

    Array.from({ length: 32 }).forEach((_, i) => {
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
            wrapText: 1,
          },
        }
      })
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
