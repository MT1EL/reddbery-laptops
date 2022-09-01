const initialState = {
  user: {
    სახელი: "",
    თიმი: "",
    პოზიცია: "",
    მეილი: "",
    "ტელ. ნომერი": "",
  },
};

export default function setCurrentReducer(state = initialState, action) {
  switch (action.type) {
    case "SETCURRENTPOST": {
      return {
        ...state,
        user: {
          სახელი: action.payload.item.user.სახელი,
          თიმი: action.payload.item.user.თიმი,
          პოზიცია: action.payload.item.user.პოზიცია,
          მეილი: action.payload.item.user.მეილი,
          "ტელ. ნომერი": action.payload.item.user["ტელ. ნომერი"],
        },
      };
    }
    default:
      return state;
  }
}
