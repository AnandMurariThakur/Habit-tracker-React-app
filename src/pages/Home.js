import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHabit } from "../action";
import styles from "../styles/home.module.css";
import { HabitList } from "../components";

const Home = (props) => {
  const { getHabit, habits } = props;

  useEffect(() => {
    getHabit();
  }, [getHabit]);

  useEffect(() => {
    console.log("habits", habits);
  }, [habits]);

  return (
    <div className={styles.home}>
      <HabitList habits={habits} />
      <Link to="/addhabit">
        <button className={styles.floatingButton}>+</button>
      </Link>
    </div>
  );
};
// Access state from Store.
const mapStateToProps = (state) => ({
  habits: state.habitReducer.habits,
});

const mapDispatchToProps = {
  getHabit,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
