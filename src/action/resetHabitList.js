import { RESET_HABIT_LIST } from "../utility/actionType";

// Action creator for resetting the habit list
const resetHabitList = () => {
  return (dispatch) =>
    // Dispatch an action with the type RESET_HABIT_LIST
    dispatch({
      type: RESET_HABIT_LIST,
    });
};

export default resetHabitList;
