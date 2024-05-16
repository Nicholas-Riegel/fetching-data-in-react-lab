import StarshipCard from './StarshipCard'

function StarshipList({starships}) {
    return (
        <section>
          <p>Number of results: {starships.length}</p>
          <ul>
            {starships.map((starship, i)=>(
              <StarshipCard key={i} {...{starship}}/>
            ))}
          </ul>
        </section>
      )
}

export default StarshipList