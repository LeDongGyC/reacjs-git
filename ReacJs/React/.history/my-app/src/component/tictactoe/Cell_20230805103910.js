import React from 'react';

const Cell = (props) => {
    return (
        <div className='game-cell' onClick={props.}>
        </div>
    );
};

export default Cell;