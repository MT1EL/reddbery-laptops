const initialState = {
  user: {
    name: "",
    surname: "",
    team_id: "",
    position_id: "",
    email: "",
    phone_number: "",
    token: "7de1619aa2a1cf2a4369c6512551c306",
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
          position_id: +action.payload.user?.position_id,
          email: action.payload.user?.email,
          phone_number: action.payload.user?.number,
          token: action.payload.user.token
            ? action.payload.user?.token
            : "7de1619aa2a1cf2a4369c6512551c306",
        },
      };
    }
    default:
      return state;
  }
}
