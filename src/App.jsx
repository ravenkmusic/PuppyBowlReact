import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import './App.css';

function App() {

  return ( 
    <div className="App">
        <NavBar />
        <Routes>
            <Route path='/AllPlayers' element={<AllPlayers />} />
            <Route path='/SinglePlayer' element={<SinglePlayer />} />
        </Routes>
    </div>
  );
}

export default App
