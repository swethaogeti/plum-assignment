export const initialState = {
  sortBy: null,
  range: 20,
  premium: false,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "RANGE":
      return {
        ...state,
        range: action.payload,
      };
    case "PREMIUM":
      return {
        ...state,
        premium: !state.premium,
      };
    case "CLEAR": {
      return initialState;
    }
    default:
      return initialState;
  }
};
