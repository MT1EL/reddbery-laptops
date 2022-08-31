const initialState = {
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

export default function postLaptopReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTLAPTOP": {
      return {
        ...state,

        laptop: {
          imageUrl: action.payload.laptop.imageUrl,
          "ლეპტოპის სახელი": action.payload.laptop["ლეპტოპის სახელი"],
          "ლეპტოპის ბრენდი": action.payload.laptop["ლეპტოპის ბრენდი"],
          RAM: action.payload.laptop.RAM,
          "მეხსიერების ტიპი": action.payload.laptop["მეხსიერების ტიპი"],
          CPU: action.payload.laptop.cpu,
          "CPU-ს ბირთვი": action.payload.laptop["CPU-ს ბირთვი"],
          "CPU-ს ნაკადი": action.payload.laptop["CPU-ს ნაკადი"],
          "ლეპტოპის მდგომარეობა": action.payload.laptop["ლეპტოპის მდგომარეობა"],
          "ლეპტოპის ფასი": action.payload.laptop["ლეპტოპის ფასი"],
          "შეძენის რიცხვი": action.payload.laptop["შეძენის რიცხვი"],
        },
      };
    }
    default:
      return state;
  }
}
