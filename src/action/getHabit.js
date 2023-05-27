import { GET_HABIT } from "../utility/actionType";

const getHabit = () => {
  return (dispatch) =>
    dispatch({
      type: GET_HABIT,
    });
};
export default getHabit;
