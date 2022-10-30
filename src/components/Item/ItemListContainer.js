
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../utils/products';

const ItemListContainer = ( { greeting, description, descriptionOne } ) => {
    const { categoryId } = useParams();
    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        if(categoryId) {
            getProductsByCategory(categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        };
    }, [ categoryId ] );

        return (
            <div className='tituloSaludo'>
                <div className='titulo'>
                    <h1 className="productos">Total Vision Sport's</h1>
                    <h3 className="greeting">{ greeting }</h3>
                    <h4 className='description'> { description }</h4>
                    <h3 className='description'>{ descriptionOne }</h3>
                </div>
                <ItemList products={ products } />
            </div>
        );
};

export default ItemListContainer;