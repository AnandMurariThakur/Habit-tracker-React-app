import { DELETE_HABIT } from "../utility/actionType";

// Action creator for deleting a habit
const deleteHabit = (id) => {
  return (dispatch) =>
    // Dispatch an action with the type DELETE_HABIT and the habit ID
    dispatch({
      type: DELETE_HABIT,
      id,
    });
};

export default deleteHabit;
