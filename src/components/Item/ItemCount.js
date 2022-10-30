import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './ItemCount.css';   

const ItemCount = ( { initial, stock, onAdd } ) => {
    const [ count, setCount ] = useState(initial);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount( parseInt(initial) );
    }, [ initial ] );

    return (
        <div className='itemCountContainer' >
            <div className='counter' >
                <Button type={ 'button' } variant='danger' disabled={ count <= 1 }  onClick={ countDown }>-</Button>
                <h5>{ count }</h5>
                <Button type={ 'button' } variant='success' disabled={ count >= stock } onClick={ countUp }>+</Button>
            </div>
            <div>
                <Button variant='primary' disabled={ stock <= 0 } onClick={ handleClick } >Agregar al carrito</Button>
            </div>
        </div>
    );
};

export default ItemCount;