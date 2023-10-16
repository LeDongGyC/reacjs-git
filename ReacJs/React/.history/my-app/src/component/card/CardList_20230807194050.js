import React from 'react';
import styled from "styled-components"

const StyledCardList = styled.div`
    
`;
const CardList = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default CardList;