import React from 'react';
import Cell from './Cell';

const Board = () => {
    return (
        <div className='game-board'>
            {Array(9).f}
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
        </div>
    );
};

export default Board;