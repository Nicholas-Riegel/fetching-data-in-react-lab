import StarshipCard from './StarshipCard'

function StarshipList({starships}) {
    return (
        <ul>
          {starships.map((starship, i)=>(
            <StarshipCard key={i} {...{starship}}/>
          ))}
        </ul>
      )
}

export default StarshipList