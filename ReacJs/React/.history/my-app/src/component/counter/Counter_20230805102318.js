import React, { useState } from 'react';

const Counter = () => {
    const[count, setCount] = useState(0);
    const handleIncrement = () => {
        console.log("click");
    }
    return (
        <div onClick={handleIncrement}>
        </div>
    );
};

export default Counter;