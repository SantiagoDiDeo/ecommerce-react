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
            <>
                <button type={'button'} onClick={countDown}>-</button>
                <span>{count}</span>
                <button type={'button'} onClick={countUp}>+</button>
            </>
        );
};

export default ItemCount;
