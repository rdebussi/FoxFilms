import Footer from "../../components/Footer";
import Header from "../../components/Header";
import erro404 from "./fox-2.png"
import styles from "./PageNotFound.module.css"

function PageNotFound(){
    return (
        <>
            <Header />
            <section className={styles.container}>
                <img src={erro404} alt="page not found"/>
                <h2>404 not found</h2>
            </section>
            <Footer />
        </>
    );
}

export default PageNotFound