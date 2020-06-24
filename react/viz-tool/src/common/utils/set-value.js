import update from "react-addons-update";

export const setValueWithRelation = (state, action, attr) => {
  let newValue = action[attr];
  let relationAttrs = {};
  let relationkeys = state[attr].relationkeys;

  relationkeys.forEach((key) => {
    relationAttrs[key] = { visible: { $set: newValue } };
  });

  return update(state, {
    ...relationAttrs,
    [attr]: {
      value: {
        $set: newValue,
      },
    },
  });
};

export const setValue = (state, action, attr) => {
  return update(state, {
    [attr]: {
      value: {
        $set: action[attr],
      },
    },
  });
};
