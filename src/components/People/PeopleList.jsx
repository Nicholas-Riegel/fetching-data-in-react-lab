import PeopleCard from './PeopleCard'

function PeopleList({people}) {
    return (
        <section>
          <p>Number of results: {people.length}</p>
          <ul>
            {people.map((person, i)=>(
              <PeopleCard key={i} {...{person}}/>
            ))}
          </ul>
        </section>
      )
}

export default PeopleList