import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
)
}

export default App
