import { useParams } from "react-router-dom"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Watch.module.css"
import films from "../../json/db.json"
import PageNotFound from "../PageNotFound"

function Watch(){
    const params = useParams()
    const film  = films.find(film =>  film.id === params.id)
    if (!film) {return <PageNotFound />}
    return (
        
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>{film.title}</h1>
                    <iframe 
                        width="854" height="480" 
                        src={`https://www.youtube.com/embed/${film.id}`}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Watch