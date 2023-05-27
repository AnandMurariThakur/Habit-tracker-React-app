export const HABIT_LIST = "HABIT_LIST";

export const getDateMonthYearFromTimeStamp = (timeStamp) => {
  const formattedDate = new Date(timeStamp);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date =
    formattedDate.getDate() + ", " + monthNames[formattedDate.getMonth()];
  // +
  // ", " +
  // formattedDate.getFullYear();
  return date;
};

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("Cannot store in local storage");
  }
  const valueToStore = JSON.stringify(value);

  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("Can get the value from ls");
  }

  return JSON.parse(localStorage.getItem(key));
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("Can get the value from ls");
  }

  localStorage.removeItem(key);
};
