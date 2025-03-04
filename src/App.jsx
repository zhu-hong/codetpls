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
      ['装配车间首件检验记录表（组装）', null, null, null, null, null, null, null],
      [`销售订单：${xlsxData.saleCode ?? 'placeholder'}`, null, `批号：${xlsxData.productBatch ?? 'placeholder'}`, null, `规格型号：${xlsxData.materialModel ?? 'placeholder'}`, `订单数量：${xlsxData.releaseQty ?? 'placeholder'}`, `日期：${xlsxData.endTime ?? 'placeholder'}`, `组别：${xlsxData.lineName ?? 'placeholder'}`],
      ['首件制作/确认开始时间', null, null, xlsxData.textTime ?? 'placeholder', null, '检验依据及确认文件', null, null],
      ['检验类', '检验项目', null, '检查结果/结论', '确认结果/结论', null, null, null],
    ]
    data.push([
      '用料',
      xlsxData.materials.checkName,
      null,
      xlsxData.materials.checkResult ?? 'placeholder',
      xlsxData.materials.confirmResult ?? 'placeholder',
      null,
      null,
      null,
    ])
    xlsxData.appearanceList.forEach((a, i) => {
      data.push([
        i === 0 ? '外观' : null,
        a.checkName ?? 'placeholder',
        null,
        a.checkResult ?? 'placeholder',
        a.confirmResult ?? 'placeholder',
        null,
        null,
        null,
      ])
    })
    data.push([
      '功能',
      '参数',
      '标准值',
      '生产实测值',
      '品质实测值',
      '检验依据及确认文件',
      null,
      null,
    ])
    xlsxData.functionList.forEach((f) => {
      data.push([
        null,
        f.checkName ?? 'placeholder',
        f.standards ?? 'placeholder',
        f.realitySizes ?? 'placeholder',
        null,
        null,
        null,
        null,
      ])
    })
    data.push([
      '过程要素',
      '生产工艺',
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    data.push([
      'null',
      '过程变更',
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    data.push([
      '制作/确认完成时间：',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    data.push([
      '制作/确认人',
      null,
      null,
      '组长：',
      'IPQC：',
      null,
      null,
      null,
    ])
    const workSheet = xlsx.utils.json_to_sheet(data, {
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
      {
        hpx: 50,
      },
      ...xlsxData.appearanceList.map((_, i) => ({
        hpx: 50,
      })),
      {
        hpx: 50,
      },
      ...xlsxData.functionList.map((_, i) => ({
        hpx: 50,
      })),
      {
        hpx: 50,
      },
      {
        hpx: 50,
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
      // 首件制作/确认开始时间 值
      {
        s: { r: 2, c: 3 },
        e: { r: 2, c: 4 },
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
      // 用料
      {
        s: { r: 4, c: 1 },
        e: { r: 4, c: 2 },
      },
      // 外观
      {
        s: { r: 5, c: 0 },
        e: { r: 5 + xlsxData.appearanceList.length - 1, c: 0 },
      },
      // 外观项
      ...xlsxData.appearanceList.map((_, i) => ({
        s: { r: 5 + i, c: 1 },
        e: { r: 5 + i, c: 2 },
      })),
      // 检验依据及确认文件1
      {
        s: { r: 4, c: 5 },
        e: { r: 4 + xlsxData.appearanceList.length, c: 7 },
      },
      // 检验依据及确认文件
      {
        s: { r: 4 + 1 + xlsxData.appearanceList.length, c: 5 },
        e: { r: 4 + 1 + xlsxData.appearanceList.length, c: 7 },
      },
      // 功能
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length, c: 0 },
      },
      // 检验依据及确认文件2
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + 1, c: 5 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length, c: 7 },
      },
      // 过程要素
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 1, c: 0 },
      },
      // 过程要素项
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1, c: 1 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1, c: 2 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 1, c: 1 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 1, c: 2 },
      },
      //
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1, c: 5 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 1, c: 7 },
      },
      // 制作/确认完成时间：
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 2, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 2, c: 2 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3, c: 2 },
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
    workSheet['D3'].s = {
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
    workSheet['A5'].s = {
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
    workSheet['B5'].s = {
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
    workSheet['D5'].s = {
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
    workSheet['E5'].s = {
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
    workSheet['A6'].s = {
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

    ;(['B', 'D', 'E']).forEach((c) => {
      xlsxData.appearanceList.forEach((_, ri) => {
        workSheet[`${c}${6 + ri}`].s = {
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
      })
    })

    ;(['A', 'B', 'C', 'D', 'E', 'F']).forEach((c) => {
      workSheet[`${c}${4 + 1 + xlsxData.appearanceList.length + 1}`].s = {
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
    })

    ;(['B', 'C', 'D', 'E']).forEach((c) => {
      xlsxData.functionList.forEach((_, ri) => {
        workSheet[`${c}${5 + xlsxData.appearanceList.length + 2 + ri}`].s = {
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
      })
    })

    ;(['A', 'B']).forEach((c) => {
      workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1}`].s = {
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
      workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2}`].s = {
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
    })

    ;(['A', 'D', 'E']).forEach((c) => {
      workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 2}`].s = {
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
      workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2}`].s = {
        font: {
          sz: 20,
          name: '宋体',
          bold: true,
        },
        alignment: {
          vertical: 'center',
          horizontal: c === 'A' ? 'center' : undefined,
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
