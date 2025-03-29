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
      [`销售订单：${xlsxData.saleCode || ''}`, null, `批号：${xlsxData.productBatch || ''}`, null, `规格型号：${xlsxData.materialModel || ''}`, `订单数量：${xlsxData.releaseQty || ''}`, `日期：${xlsxData.endTime || ''}`, `组别：${xlsxData.lineName || ''}`],
      ['首件制作/确认开始时间', null, null, xlsxData.textTime || '', null, '检验依据及确认文件', null, null],
      ['检验类', '检验项目', null, '检查结果/结论', '确认结果/结论', null, null, null],
    ]
    data.push([
      '用料',
      xlsxData.materials.checkName,
      null,
      xlsxData.materials.checkResult || '',
      xlsxData.materials.confirmResult || '',
      null,
      null,
      null,
    ])
    xlsxData.appearanceList.forEach((a, i) => {
      data.push([
        i === 0 ? '外观' : null,
        a.checkName || '',
        null,
        a.checkResult || '',
        a.confirmResult || '',
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
        f.checkName || '',
        f.standards || '',
        f.realitySizes || '',
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
      xlsxData.endTime,
      null,
      null,
      null,
      null,
    ])
    data.push([
      '制作/确认人',
      null,
      null,
      '组长：' + xlsxData.textMan || '',
      'IPQC：',
      null,
      null,
      null,
    ])
    data.push([
      '生产主管&QA确认项',
      null,
      null,
      '主管结果确认',
      '主管签字/时间',
      'QA结果确认',
      'QA签字/时间',
      null,
    ])
    xlsxData.confirmCheckList.forEach((c) => {
      data.push([
        c,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ])
    })
    data.push([
      '末件确认',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    data.push([
      '检查项',
      null,
      null,
      '检查结果/结论',
      '检查结果/结论检查结果/结论',
      null,
      '检查结果/结论',
      null,
    ])
    xlsxData.tailConfirmList.forEach((c) => {
      data.push([
        c.checkName,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ])
    })
    data.push([
      '制作/确认人',
      null,
      null,
      '组长：' + xlsxData.textMan || '',
      'IPQC：',
      null,
      null,
      null,
    ])
    data.push([
      `备注：1、各检验项目依据制程检验规范执行，用料是否正确依据产品BOM以及销售订单要求、规格书、订
        单要求，IPQC在确认文件栏填写实际确认文件名称及文件编写日期
      2、测试结果由送检人填写，确认结果由巡检填写。
      3、不适用的检验项“/”。
      4、防水测试由组长提供产品，由巡检进行测试。
      5、主管/QA 首件确认只需要对确认项进行检查确认，无需重新核对相关资料。
     6、订单完成后，组长、IPQC根据末件确认项进行确认签字`,
      null,
      null,
      null,
      null,
      null,
      null,
    ])
    data.push([
      '表单编号：SG-QR-098 版本：A/2',
      null,
      null,
      null,
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
      {
        hpx: 50,
      },
      ...xlsxData.confirmCheckList.map((_, i) => ({
        hpx: 50,
      })),
      {
        hpx: 50,
      },
      {
        hpx: 50,
      },
      ...xlsxData.tailConfirmList.map((_, i) => ({
        hpx: 50,
      })),
      {
        hpx: 50,
      },
      {
        hpx: 250,
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
      //
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 2, c: 5 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 1 + 2, c: 7 },
      },
      // 生产主管&QA确认项
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1, c: 2 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1, c: 6 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1, c: 7 },
      },
      // 生产主管&QA确认项 项
      ...xlsxData.confirmCheckList.map((_, i) => ({
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + 1 + i, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + 1 + i, c: 2 },
      })),
      // 生产主管&QA确认项 签字
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + 1, c: 4 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length, c: 4 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + 1, c: 6 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length, c: 7 },
      },
      // 末件确认
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1, c: 7 },
      },
      // 末件确认检查
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1, c: 2 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1, c: 4 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1, c: 5 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1, c: 6 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1, c: 7 },
      },
      // 末件确认检查 项
      ...xlsxData.tailConfirmList.map((_, i) => ({
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + i, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + i, c: 2 },
      })),
      ...xlsxData.tailConfirmList.map((_, i) => ({
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + i, c: 4 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + i, c: 5 },
      })),
      ...xlsxData.tailConfirmList.map((_, i) => ({
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + i, c: 6 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + i, c: 7 },
      })),
      // 制作人
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length, c: 2 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length, c: 4 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length, c: 5 },
      },
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length, c: 6 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length, c: 7 },
      },
      // 备注
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length + 1, c: 7 },
      },
      // 表单编号
      {
        s: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length + 1 + 1, c: 0 },
        e: { r: 4 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 1 + 3 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length + 1 + 1, c: 7 },
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

      ; (['B', 'D', 'E']).forEach((c) => {
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

      ; (['A', 'B', 'C', 'D', 'E', 'F']).forEach((c) => {
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

      ; (['B', 'C', 'D', 'E']).forEach((c) => {
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

      ; (['A', 'B']).forEach((c) => {
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

      ; (['A', 'D', 'E']).forEach((c) => {
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

      ; (['A', 'D', 'E', 'F', 'G']).forEach((c) => {
        xlsxData.confirmCheckList.forEach((_, ri, list) => {
          workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + ri}`].s = {
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
          if (ri === list.length - 1) {
            workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + ri + 1}`].s = {
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
          }
        })
      })

    workSheet[`A${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + xlsxData.confirmCheckList.length + 1}`].s = {
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

      ; (['A', 'D', 'E', 'G']).forEach((c) => {
        workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + xlsxData.confirmCheckList.length + 1 + 1}`].s = {
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

      ; (['A', 'D', 'E', 'G']).forEach((c) => {
        xlsxData.tailConfirmList.forEach((_, ri) => {
          workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + ri}`].s = {
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

      ; (['A', 'D', 'E']).forEach((c) => {
        workSheet[`${c}${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length}`].s = {
          font: {
            sz: 20,
            name: '宋体',
            bold: true,
          },
          alignment: {
            vertical: 'center',
            horizontal: (c === 'E' || c === 'D') ? undefined : 'center',
          },
        }
      })

    workSheet[`A${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length + 1}`].s = {
      font: {
        sz: 20,
        name: '宋体',
        bold: true,
      },
      alignment: {
        vertical: 'center',
        wrapText: 1,
      },
    }

    workSheet[`A${5 + xlsxData.appearanceList.length + 1 + xlsxData.functionList.length + 2 + 2 + 1 + xlsxData.confirmCheckList.length + 1 + 1 + 1 + xlsxData.tailConfirmList.length + 1 + 1}`].s = {
      font: {
        sz: 12,
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
