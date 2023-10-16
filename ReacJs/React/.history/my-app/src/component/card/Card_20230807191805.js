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
const CardContent = styled.div`
    position:absolute;
    left: 50%;
    transform:t
`;
const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
        />
      </CardImage>
      <div>
        <div>
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
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
