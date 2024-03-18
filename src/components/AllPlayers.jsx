import { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../API/index';

export default function AllPlayers(){
   
    const [players, setPlayers] = useState([]);

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
            <h3>Players!</h3>
        </div>
        <div>
            {
            players.map((player)=>{
                    return <div key={player.id}>
                        <img src= {player.imageUrl} />
                        <h4 id="puppy-name">{player.name}</h4>
                        <p><span className="attribute">Breed:</span> {player.breed}</p>
                        <p><span className="attribute">Current status:</span> {player.status}</p>
                    </div>
            })
        }
        </div>
    </>)
}