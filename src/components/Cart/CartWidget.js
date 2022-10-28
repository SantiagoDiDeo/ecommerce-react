import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const CartWidget = () => {
    const {totalNumber} = useContext(CartContext)

    return (
        <>
            <Link to='/cart'>
                <HiShoppingCart/>
            </Link>
            {totalNumber > 0 && (<Badge bg="secondary">{totalNumber}</Badge>)}
            
        </>
    );
};

export default CartWidget;