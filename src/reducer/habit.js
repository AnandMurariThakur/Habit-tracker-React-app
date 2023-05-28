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
      // Add the new habit to the local storage
      setItemInLocalStorage(HABIT_LIST, [...state.habits, action.habit]);
      return {
        ...state,
        habits: [...state.habits, action.habit],
      };
    case GET_HABIT:
      // Return the current state without any changes
      return {
        ...state,
        habits: state.habits,
      };
    case RESET_HABIT_LIST:
      // Reset the habits list in the local storage
      setItemInLocalStorage(HABIT_LIST, []);
      return {
        ...state,
        habits: [],
      };
    case UPDATE_HABIT:
      // Update the habit in the local storage and state
      const updatedHabits = state.habits.map((habit) => {
        if (habit.id === action.id) {
          return action.updatehabit;
        }
        return habit;
      });
      setItemInLocalStorage(HABIT_LIST, updatedHabits);
      return {
        ...state,
        habits: updatedHabits,
      };
    case DELETE_HABIT:
      // Delete the habit from the local storage and state
      const deletedHabits = state.habits.filter((habit) => {
        return habit.id !== action.id;
      });
      setItemInLocalStorage(HABIT_LIST, deletedHabits);
      return {
        ...state,
        habits: deletedHabits,
      };
    default:
      return state;
  }
};

export default habitReducer;
