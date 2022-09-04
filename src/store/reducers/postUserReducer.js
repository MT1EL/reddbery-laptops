const initialState = {
  user: {
    name: "",
    surname: "",
    team_id: "",
    position_id: "",
    email: "",
    phone_number: "",
    token: process.env.REACT_APP_TOKEN,
  },
};

export default function postUserReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTUSER": {
      return {
        ...state,
        user: {
          name: action.payload.user?.name,
          surname: action.payload.user?.surname,
          team_id: action.payload.user?.team,
          position_id: action.payload.user?.position,
          email: action.payload.user?.email,
          phone_number: action.payload.user?.number,
          token: process.env.REACT_APP_TOKEN,
        },
      };
    }
    default:
      return state;
  }
}
