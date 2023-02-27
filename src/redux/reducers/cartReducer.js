const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add-to-cart":
      const isPresent = state.find((item) => item === action.payload);
      return isPresent === undefined ? [...state, action.payload] : state;
    case "remove-from-cart":
      return state.filter((item) => item.key !== action.payload);
    case "empty-cart":
      return [];
    default:
      return state;
  }
};
