export const HABIT_LIST = "HABIT_LIST";

// Function to convert a timestamp to a formatted date string (e.g., "22, Jan")
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

  return date;
};

// Function to store a value in local storage using a specified key
export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("Cannot store in local storage");
  }
  const valueToStore = JSON.stringify(value);

  localStorage.setItem(key, valueToStore);
};

// Function to retrieve a value from local storage based on a specified key
export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("Can get the value from ls");
  }

  return JSON.parse(localStorage.getItem(key));
};

// Function to remove a value from local storage based on a specified key
export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error("Can get the value from ls");
  }

  localStorage.removeItem(key);
};
