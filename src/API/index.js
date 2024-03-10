const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/players`;
const cohort = `2308-acc-et-web-pt-b`;

const state = {
    players: [],
};

async function fetchAllPlayers(){
    try {
        const response = await fetch(`${API_URL}`);
        const result = await response.json();
        state.players = result.data;
    } catch (error) {
        console.error(error);
    }
}