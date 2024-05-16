import { useState, useEffect } from 'react'
import StarshipSearch from './components/StarshipSearch' 
import StarshipList from './components/StarshipList'
import { fetchFromSwapi } from './services/starshipService'

function App() {
    
    const [starships, setStarships] = useState([])

    const getData = async (query) => {
      const data = await fetchFromSwapi(query)
      setStarships(data.results)
    }      
    
    useEffect(()=>{
      getData()
    }, [])

    return (
      <>
        <StarshipSearch {...{getData}}/>
        <StarshipList {...{starships}}/>
      </>
    )
}

export default App