const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;
const cohort = `2308-acc-et-web-pt-b`;

export default async function fetchAllPlayers(){
    const response = await fetch(`${API_URL}`);
    const result = await response.json();
    return result.data.players;
}