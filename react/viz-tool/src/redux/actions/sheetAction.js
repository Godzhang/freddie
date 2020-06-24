export const configSheetAction = {
  updateSheetData: (sheetData) => ({
    type: "UPDATE_SHEET_DATA",
    sheetData
  }),
  setSheetData: (sheetData) => ({
    type: "SET_SHEET_DATA",
    sheetData
  })
}