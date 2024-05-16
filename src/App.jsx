import { useState, useEffect } from 'react'
import { fetchFromSwapi } from './services/starshipService'
import './App.css'
import StarshipSearch from './components/StarshipSearch' 
import StarshipList from './components/StarshipList'

function App() {
    
    const [starships, setStarships] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async (query) => {
      setLoading(true)
      const data = await fetchFromSwapi(query)
      setStarships(data.results)
      setLoading(false)
    }      
    
    useEffect(()=>{
      getData()
    }, [])

    return (
      <>
        <h1>Star Wars API</h1>
        <StarshipSearch {...{getData}}/>
        <h2>Starships</h2>
        {loading 
          ? <h2>Loading...</h2>
          : <StarshipList {...{starships}}/>
        }
      </>
    )
}

export default App