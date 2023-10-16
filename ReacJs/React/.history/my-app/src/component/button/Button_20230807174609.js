import React from 'react';
import "./"
const Button = (props) => {
    return (
        <button>
            {props.children}
        </button>
    );
};

export default Button;