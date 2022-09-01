const initialState = {
  data: {},
};

export default function positionReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTPOSITION": {
      console.log(action);
      return {
        ...state,
        ...action.res,
      };
    }
    default:
      return state;
  }
}
