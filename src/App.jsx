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
      ['植毛车间巡检记录表', null, null, null, null, null, null, null, null, null],
      [`订单号：${xlsxData.saleCode}`, null, `批号：${xlsxData.productBatch || ''}`, null, `规格型号：${xlsxData.materialModel|| ''}`, null, null, `订单数量：${xlsxData.releaseQty}`, null, null],
      [`作业指导书：`, null, null, `日期：${xlsxData.endTime||''}`, null, null, `机台：${xlsxData.deviceNumber||''}`, null, `作业员：${xlsxData.textMan}`, null],
      [`巡检时间（时：分）`, xlsxData.textTime, null, null, null, null, null, null, null, null],
      ['类别', '检验项目', '标准值', '实际值', null, null, null, null, null, null],
      ['配件检验项', '焊接力', xlsxData.partsInspectionItemList[0].standards, ...(xlsxData.partsInspectionItemList[0].realitySizes || [])],
      [null, '插拔力', xlsxData.partsInspectionItemList[1].standards, ...(xlsxData.partsInspectionItemList[1].realitySizes || [])],
      [null, '刷头与主体间隙', xlsxData.partsInspectionItemList[2].standards, ...(xlsxData.partsInspectionItemList[2].realitySizes || [])],
      ['性能项', '切毛高度（MM）', xlsxData.partsInspectionItemList[3].standards, ...(xlsxData.partsInspectionItemList[3].realitySizes || [])],
      [null, '铜片尺寸(MM)', xlsxData.partsInspectionItemList[4].standards, ...(xlsxData.partsInspectionItemList[4].realitySizes || [])],
      [null, '磨圆率（%）', xlsxData.partsInspectionItemList[5].standards, ...(xlsxData.partsInspectionItemList[5].realitySizes || [])],
      [null, '整束拉力（N)', xlsxData.partsInspectionItemList[6].standards, ...(xlsxData.partsInspectionItemList[6].realitySizes || [])],
      [null, '单根拉力（N)', xlsxData.partsInspectionItemList[7].standards, ...(xlsxData.partsInspectionItemList[7].realitySizes || [])],
      ['目视项', '刷丝规格型号', xlsxData.partsInspectionItemList[8].standards, ...(xlsxData.partsInspectionItemList[8].realitySizes || [])],
      [null, '刷丝颜色分布', xlsxData.partsInspectionItemList[9].standards, ...(xlsxData.partsInspectionItemList[9].realitySizes || [])],
      [null, '刷柄颜色', xlsxData.partsInspectionItemList[10].standards, ...(xlsxData.partsInspectionItemList[10].realitySizes || [])],
      [null, '整捆切毛', xlsxData.partsInspectionItemList[11].standards, ...(xlsxData.partsInspectionItemList[11].realitySizes || [])],
      [null, '切毛形状', xlsxData.partsInspectionItemList[12].standards, ...(xlsxData.partsInspectionItemList[12].realitySizes || [])],
      [null, '磨盘', xlsxData.partsInspectionItemList[13].standards, ...(xlsxData.partsInspectionItemList[13].realitySizes || [])],
      [null, '气枪位置', xlsxData.partsInspectionItemList[14].standards, ...(xlsxData.partsInspectionItemList[14].realitySizes || [])],
      [null, '夹伤', xlsxData.partsInspectionItemList[15].standards, ...(xlsxData.partsInspectionItemList[15].realitySizes || [])],
      [null, '外观', xlsxData.partsInspectionItemList[16].standards, ...(xlsxData.partsInspectionItemList[16].realitySizes || [])],
      ['判定（OK/NG)', null, null, null, null, null, null, null, null, null],
      ['职位', null, null, null, null, null, null, null, null, null],
      ['姓名', null, null, null, null, null, null, null, null, null],
      ['巡检结束时间（时：分）', xlsxData.textTime, null, null, null, null, null, null, null, null],
      ['异常处理记录：', null, null, null, null, null, null, null, null, null],
      ['转序', '检验时间', '转序人员', '入库数量', '抽检数量', '外观', '磨圆率', '整束拉力', '单根拉力', '确认结果'],
      [null, xlsxData.textTime, xlsxData.transitionPersonnel, xlsxData.inWarehouseQuantity, xlsxData.samplingQuantity, xlsxData.appearance, xlsxData.roundness, xlsxData.tensionBundle, xlsxData.singleBundle, xlsxData.ultimatelyCheckResult],
      [`注： 
1、检验正常的在项目后写上实测值或参数； 2、检验不正常的在项目后写上不良原因及不良数；
3、拉力按检验规范检验，每批检验2-3模；4、当抽样超标后IPQC应在异常处理记录中记录处理过程。
5、IPQC和组长： 4H/次 ；QA和车间主管 ：  每天/次。（多次换线时，只需在当时报表上填写记录）
`, null, null, null, null, null, null, null, null, null],
      [` 审核：                       日期：${xlsxData.endTime}                               表单编号：${xlsxData.fromNo} 版本：${xlsxData.fromVersion}`, null, null, null, null, null, null, null, null, null],
    ]
    const workSheet = xlsx.utils.json_to_sheet(data, {
      skipHeader: true,
    })

    workSheet['!cols'] = [
      {
        wpx: 132,
      },
      {
        wpx: 132,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
      {
        wpx: 84,
      },
    ]
    workSheet['!rows'] = [
      {
        hpx: 40,
      },
      ...Array.from({ length: 28 }).map(() => ({
        hpx: 32,
      })),{
        hpx: 96,
      },{
        hpx: 32,
      }
    ]
    workSheet['!merges'] = [
      {
        s: { r: 0, c: 0, },
        e: { r: 0, c: 9, },
      },
      {
        s: { r: 1, c: 0, },
        e: { r: 1, c: 1, },
      },
      {
        s: { r: 1, c: 2, },
        e: { r: 1, c: 3, },
      },
      {
        s: { r: 1, c: 4, },
        e: { r: 1, c: 6, },
      },
      {
        s: { r: 1, c: 7, },
        e: { r: 1, c: 9, },
      },
      {
        s: { r: 2, c: 0, },
        e: { r: 2, c: 2, },
      },
      {
        s: { r: 2, c: 3, },
        e: { r: 2, c: 5, },
      },
      {
        s: { r: 2, c: 6, },
        e: { r: 2, c: 7, },
      },
      {
        s: { r: 2, c: 8, },
        e: { r: 2, c: 9, },
      },
      {
        s: { r: 4, c: 3, },
        e: { r: 4, c: 9, },
      },
      {
        s: { r: 5, c: 0, },
        e: { r: 7, c: 0, },
      },
      {
        s: { r: 8, c: 0, },
        e: { r: 12, c: 0, },
      },
      {
        s: { r: 13, c: 0, },
        e: { r: 21, c: 0, },
      },
      {
        s: { r: 22, c: 0, },
        e: { r: 22, c: 1, },
      },
      {
        s: { r: 23, c: 0, },
        e: { r: 23, c: 1, },
      },
      {
        s: { r: 24, c: 0, },
        e: { r: 24, c: 1, },
      },
      {
        s: { r: 25, c: 0, },
        e: { r: 25, c: 1, },
      },
      {
        s: { r: 26, c: 0, },
        e: { r: 26, c: 9, },
      },
      {
        s: { r: 27, c: 0, },
        e: { r: 28, c: 0, },
      },
      {
        s: { r: 29, c: 0, },
        e: { r: 29, c: 9, },
      },
      {
        s: { r: 30, c: 0, },
        e: { r: 30, c: 9, },
      },
    ]

    Array.from({ length: 31 }).forEach((_, i) => {
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
              horizontal: 'center',
            },
          }
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
    workSheet['A2'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['C2'].s = {
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
    workSheet['H2'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['A3'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['D3'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['G3'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['I3'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['A27'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
      },
    }
    workSheet['A30'].s = {
      font: {
        sz: 14,
        name: '宋体',
      },
      alignment: {
        vertical: 'center',
        wrapText: 1,
      },
    }
    workSheet['A31'].s = {
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
