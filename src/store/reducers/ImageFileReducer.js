const initialState = {
  path: "",
  name: "",
  size: "",
  type: "",
  url: "",
  webkitRelativePath: "",
};

export default function imageFileReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTIMAGE": {
      return {
        path: action.image.path,
        name: action.image.name,
        size: action.image.size,
        type: action.image.type,
        url: action.image.url,
        webkitRelativePath: action.image.webkitRelativePath,
      };
    }
    default:
      return state;
  }
}
