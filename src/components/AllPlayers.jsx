import { useState, useEffect } from "react";
import { fetchAllPlayers } from ".api/index.js";

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
        <div>
        {
            players.map((player)=>{
                return (
                    <div key = {player.id}>
                        <h4>{player.name}</h4>
                        player = {player}
                    </div>
                );
            })
        }
    </div>
    )
}