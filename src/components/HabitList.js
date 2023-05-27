import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const HabitList = (props) => {
  const { habits } = props;
  return (
    <div>
      {habits.length === 0 && (
        <div className={styles.cardContainer}>
          <div className={styles.emptyListMessage}>
            <h1>
              We are what we repeatedly do. Excellence, then, is not an act, but
              a habit
            </h1>
          </div>
          <div className={styles.author}>― Will Durant</div>
        </div>
      )}
      {habits.length !== 0 && (
        <div className={styles.emptyListMessage}>
          <h1>Habit List</h1>
        </div>
      )}
      {habits.map((habit) => (
        <div className={styles.cardList} key={habit.id}>
          <h2 className={styles.fieldLabel}>{habit.title}</h2>
          <Link to={`/habitDatail/${habit.id}`}>
            <button className={styles.detailButton}>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
