const initialState = {
  user: {
    სახელი: "",
    თიმი: "",
    პოზიცია: "",
    მეილი: "",
    "ტელ. ნომერი": "",
  },
  laptop: {
    imageUrl: "",
    "ლეპტოპის სახელი": "",
    "ლეპტოპის ბრენდი": "",
    RAM: "",
    "მეხსიერების ტიპი": "",
    CPU: "",
    "CPU-ს ბირთვი": "",
    "CPU-ს ნაკადი": "",
    "ლეპტოპის მდგომარეობა": "",
    "ლეპტოპის ფასი": "",
    "შეძენის რიცხვი": "",
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
        laptop: {
          imageUrl: action.payload.item.laptop.imageUrl,
          "ლეპტოპის სახელი": action.payload.item.laptop["ლეპტოპის სახელი"],
          "ლეპტოპის ბრენდი": action.payload.item.laptop["ლეპტოპის ბრენდი"],
          RAM: action.payload.item.laptop.RAM,
          "მეხსიერების ტიპი": action.payload.item.laptop["მეხსიერების ტიპი"],
          CPU: action.payload.item.laptop.CPU,
          "CPU-ს ბირთვი": action.payload.item.laptop["CPU-ს ბირთვი"],
          "CPU-ს ნაკადი": action.payload.item.laptop["CPU-ს ნაკადი"],
          "ლეპტოპის მდგომარეობა":
            action.payload.item.laptop["ლეპტოპის მდგომარეობა"],
          "ლეპტოპის ფასი": action.payload.item.laptop["ლეპტოპის ფასი"],
          "შეძენის რიცხვი": action.payload.item.laptop["შეძენის რიცხვი"],
        },
      };
    }
    default:
      return state;
  }
}
