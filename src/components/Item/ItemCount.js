import React, { useEffect, useState } from 'react';
import './ItemCount.css';   

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);


    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);


        return (
            <div className='itemCountContainer' >
                <div className='counter' >
                    <button type={'button'} variant='danger' disabled={count <= 1}  onClick={countDown}>-</button>
                    <h5>{count}</h5>
                    <button type={'button'} variant='success' disabled={count >= stock} onClick={countUp}>+</button>
                </div>
                <div>
                    <button variant='primary' disabled={stock <= 0} onClick={handleClick} >Agregar al carrito</button>
                </div>
            </div>
        );
};

export default ItemCount;