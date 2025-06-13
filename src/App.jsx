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
      ['SMT巡检记录表', null, null, null, null, null, null, null, null, null, null, null, null],
      [`订单号：${xlsxData.saleCode || ''}`, null, `规格型号：${xlsxData.materialModel || ''}`, null, `组别：${xlsxData.processType || ''}`, null, `日期：${xlsxData.endTime || ''}`, null, `仪器编号：${xlsxData.deviceNumber || ''}`, null, null, null, null],
      ['类别', '巡检项目', null, null, null, null, '巡线时间', null, null, null, null, null, null],
      [null, null, null, null, null, null, '', '', '', '', '', '', ''],
      ['锡膏印刷', '锡膏是否先进先出原则领用，是否在室温下解冻4H，是否填写使用时间，领用及开盖后在24H内使用', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '印锡膏之PCB板上未贴片不得在线上停留超过60分钟', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '使用前是否有搅拌3分钟，并按少量多次原则添加使用', null, null, null, null, '', '', '', '', '', '', ''],
      ['贴片', '"生产中途更换物料，调机优化必须经过组长、工程师、质控QC三方面先后确认后方可', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '工作台面是否整洁、物品摆放是否整齐、散料是否用静电袋（盒）存放', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '上板机、印刷机、贴片机、AOI日、周、月点检保养记录是否按时完成', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '在线站位表、工艺指导附件及贴片程序名是否与所生产机型名称一致', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '作业员拿板是否戴有静电环或静电手套', null, null, null, null, '', '', '', '', '', '', ''],
      ['回流焊', '回流焊炉温及链速设置是否符合作业指导书及其附件的参数设定要求', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '生产检验员是否每小时进行功能测试并做好记录报表', null, null, null, null, '', '', '', '', '', '', ''],
      ['AOI自动检测', '"经AOI检测的产品是否符合《贴片焊接检查判定标准》，AOI是否能正确的检测出良品不良品', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '检测出的良品、不良品有无标识且区分放置', null, null, null, null, '', '', '', '', '', '', ''],
      [null, '作业员拿取PCB是否戴静电环，且轻拿轻放、不可推放、摔板、叠板', null, null, null, null, '', '', '', '', '', '', ''],
      ['功能测试', '实际测试功能是否作业要求', null, '静耗', '', null, '', '', '', '', '', '', ''],
      [null, null, null, '工作电流', '', null, '', '', '', '', '', '', ''],
      [null, null, null, '充电电流', '', null, '', '', '', '', '', '', ''],
      [null, '包装摆放是否符合要求', null, null, null, null, '', '', '', '', '', '', ''],
      [`巡线结束时间：${xlsxData.endTime || ''}`, null, null, null, null, null, '', '', '', '', '', '', ''],
      [`职位：${xlsxData.posts || ''}`, null, null, null, null, null, '', '', '', '', '', '', ''],
      [`姓名（签字）：${xlsxData.textMan || ''}`, null, null, null, null, null, '', '', '', '', '', '', ''],
      [`异常处理记录：`, null, null, null, null, null, null, null, null, null, null, null, null],
      [`"注：
 1、每个检验项目只填发现不合格数和不良现象； 2、当抽样超标后IPQC应在异常处理记录中记录处理过程；
     3、每个检验项目抽检3-5PCS；4、功能测试填写实测值。5、检验项不适用打“/”"												`, null, null, null, null, null, null, null, null, null, null, null, null],
      [`巡检：${getResultText(xlsxData.ultimatelyCheckResult)}                                       审核：                            												`, null, null, null, null, null, null, null, null, null, null, null, null],
      [`表单编号：SG-QR-211  版本/次：A/1												`, null, null, null, null, null, null, null, null, null, null, null, null],
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
        hpx: 86,
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
        hpx: 56,
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
        s: { r: 0, c: 0 },
        e: { r: 0, c: 12 },
      },
      {
        s: { r: 1, c: 0 },
        e: { r: 1, c: 1 },
      },
      {
        s: { r: 1, c: 2 },
        e: { r: 1, c: 3 },
      },
      {
        s: { r: 1, c: 4 },
        e: { r: 1, c: 5 },
      },
      {
        s: { r: 1, c: 6 },
        e: { r: 1, c: 7 },
      },
      {
        s: { r: 1, c: 8 },
        e: { r: 1, c: 12 },
      },
      {
        s: { r: 2, c: 0 },
        e: { r: 3, c: 0 },
      },
      {
        s: { r: 2, c: 1 },
        e: { r: 3, c: 5 },
      },
      {
        s: { r: 2, c: 6 },
        e: { r: 2, c: 12 },
      },
      {
        s: { r: 4, c: 0 },
        e: { r: 6, c: 0 },
      },
      {
        s: { r: 4, c: 1 },
        e: { r: 4, c: 5 },
      },
      {
        s: { r: 5, c: 1 },
        e: { r: 5, c: 5 },
      },
      {
        s: { r: 6, c: 1 },
        e: { r: 6, c: 5 },
      },
      {
        s: { r: 7, c: 0 },
        e: { r: 11, c: 0 },
      },
      {
        s: { r: 7, c: 1 },
        e: { r: 7, c: 5 },
      },
      {
        s: { r: 8, c: 1 },
        e: { r: 8, c: 5 },
      },
      {
        s: { r: 9, c: 1 },
        e: { r: 9, c: 5 },
      },
      {
        s: { r: 10, c: 1 },
        e: { r: 10, c: 5 },
      },
      {
        s: { r: 11, c: 1 },
        e: { r: 11, c: 5 },
      },
      {
        s: { r: 12, c: 0 },
        e: { r: 13, c: 0 },
      },
      {
        s: { r: 12, c: 1 },
        e: { r: 12, c: 5 },
      },
      {
        s: { r: 13, c: 1 },
        e: { r: 13, c: 5 },
      },
      {
        s: { r: 14, c: 0 },
        e: { r: 16, c: 0 },
      },
      {
        s: { r: 14, c: 1 },
        e: { r: 14, c: 5 },
      },
      {
        s: { r: 15, c: 1 },
        e: { r: 15, c: 5 },
      },
      {
        s: { r: 16, c: 1 },
        e: { r: 16, c: 5 },
      },
      {
        s: { r: 17, c: 0 },
        e: { r: 20, c: 0 },
      },
      {
        s: { r: 17, c: 1 },
        e: { r: 19, c: 2 },
      },
      {
        s: { r: 17, c: 4 },
        e: { r: 17, c: 5 },
      },
      {
        s: { r: 18, c: 4 },
        e: { r: 18, c: 5 },
      },
      {
        s: { r: 19, c: 4 },
        e: { r: 19, c: 5 },
      },
      {
        s: { r: 20, c: 1 },
        e: { r: 20, c: 5 },
      },
      {
        s: { r: 21, c: 0 },
        e: { r: 21, c: 5 },
      },
      {
        s: { r: 22, c: 0 },
        e: { r: 22, c: 5 },
      },
      {
        s: { r: 23, c: 0 },
        e: { r: 23, c: 5 },
      },
      {
        s: { r: 24, c: 0 },
        e: { r: 24, c: 12 },
      },
      {
        s: { r: 25, c: 0 },
        e: { r: 25, c: 12 },
      },
      {
        s: { r: 26, c: 0 },
        e: { r: 26, c: 12 },
      },
      {
        s: { r: 27, c: 0 },
        e: { r: 27, c: 12 },
      },
    ]

    Array.from({ length: 28 }).forEach((_, i) => {
      const idx = i + 1
      'abcdefghijklm'.split('').map((l) => l.toUpperCase()).forEach((l) => {
        if(workSheet[l+idx]) {
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
