import { useState, useEffect } from "react"
import { fetchPeople } from "../../services/peopleService"
import PeopleSearch from "./PeopleSearch"
import PeopleList from "./PeopleList"

function PeoplePage() {

    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async (query) => {
        setLoading(true)
        const data = await fetchPeople(query)
        setPeople(data.results)
        setLoading(false)
    }      
      
    useEffect(()=>{
        getData()
    }, [])
    
    return (
        <>
            <PeopleSearch {...{getData}}/>
            <h2>People</h2>
            {loading 
            ? <h2>Loading...</h2>
            : <PeopleList {...{people}}/>
            }
        </>
    )
}

export default PeoplePage