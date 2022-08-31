const initialState = {
  user: {
    სახელი: "",
    თიმი: "",
    პოზიცია: "",
    მეილი: "",
    "ტელ. ნომერი": "",
  },
};

export default function postUserReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTUSER": {
      return {
        ...state,
        user: {
          სახელი: action.payload.user?.name,
          თიმი: action.payload.user?.team,
          პოზიცია: action.payload.user?.position,
          მეილი: action.payload.user?.mail,
          "ტელ. ნომერი": action.payload.user?.number,
        },
      };
    }
    default:
      return state;
  }
}
