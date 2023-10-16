import React from "react";
import styled from "styled-components";
const Card = (props) => {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
        alt=""
      />
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
        </div>
      </div>
    </div>
  );
};

export default Card;
