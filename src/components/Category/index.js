import styles from "./Category.module.css"
import films from "../../json/db.json"

export const categories = [
    "horror",
    "fantasy",
    "a24"
  ]
  
 export function filterCategory(id){
    return films.filter(film => film.category === categories[id])
  }
  

function Category({ category, children }){
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                { children }
            </div>  
        </section>
    )
}

export default Category