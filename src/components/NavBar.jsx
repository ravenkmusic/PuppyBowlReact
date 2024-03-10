import { Link } from 'react-router-dom';

export default function NavBar (){
    return (
        <div className="navbar">
            <Link to="/allplayers">All Players</Link> 
            <Link to="/singleplayer">Single Player</Link>
        </div>
    )
}