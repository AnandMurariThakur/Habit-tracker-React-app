import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import styles from "../styles/navbar.module.css";
import { removeItemFromLocalStorage, HABIT_LIST } from "../utility/helper";
import { resetHabitList } from "../action";

const Navbar = (props) => {
  const { resetHabitList } = props;
  const navigate = useNavigate();
  const { addToast } = useToasts();

  // Handle the reset action
  const handleReset = () => {
    // Reset the habit list in Redux store
    resetHabitList();

    // Remove the habit list from local storage
    removeItemFromLocalStorage(HABIT_LIST);

    // Navigate to the root path
    navigate("/");

    // Display a success toast notification
    return addToast("Reset Successfully", {
      appearance: "success",
    });
  };

  return (
    <div className={styles.nav}>
      {/* Render the app icon with a link to the root path */}
      <div>
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/256/10604/10604554.png"
            alt="app-icon"
            className={styles.appIcon}
          />
        </Link>
      </div>
      <ul>
        {/* Render the reset button */}
        <li className={styles.resetButton} onClick={handleReset}>
          Reset Habit
        </li>
      </ul>
    </div>
  );
};

// Access state from the Redux store.
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  resetHabitList,
};

// Connect the Navbar component to Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
