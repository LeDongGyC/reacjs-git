import React from 'react';
import styled from "styled-components"
const Card = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Card;