import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './Item.css';




const Item = ({ product }) => {
    return (
        <div className='card'>
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.pictureUrl} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            $ {product.price}
                        </Card.Text>
                        <Card.Text>
                            <ItemCount />
                        </Card.Text>
                        <Link to={`/Item/${product.id}`}>
                            <Button variant="primary">Ver detalle</Button>
                        </Link>
                </Card.Body>
            </Card>
        </div>    
        );
}

export default Item;

