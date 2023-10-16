import React from 'react';
import styled from "styled-components"

const StyledCardList = styled.div`
    display:grid;
    
`;
const CardList = (props) => {
    return (
        <StyledCardList>
            {props.children}
        </StyledCardList>
    );
};

export default CardList;