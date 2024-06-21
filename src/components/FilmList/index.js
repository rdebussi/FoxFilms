import styles from "./FilmList.module.css"
import Card from "../Card";

function FilmList({ films, emptyHeading}) {

    const count = films.length
    let heading = emptyHeading
    if(count > 0){
        const noun = count > 1 ? 'films' : 'film'
        heading = `${count} ${noun}` 
    }

    return(
        <>
            <h2>{heading}</h2>
            <section className={styles.films}>
                { films.map(film => <Card id={film.id} key={film.id} />) }
            </section>
        </>
    );
}

export default FilmList