import React from 'react';

const CardTailwind = () => {
    return (
        <div>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div>
            <div
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </div>
          <CardHeart>
            <img src="/coolicon.svg" alt="" />
            <span>256</span>
          </CardHeart>
        </div>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <span className="card-amount">
            12,000 PSL
          </span>
        </CardFooter>
      </div>
    </div>
    );
};

export default CardTailwind;