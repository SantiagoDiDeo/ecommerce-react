import React, { useState } from 'react';
import './ItemCount.css';   

const ItemCount = () => {
    const [count, setCount] = useState(0);


    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

        return (
            <div className="counter">
                <button type={'button'} onClick={countDown}>-</button>
                <h1>{count}</h1>
                <button type={'button'} onClick={countUp}>+</button>
            </div>
        );
};

export default ItemCount;
