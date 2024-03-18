import { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../API/index';
import { useNavigate } from 'react-router-dom';

export default function AllPlayers(){
   
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        async function getAllPlayers(){
                const players = await fetchAllPlayers();
                setPlayers(players);
        }
        getAllPlayers();
    }, []);
    
     return (
     <>
        <div>
            <h3 id="playerHeading">All Players!</h3>
        </div>

        <div className="puppies">
            {
            players.map((player)=>{
                    return <div key={player.id}>
                        <img src= {player.imageUrl} />
                        <h4 id="puppy-name">{player.name}</h4>
                        <p><span className="attribute">Breed:</span> <span id="attribute-text">{player.breed}</span></p>
                        <p><span className="attribute">Current status:</span> <span id="attribute-text">{player.status}</span></p>
                        <button onClick={()=> navigate('/SinglePlayer')} />
                    </div>
            })
        }
        </div>
    </>)
}