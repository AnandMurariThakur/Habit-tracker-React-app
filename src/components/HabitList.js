import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

// Component for displaying a list of habits
const HabitList = (props) => {
  const { habits } = props;

  return (
    <div>
      {/* Render a message when there are no habits */}
      {habits.length === 0 && (
        <div className={styles.cardContainer}>
          <div className={styles.emptyListMessage}>
            {/* Display a quote about habits */}
            <h1>
              We are what we repeatedly do. Excellence, then, is not an act, but
              a habit
            </h1>
          </div>
          <div className={styles.author}>― Will Durant</div>
        </div>
      )}

      {/* Render a message when there are habits */}
      {habits.length !== 0 && (
        <div className={styles.emptyListMessage}>
          <h1>Habit List</h1>
        </div>
      )}

      {/* Render each habit as a card */}
      {habits.map((habit) => (
        <div className={styles.cardList} key={habit.id}>
          {/* Display the title of the habit */}
          <h2 className={styles.fieldLabel}>{habit.title}</h2>

          {/* Link to the detail page of the habit */}
          <Link to={`/habitDatail/${habit.id}`}>
            <button className={styles.detailButton}>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
