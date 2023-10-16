import React from "react";

const YoutubeItem = () => {
  return <div className={`youtube-item ${props.className}`}>
  <div className="youtube-image">
    <img src={props.image} alt="" />
  </div>
  <div className="youtube-footer">
    <img src={props.image} alt="" className="youtube-avatar" />
    <div className="youtube-info">
      <div className="youtube-title">Learning</div>
      <div className="youtube-author">{props.name}</div>
    </div>
  </div>
</div>
};

export default YoutubeItem;
