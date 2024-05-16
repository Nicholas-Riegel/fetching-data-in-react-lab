const BASE_URL = `https://swapi.dev/api/starships/`;

const fetchFromSwapi = async (starship) => {

    let res = null;

    try {
        if (starship){
            const queryString = `?search=${starship}`;
            res = await fetch(BASE_URL + queryString);
        } else {
            res = await fetch(BASE_URL);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export { fetchFromSwapi };
