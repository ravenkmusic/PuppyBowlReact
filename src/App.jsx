import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
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
