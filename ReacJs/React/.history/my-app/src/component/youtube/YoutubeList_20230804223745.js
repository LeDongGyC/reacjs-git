import React from 'react';
import { YoutubeData } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = () => {
    return (
        <div className="youtube-list">
      {/* 
        xử lí kết quả trả về cần xử lí logic
       */}
      {YoutubeData.map((item, index) => {
        const newClass = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            name={item.name}
            className = {newClass}
          ></YoutubeItem>
        );
      })}

      {/* 
        xử lí kết quả trả về mà không cần xử lí logic      
       */}
      {/* {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          name={item.name}
        ></YoutubeItem>
      ))} */}
    </div>
    );
};

export default YoutubeList;