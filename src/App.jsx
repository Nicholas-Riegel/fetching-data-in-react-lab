import { useState} from 'react'
import './App.css'
import Nav from './components/nav'
import StarshipPage from './components/Starship/StarshipPage'
import HomePage from './components/HomePage'
import PeoplePage from './components/People/PeoplePage'

function App() {
    
    const [page, setPage] = useState('home')

    const handleNavClick = (page) => {
      setPage(page)
    }

    return (
      <>
        <Nav {...{handleNavClick}}/>
        <h1>Star Wars API</h1>
        {page === 'home' && <HomePage />}
        {page === 'starships' && <StarshipPage />}
        {page === 'people' && <PeoplePage />}
        
      </>
    )
}

export default App