const initialState = {
  posts: [],
};

export default function postContainerReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTCONTAINER": {
      console.log("postshi sehdis es informacia");
      console.log(action);
      return {
        ...state,
        posts: state.posts.concat(action.post),
      };
    }
    default:
      return state;
  }
}
