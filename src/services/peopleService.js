const BASE_URL = `https://swapi.dev/api/people/`;

const fetchPeople = async (person) => {

    let res = null;

    try {
        if (person){
            const queryString = `?search=${person}`;
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

export { fetchPeople };
