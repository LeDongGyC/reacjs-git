import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 10px;
`;
const CardImg = styled.img`
    display:block;
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius:inherit;
`;
const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://dribbble.com/shots/21796983-Round-and-round"
          alt=""
        />
      </CardImage>
      <div>
        <div>
          <div>
            <img
              src="https://dribbble.com/shots/21796983-Round-and-round"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
