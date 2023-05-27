import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Home, AddHabit, HabitDetail } from "../pages";
import { Navbar } from "./";

const NotFound = () => {
  return <h1>404 Page Not Found</h1>;
};

function App() {
  return (
    <div className="App">
      <ToastProvider
        autoDismiss={true}
        autoDismissTimeout={5000}
        placement={"top-right"}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addhabit" element={<AddHabit />} />
            <Route path="/habitDatail/:detailId" element={<HabitDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
