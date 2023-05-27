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

  const handleReset = () => {
    resetHabitList();
    removeItemFromLocalStorage(HABIT_LIST);
    navigate("/");
    return addToast("Reset Successfully", {
      appearance: "success",
    });
  };

  return (
    <div className={styles.nav}>
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
        <li className={styles.resetButton} onClick={handleReset}>
          Reset Habit
        </li>
      </ul>
    </div>
  );
};
// Access state from Store.
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  resetHabitList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
