import React from 'react';
import { YoutubeData } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = () => {
    return (
        <div className="youtube-list">
      {/* <YoutubeItem image = "https://images.unsplash.com/photo-1690789460292-f21f50be653a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" name = "DongPL"></YoutubeItem>
      <YoutubeItem image = "https://images.unsplash.com/photo-1690983183786-ad265120ca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" name = "DongPL"></YoutubeItem>
      <YoutubeItem image = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" name = "DongPL"></YoutubeItem>
      <YoutubeItem image = "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" name = "DongPL"></YoutubeItem> */}

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