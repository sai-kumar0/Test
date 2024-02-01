import "./styles/style.css";
import useFetch from "./components/common/useFetch";
import DataContext from "./components/common/DataContext";
import Shows from "./components/Shows";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bookings from "./components/Bookings";

function App() {
  const { data } = useFetch("https://api.tvmaze.com/search/shows?q=all");
  return (
    <DataContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/show/:id/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
