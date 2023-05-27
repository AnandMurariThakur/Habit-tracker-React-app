import { UPDATE_HABIT } from "../utility/actionType";

const updateHabit = (id, updatehabit) => {
  return (dispatch) =>
    dispatch({
      type: UPDATE_HABIT,
      id,
      updatehabit,
    });
};
export default updateHabit;
