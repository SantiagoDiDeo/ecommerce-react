import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartWidget = () => {

    return (
        <Link to='/cart'>
            <HiShoppingCart/>
        </Link>
    );
};

export default CartWidget;