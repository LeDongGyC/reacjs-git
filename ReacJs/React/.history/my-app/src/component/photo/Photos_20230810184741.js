import React, { useEffect } from "react";
import axios from "axios";
const GetPhotos = () => {
  axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
const Photos = () => {
  useEffect(() => {}, []);
  return <div>Photos</div>;
};

export default Photos;
