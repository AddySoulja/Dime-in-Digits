import { itemAddedPopup } from "../itemAddedPopup";

const initialState = {};
export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "item-added":
      return itemAddedPopup();
    default:
      return state;
  }
};
