import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Home, AddHabit, HabitDetail } from "../pages";
import { Navbar } from "./";

// Component for displaying a 404 "Page Not Found" message
const NotFound = () => {
  return <h1>404 Page Not Found</h1>;
};

function App() {
  return (
    <div className="App">
      {/* Provide toast notifications using React Toast Notifications */}
      <ToastProvider
        autoDismiss={true} // Enable auto-dismissal of toast messages
        autoDismissTimeout={5000} // Set the duration for auto-dismissal to 5000 milliseconds (5 seconds)
        placement={"top-right"} // Set the position of toast messages to top-right corner
      >
        {/* Set up routing using React Router */}
        <Router>
          {/* Render the Navbar component */}
          <Navbar />

          {/* Define routes using React Router */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Render the Home component when the URL matches the root path */}
            <Route path="/addhabit" element={<AddHabit />} />
            {/* Render the AddHabit component when the URL matches "/addhabit" */}
            <Route path="/habitDatail/:detailId" element={<HabitDetail />} />
            {/* Render the HabitDetail component when the URL matches "/habitDatail/:detailId", where :detailId is a route parameter */}
            <Route path="*" element={<NotFound />} />
            {/* Render the NotFound component for any other unmatched routes */}
          </Routes>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
