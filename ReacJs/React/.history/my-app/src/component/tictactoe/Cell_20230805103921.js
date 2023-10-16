import React from 'react';

const Cell = (props) => {
    return (
        <div className='game-cell' onClick={props.onClick}>
        {props.}
        </div>
    );
};

export default Cell;