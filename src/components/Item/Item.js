import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './Item.css';




const Item = ({ product }) => {
    const [show, setShow] = useState(true);

    return (
        <div className='card'>
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                        <Card.Text className='price'>
                            $ {product.price}
                        </Card.Text>
                        <Card.Subtitle className='divCounter'>
                        <Link  to={`/Item/${product.id}`}>
                            {show && <Button variant="primary"onClick={() => setShow(prev => !prev)}>Ver detalle</Button>}
                        </Link>
                        </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>    
        );
}

export default Item;

