import React from "react";

const CardTailwind = () => {
  return (
    <div className="relative">
      <div className="w">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
              alt=""
            />
            <div>@zndrson</div>
          </div>
          <div>
            <img src="/coolicon.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div>
          <div>Cosmic Perspective</div>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
