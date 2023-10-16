import React from 'react';

const Cell = (props) => {
    return (
        <div className='game-cell' onClick={props.onClick}>
        {props.values}
        </div>
    );
};

export default Cell;