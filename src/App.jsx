import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./src/components/AllPlayers";
import SinglePlayer from "./src/components/SinglePlayer.jsx";
import NavBar from "./components/NavBar";
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
