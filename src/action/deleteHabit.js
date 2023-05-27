import { DELETE_HABIT } from "../utility/actionType";

const deleteHabit = (id) => {
  return (dispatch) =>
    dispatch({
      type: DELETE_HABIT,
      id,
    });
};
export default deleteHabit;
