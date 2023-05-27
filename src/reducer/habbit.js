import {
  ADD_HABIT,
  GET_HABIT,
  DELETE_HABIT,
  UPDATE_HABIT,
  RESET_HABIT_LIST,
} from "../utility/actionType";
import {
  HABIT_LIST,
  setItemInLocalStorage,
  getItemFromLocalStorage,
} from "../utility/helper";

const initialHabitState = {
  habits:
    getItemFromLocalStorage(HABIT_LIST) === null
      ? []
      : getItemFromLocalStorage(HABIT_LIST),
};

const habitReducer = (state = initialHabitState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      setItemInLocalStorage(HABIT_LIST, [...state.habits, action.habit]);
      return {
        ...state,
        habits: [...state.habits, action.habit],
      };
    case GET_HABIT:
      return {
        ...state,
        habits: state.habits,
      };
    case RESET_HABIT_LIST:
      return {
        ...state,
        habits: [],
      };
    case UPDATE_HABIT:
      const newDetailData = state.habits.map((habit) => {
        if (habit.id === action.id) {
          return action.updatehabit;
        }
        return habit;
      });
      setItemInLocalStorage(HABIT_LIST, newDetailData);
      return {
        ...state,
        habits: newDetailData,
      };
    case DELETE_HABIT:
      const deletedHabit = state.habits.filter((habit) => {
        return habit.id !== action.id;
      });
      setItemInLocalStorage(HABIT_LIST, deletedHabit);
      return {
        ...state,
        habits: deletedHabit,
      };
    default:
      return state;
  }
};
export default habitReducer;
