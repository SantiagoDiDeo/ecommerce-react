
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { getAllProducts, getProductsByCategory } from '../utils/products';


const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(categoryId)
    },[categoryId]);

    useEffect(() => {
        if(categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))

        } else {
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))

        }
    },[categoryId])


        return (
            <div className='tituloSaludo'>
                <div className='titulo'>
                    <h1 className="productos">Productos</h1>
                    <h3 className="greeting">{greeting}</h3>
                </div>
                <ItemList products={products} />
            </div>
        );
};

export default ItemListContainer;