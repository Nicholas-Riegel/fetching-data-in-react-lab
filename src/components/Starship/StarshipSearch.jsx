import {useState} from 'react'

function StarshipSearch({getData}) {

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        getData(query)
        setQuery('')
    }

    return (
        <>
            <h1>Search Starships</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    id='query'
                    onChange={(e)=>setQuery(e.target.value)}
                    value={query} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default StarshipSearch