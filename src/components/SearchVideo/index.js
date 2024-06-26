import { useEffect, useState } from "react"
import FilmList from "../FilmList"
import styles from "./SearchVideo.module.css"
import Loader from "../Loader"

//filtrando filmes por categoria ou titulo
function filterFilms(films, searchText){
    return films.filter((film) => film.category.includes(searchText) ||
    film.title.includes(searchText))
}

function SearchVideo({ films }) {

    const [ searchText, setSearchText ] = useState("")
    const foundFilms = filterFilms(films, searchText)

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    return (
        <>
            <section className={styles.container}>
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
            { 
                loading ? <Loader /> : 
                <FilmList 
                    films={foundFilms}
                    emptyHeading={`'${searchText}' not founded!`}
                />
            }
            </section>
        </>
    )
}

export default SearchVideo