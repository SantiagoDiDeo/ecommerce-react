import { useContext } from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../context/CartContext';

const Cart = () => {
    const {cart, result} = useContext(CartContext);

    console.log({cart, result})

    return ( 
        <Link to='/cart'>
            <h1>Cart</h1>
        </Link>
    );
}

export default Cart;