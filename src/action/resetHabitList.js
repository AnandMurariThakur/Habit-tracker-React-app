import { RESET_HABIT_LIST } from "../utility/actionType";

const resetHabitList = () => {
  return (dispatch) =>
    dispatch({
      type: RESET_HABIT_LIST,
    });
};
export default resetHabitList;
