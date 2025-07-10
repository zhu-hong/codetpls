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
      [`${proLineName}巡检记录表`, null, null, null, null, null, null, null, null, null],
      [`销售订单号：${xlsxData.saleCode || ''}`, null, null, `批号：${xlsxData.batchNo || ''}`, null, null, `规格型号：${xlsxData.materialModel || ''}`, null, `日期：${xlsxData.endTime || ''}`, null],
      ['巡检开始时间（时：分）', xlsxData.textTime, null, null, null, null, null, null, null, null],
      ['类别', '检验项', '标准值', '实测值', null, null, null, null, null, null],
      ['气密性测试', '泄漏值(KPA）', formatStandards(xlsxData.airTightnessItemList[0].standards), ...(xlsxData.airTightnessItemList[0].realitySizes || [])],
      [null, '保持值(KPA）', formatStandards(xlsxData.airTightnessItemList[1].standards), ...(xlsxData.airTightnessItemList[1].realitySizes || [])],
      [null, 'OK样品检查', formatStandards(xlsxData.airTightnessItemList[2].standards), ...(xlsxData.airTightnessItemList[2].realitySizes || [])],
      [null, 'NG样品检查', formatStandards(xlsxData.airTightnessItemList[3].standards), ...(xlsxData.airTightnessItemList[3].realitySizes || [])],
      ['功能性参数监测', '工作电流(MA)', formatStandards(xlsxData.functionalityItemList[0].standards), ...(xlsxData.functionalityItemList[0].realitySizes || [])],
      [null, '充电电流(MA)', formatStandards(xlsxData.functionalityItemList[1].standards), ...(xlsxData.functionalityItemList[1].realitySizes || [])],
      [null, '静耗电流(UA)', formatStandards(xlsxData.functionalityItemList[2].standards), ...(xlsxData.functionalityItemList[2].realitySizes || [])],
      [null, '噪音（dB）', formatStandards(xlsxData.functionalityItemList[3].standards), ...(xlsxData.functionalityItemList[3].realitySizes || [])],
      ['其它检验项', '零件固定', null, ...(xlsxData.otherItemList[0].realitySizes || [])],
      [null, '配合/手感/间隙', null, ...(xlsxData.otherItemList[1].realitySizes || [])],
      [null, '焊接', null, ...(xlsxData.otherItemList[2].realitySizes || [])],
      [null, '仪器设备', null, ...(xlsxData.otherItemList[3].realitySizes || [])],
      [null, '外观', null, ...(xlsxData.otherItemList[4].realitySizes || [])],
      [null, '杂物', null, ...(xlsxData.otherItemList[5].realitySizes || [])],
      [null, '产品功能', null, ...(xlsxData.otherItemList[6].realitySizes || [])],
      [null, '作业指导书', null, ...(xlsxData.otherItemList[7].realitySizes || [])],
      [null, '工装夹具', null, ...(xlsxData.otherItemList[8].realitySizes || [])],
      ['判定（OK/NG）', null, null, ...(xlsxData.otherItemList[8].realitySizes || [])],
      ['职位', null, null, ...(xlsxData.otherItemList[8].realitySizes || [])],
      ['姓名（签名）', null, null, ...(xlsxData.otherItemList[8].realitySizes || [])],
      ['巡检结束时间（时：分）', null, null, ...(xlsxData.otherItemList[8].realitySizes || [])],
      ['异常处理记录：', null, null, null, null, null, null, null, null, null],
      [`注： 
1、当抽样超标后应在“异常处理记录”中记录处理过程。
2、“其它检验项目”抽检30-50PCS。
3、“功能性参数检测”和“气密性测试”项目抽检5个，填写实测值范围。
4、检验项不适用打“/”。
5、IPQC和组长： 4H/次 ；QA和车间主管 ：  每天/次（多次换线时，只需在当时报表上填写记录）。`, null, null, null, null, null, null, null, null, null],
      [`审核：${getResultText(xlsxData.ultimatelyCheckResult)}`, null, null, `日期：${xlsxData.endTime || ''}`, null, null, '表单编号：SG-QR-144 版本：  A/1', null, null, null],
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 64,
      },
      {
        wpx: 96,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
      },
      {
        wpx: 64,
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
        hpx: 166,
      },
      {
        hpx: 166,
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
        s: { r: 3, c: 3, },
        e: { r: 3, c: 9, },
      },
      {
        s: { r: 4, c: 0, },
        e: { r: 7, c: 0, },
      },
      {
        s: { r: 8, c: 0, },
        e: { r: 11, c: 0, },
      },
      {
        s: { r: 12, c: 0, },
        e: { r: 20, c: 0, },
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
        e: { r: 27, c: 2, },
      },
      {
        s: { r: 27, c: 3, },
        e: { r: 27, c: 5, },
      },
      {
        s: { r: 27, c: 6, },
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
