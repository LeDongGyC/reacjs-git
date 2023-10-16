import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 10px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap:12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius:100rem;
  object-fit:cover;
  flex-shrink:0;
`;
const CardFooter = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const CardTitle = styled.h3``;
const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
              alt=""
            />
            <span>@zndrson</span>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
