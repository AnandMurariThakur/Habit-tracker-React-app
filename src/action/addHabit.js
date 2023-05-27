import { ADD_HABIT } from "../utility/actionType";

const addHabit = (habit) => {
  return (dispatch) =>
    dispatch({
      type: ADD_HABIT,
      habit,
    });
};
export default addHabit;
