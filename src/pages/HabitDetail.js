import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { updateHabit, deleteHabit } from "../action";

import styles from "../styles/habitDetail.module.css";

const HabitDetail = (props) => {
  const { habits, updateHabit, deleteHabit } = props;
  const { detailId } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [detail, setDetail] = useState([]);
  const [savingForm, setSavingForm] = useState(false);

  useEffect(() => {
    // Filter the habits array to get the detail of the selected habit
    const filteredArray = habits.filter(
      (habit) => habit.id === parseFloat(detailId)
    );
    setDetail(filteredArray);
  }, [habits, detailId]);

  const handleStatusChange = (id) => (event) => {
    // Update the status of a specific habit detail
    const newDetailData = detail[0].data.map((data) => {
      if (data.id === id) {
        return { ...data, status: event.target.value };
      }
      return data;
    });

    // Update the detail state with the modified data
    let tempArr = [];
    let tempObj = {};
    tempObj.id = detail[0].id;
    tempObj.title = detail[0].title;
    tempObj.data = newDetailData;
    tempArr.push(tempObj);
    setDetail(tempArr);
  };

  const handleUpdate = (id) => {
    setSavingForm(true);

    // Create a temporary object with updated habit details
    let tempObj = {};
    tempObj.id = detail[0].id;
    tempObj.title = detail[0].title;
    tempObj.data = detail[0].data;

    // Dispatch the action to update the habit
    updateHabit(id, tempObj);

    setSavingForm(false);

    navigate("/");

    // Display success toast after updating the habit
    return addToast("Habit Updated Successfully", {
      appearance: "success",
    });
  };

  const handleDelete = (id) => {
    // Dispatch the action to delete the habit
    deleteHabit(id);

    navigate("/");

    // Display success toast after deleting the habit
    return addToast("Habit Deleted Successfully", {
      appearance: "success",
    });
  };

  return (
    <div className={styles.habitDetail}>
      {detail.length !== 0 ? (
        <div className={styles.cardContainer}>
          <div className={styles.habitTile}>
            <h2>{detail[0].title}</h2>
          </div>
          <div className={styles.parentStatus}>
            <h4>Date</h4>
            <h4>Current Status</h4>
            <h4>Change Status</h4>
          </div>
          {detail[0].data.map((data) => (
            <div className={styles.parentStatus} key={data.id}>
              <div>{data.date}</div>
              <div>{data.status}</div>
              <select
                value={data.status}
                onChange={handleStatusChange(data.id)}
              >
                <option value="none">None</option>
                <option value="done">Done</option>
                <option value="not done">Not Done</option>
              </select>
            </div>
          ))}
          <div className={styles.btnGrp}>
            <button
              className={`button ${styles.saveBtn}`}
              onClick={() => handleUpdate(detail[0].id)}
              disabled={savingForm}
            >
              {savingForm ? "Updating Habit..." : "Update Habit"}
            </button>
            <button
              className={`button ${styles.backBtn}`}
              onClick={() => handleDelete(detail[0].id)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

// Access state from Store.
const mapStateToProps = (state) => ({
  habits: state.habitReducer.habits,
});

const mapDispatchToProps = {
  updateHabit,
  deleteHabit,
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitDetail);
