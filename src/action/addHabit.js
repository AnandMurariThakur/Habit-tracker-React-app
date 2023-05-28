import { ADD_HABIT } from "../utility/actionType";

// Action creator for adding a habit
const addHabit = (habit) => {
  return (dispatch) =>
    // Dispatch an action with the type ADD_HABIT and the habit data
    dispatch({
      type: ADD_HABIT,
      habit,
    });
};

export default addHabit;
