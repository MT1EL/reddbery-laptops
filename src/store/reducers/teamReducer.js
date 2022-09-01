const initialState = {
  data: [
    {
      id: 1,
      name: "დეველოპერი",
    },
    {
      id: 2,
      name: "HR",
    },
    {
      id: 3,
      name: "გაყიდვები",
    },
    {
      id: 4,
      name: "დიზაინი",
    },
    {
      id: 5,
      name: "მარკეგინგი",
    },
  ],
};

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTTEAM": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
