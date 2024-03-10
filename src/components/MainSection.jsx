import {Routes, Route } from 'react-router-dom';
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';

export default function MainSection() {
    return (
        <Routes>
            <Route path='/AllPlayers' element={<AllPlayers />} />
            <Route path='/SinglePlayer' element={<SinglePlayer />} />
        </Routes>
    )
}