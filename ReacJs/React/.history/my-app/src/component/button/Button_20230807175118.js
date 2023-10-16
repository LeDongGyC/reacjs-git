import React from 'react';
import "./Button."
const Button = (props) => {
    return (
        <button className='button'>
            {props.children}
        </button>
    );
};

export default Button;