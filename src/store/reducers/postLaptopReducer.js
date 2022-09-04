const initialState = {
  laptop: {
    laptop_name: "",
    laptop_brand_id: "",
    laptop_ram: "",
    laptop_hard_drive_type: "",
    laptop_cpu: "",
    laptop_cpu_cores: "",
    laptop_cpu_threads: "",
    laptop_state: "",
    laptop_price: "",
    laptop_purchase_date: "",
  },
};

export default function postLaptopReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTLAPTOP": {
      return {
        laptop: {
          laptop_name: action.payload.laptop?.laptop_name,
          laptop_brand_id: action.payload.laptop?.laptop_brand_id,
          laptop_ram: action.payload.laptop?.laptop_ram,
          laptop_hard_drive_type: action.payload.laptop?.laptop_hard_drive_type,
          laptop_cpu: action.payload.laptop?.laptop_cpu,
          laptop_cpu_cores: action.payload.laptop?.laptop_cpu_cores,
          laptop_cpu_threads: action.payload.laptop?.laptop_cpu_threads,
          laptop_state: action.payload.laptop?.laptop_state,
          laptop_price: action.payload.laptop?.laptop_price,
          laptop_purchase_date: action.payload.laptop?.laptop_purchase_date,
        },
      };
    }
    default:
      return state;
  }
}
