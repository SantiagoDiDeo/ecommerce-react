import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FavoritosContext from "./context/FavoritosContext";
import { getProduct } from "./utils/products";

const Favoritos = () => {
    const [product, setProduct] = useState()
    const data = useContext(FavoritosContext);
    console.log(data);

    useEffect(() =>{
        getProduct(1)
            .then((data) => {
                setProduct(data)
            })
            .catch(error => console.warn(error))
    }, []);

    return ( 
        <Container>
            <button onClick={() => data(product)}>Agregar a Favoritos</button>
        </Container>
     );
}
 
export default Favoritos;