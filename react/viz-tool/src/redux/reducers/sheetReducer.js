import update from "react-addons-update";
const initialState = {
  sheetData: [
    ['地区', '值'],
    ['北京', '972.39'],
    ['上海', '2204.7'],
    ['广州', '417.92'],
    ['深圳', '1458.03'],
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SHEET_DATA':
      const newData = state.sheetData.slice(0)
      for (let [row, col, oldValue, newValue] of action.sheetData) {
        newData[row][col] = newValue
      }
      return {
        ...state,
        sheetData: newData,
      };
    case 'SET_SHEET_DATA':
      return update(state, {
        sheetData: {
          $set: action.sheetData
        },
      });
    default:
      return state;
  }
};
