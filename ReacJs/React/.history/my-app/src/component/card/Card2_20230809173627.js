import React from "react";
import styled, { css } from "styled-components";
const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  };
  .card-content{
    position: absolute;
  left: 50%;
  width: calc(100% - 36px);
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  }
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
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardHeart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  color: black;
  font-size: 18px;
  font-weight: 500;
`;
const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #20e3b2 1.38%,
        #2cccff 64.35%,
        #fc2872 119.91%
      );
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
const Card2 = (props) => {
  return (
    <StyledCard>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
        />
      </div>
      <div className=".card-content">
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardHeart>
            <img src="/coolicon.svg" alt="" />
            <span>256</span>
          </CardHeart>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary}>12,000 PSL</CardAmount>
        </CardFooter>
      </.>
    </StyledCard>
  );
};

export default Card2;
