import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import styles from "../styles/addHabit.module.css";
import { getDateMonthYearFromTimeStamp } from "../utility/helper";
import { addHabit } from "../action";
import { Loader } from "../components";

const AddHabit = (props) => {
  const { addHabit } = props;
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [habit, setHabit] = useState("");
  const [savingForm, setSavingForm] = useState(false);

  const handleHabit = () => {
    if (!habit) {
      return addToast("Please Enter the Habit", {
        appearance: "error",
      });
    }
    setSavingForm(true);
    let tempData = {
      title: habit,
      id: Math.random() * 1000,
    };
    let tempArr = [];
    for (let i = 0; i < 7; i++) {
      let tempObj = {};
      tempObj.id = Math.random() * 1000;
      tempObj.date = getDateMonthYearFromTimeStamp(
        new Date().setDate(new Date().getDate() - i)
      );
      tempObj.status = "none";
      tempArr.push(tempObj);
    }
    tempData.data = tempArr;
    addHabit(tempData);
    setSavingForm(false);
    setHabit("");
    navigate("/");
    return addToast("Habit Added Successfully", {
      appearance: "success",
    });
  };

  //method to naviagte back to previous screen
  const handleBack = () => {
    navigate("/");
  };

  if (savingForm) {
    return <Loader />;
  }
  return (
    <div className={styles.addhabit}>
      <div className={styles.cardContainer}>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Add your habit here</div>
          <input
            type="text"
            value={habit}
            placeholder="Enter your habit"
            onChange={(e) => setHabit(e.target.value)}
          />
        </div>
        <div className={styles.btnGrp}>
          <button
            className={`button ${styles.saveBtn}`}
            onClick={handleHabit}
            disabled={savingForm}
          >
            {savingForm ? "Adding Habit..." : "Add Habit"}
          </button>
          <button className={`button ${styles.backBtn}`} onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
// Access state from Store.
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  addHabit,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddHabit);
