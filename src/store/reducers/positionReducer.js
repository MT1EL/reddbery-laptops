const initialState = {
  data: {},
};

export default function positionReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTPOSITION": {
      return {
        ...state,
        ...action.res,
      };
    }
    default:
      return state;
  }
}
