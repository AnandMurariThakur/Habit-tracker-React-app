import { GET_HABIT } from "../utility/actionType";

// Action creator for retrieving habit data
const getHabit = () => {
  return (dispatch) =>
    // Dispatch an action with the type GET_HABIT
    dispatch({
      type: GET_HABIT,
    });
};

export default getHabit;
