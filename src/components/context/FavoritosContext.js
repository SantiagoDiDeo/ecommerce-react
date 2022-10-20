import { createContext, useState } from "react";


const FavoritosContext = createContext();

export  const FavoritosProvider = ( {children} ) => {
    const [listaFavoritos, setListaFavoritos] = useState([]);

    const agregarAFavoritos = (itemNuevo) => {
      const isInFavoritos = listaFavoritos.some((item) => item.id === itemNuevo.id);
      if (isInFavoritos) {
        console.log('ya esta en favoritos');
        return;
      } else {
        setListaFavoritos([...listaFavoritos, itemNuevo]);
      }
    };

    return (
        <>
            <FavoritosContext.Provider value={{listaFavoritos, agregarAFavoritos }}>
                {children}
           </FavoritosContext.Provider>
        </>
    )
}

export default FavoritosContext;