import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import iconFavorite from "./liked.png"
import iconUnfavorite from "./unliked.png"
import { useFavoriteContext } from "../../contexts/Favorites"

function Card({ id }) {

    const { favorite, addFavorite } = useFavoriteContext()

    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconUnfavorite : iconFavorite

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt="thumbnail" 
                    className={styles.thumb}
                />
            </Link>
            <figure className={styles.icon}>
                <img
                    src={icone}
                    alt="heart"
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    )
}

export default Card