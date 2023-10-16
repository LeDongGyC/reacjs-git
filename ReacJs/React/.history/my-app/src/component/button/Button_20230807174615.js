import React from 'react';
import "./Button"
const Button = (props) => {
    return (
        <button>
            {props.children}
        </button>
    );
};

export default Button;