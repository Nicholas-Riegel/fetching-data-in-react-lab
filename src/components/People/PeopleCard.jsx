
function PeopleCard({person}) {
    return (
      <li>
        <h3>{person.name}</h3>
        <p>DOB: {person.birth_year}</p>
        <p>Eye color: {person.eye_color}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
      </li>
    )
  }
  
  export default PeopleCard