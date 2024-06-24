import Container from "../../components/Container"
import FilmList from "../../components/FilmList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useFavoriteContext } from "../../contexts/Favorites"
import styles from "./favorite.module.css"

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>My Favorites</h2>
                    { <FilmList films={favorite} /> }
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Favorites