import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext()

FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }){
    const [favorite, setFavorite] = useState(() => {
        // Carregar favoritos do localStorage
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        // Salvar favoritos no localStorage sempre que forem atualizados
        localStorage.setItem("favorites", JSON.stringify(favorite));
    }, [favorite]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite}}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

//Hook personalizado

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite){
        //verificar se ja tem favorito
        const repeatedFavorite= favorite.some((item) => item.id === newFavorite.id)
        
        //nova lista recebe lista anterior
        let newList = [...favorite]

        //verificar se não tem repetição e adicionar o item na lista de favoritos
        if (!repeatedFavorite) {
            newList.push(newFavorite);
            setFavorite(newList);
        } else {
            newList = favorite.filter((fav) => fav.id !== newFavorite.id);
            setFavorite(newList);
        }

        console.log('Favorite list:', newList);
    }

    return {
        favorite,
        addFavorite
    }
}