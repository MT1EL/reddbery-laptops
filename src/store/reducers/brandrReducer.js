const initialState = {
  data: [
    {
      id: 1,
      name: "HP",
    },
    {
      id: 2,
      name: "Dell",
    },
    {
      id: 3,
      name: "Microsoft",
    },
    {
      id: 4,
      name: "Apple",
    },
    {
      id: 5,
      name: "Lenovo",
    },
    {
      id: 6,
      name: "Acer",
    },
  ],
};

export default function brandReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTBRANDS": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
