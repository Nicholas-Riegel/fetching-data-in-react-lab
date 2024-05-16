import { useState, useEffect } from "react"
import { fetchStarships } from "../../services/starshipService"
import StarshipSearch from "./StarshipSearch"
import StarshipList from "./StarshipList"

function StarshipPage() {

    const [starships, setStarships] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async (query) => {
        setLoading(true)
        const data = await fetchStarships(query)
        setStarships(data.results)
        setLoading(false)
    }      
      
    useEffect(()=>{
        getData()
    }, [])
    
    return (
        <>
            <StarshipSearch {...{getData}}/>
            <h2>Starships</h2>
            {loading 
            ? <h2>Loading...</h2>
            : <StarshipList {...{starships}}/>
            }
        </>
    )
}

export default StarshipPage