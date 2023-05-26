import { ADD_MOVIES, REQUEST } from "../utility/actionType";

export function addMovies(movies) {
  console.log("action", movies);
  return {
    type: ADD_MOVIES,
    movies,
  };
}

const reducer = (
  state = {
    movies: [],
    fetching: true,
  },
  action
) => {
  console.log("reducer", action.movies);
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        fetching: false,
        movies: action.movies,
      };

    default:
      return state;
  }
};
export default reducer;
