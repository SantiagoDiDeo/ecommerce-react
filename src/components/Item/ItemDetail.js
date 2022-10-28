import { useContext, useState } from "react";
import Item from "./Item";
import CartContext from '../context/CartContext'
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

   

    const handleAdd = (value) => {
      setCount(value);
      setShowItemCount(false);
      addItem(product, value);
    };

    return (
        <div className='itemDetailContainer'>
          <Card.Img src={product.pictureUrl} />
          <Card.Title >{product.title}</Card.Title>
            <Card.Text >{product.description}</Card.Text>
            <Card.Text >
              ${product.price}
            </Card.Text>
            {showItemCount && (<ItemCount initial={1} stock={10} onAdd={handleAdd} />)}
            {!showItemCount && (
              <Link to='/cart'>
                <Button variant="success">Ir al Carrito</Button>
              </Link>
          )};
        </div>
      );
 };

export default ItemDetail;