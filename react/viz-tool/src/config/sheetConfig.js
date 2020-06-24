const DynamicBarChart = (sheetData) => {
  let dataItem = new Map()
  sheetData.filter(item => item!=null)
  for(let i = 1; i < sheetData.length; i++) {
    let row = sheetData[i]
    let value = new Set()
    for (let j = 2; j < row.length; j++) {
      value.add({
        value: row[j],
        city: row[0],
        category: row[1]
      })
    }
    let arr = new Array()
    let dates = sheetData[0].slice(2)
    dates.forEach((item, index) => {
      arr.push([...value][index])
      dataItem.set(item, arr)
    })
  }
}


const nameAndValue = (sheetData) => {
  let arr = new Array()
  sheetData.filter(item => item!=null)
  for (let i = 1; i < sheetData.length; i++) {
    let obj = {}
    let row = sheetData[i]
    for(let j = 0; j < row.length; i++) {
      
    }
  }
}


export default {
  DynamicBarChart
}