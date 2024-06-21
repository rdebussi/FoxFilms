import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Search.module.css"
import films from "../../json/db.json"
import SearchVideo from "../../components/SearchVideo";

function Search() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <SearchVideo films={films} />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search