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
      console.log("leptopis rediusershi sehdis es informacia");
      console.log(action);

      return {
        ...state,

        laptop: {
          imageUrl: action.payload.laptop.imageUrl,
          "ლეპტოპის სახელი": action.payload.laptop.name,
          "ლეპტოპის ბრენდი": action.payload.laptop.brand,
          RAM: action.payload.laptop.RAM,
          "მეხსიერების ტიპი": action.payload.laptop.memory,
          CPU: action.payload.laptop.cpu,
          "CPU-ს ბირთვი": action.payload.laptop.cpuCore,
          "CPU-ს ნაკადი": action.payload.laptop.cpuStream,
          "ლეპტოპის მდგომარეობა": action.payload.laptop.condition,
          "ლეპტოპის ფასი": action.payload.laptop.price,
          "შეძენის რიცხვი": action.payload.laptop.PurchaseNumber,
        },
      };
    }
    default:
      return state;
  }
  return state;
}
