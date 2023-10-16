import React, { useEffect } from "react";
import axios from "axios";
const getPhotos = () => {
  axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
const Photos = () => {
  useEffect(() => {
    getPhotos()
  }, []);
  return <div>Photos</div>;
};

export default Photos;
