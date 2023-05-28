import { UPDATE_HABIT } from "../utility/actionType";

// Action creator for updating a habit
const updateHabit = (id, updatehabit) => {
  return (dispatch) =>
    // Dispatch an action with the type UPDATE_HABIT, habit ID, and updated habit data
    dispatch({
      type: UPDATE_HABIT,
      id,
      updatehabit,
    });
};

export default updateHabit;
