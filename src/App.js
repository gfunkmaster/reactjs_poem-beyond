import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useGlobalContext } from "./context";
import Favorites from "./Favorites";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {


  return (
    <>
    <div className="container-fluid">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </div>
     
    </>
  );
}

export default App;
