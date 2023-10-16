import React, { useEffect, useState } from "react";
import axios from "axios";
const getRandomPhotos = async () => {
  try {
    const response = await axios.get("https://picsum.photos/v2/list");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to be caught by the caller if needed.
  }
};
const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  useEffect(() => {
    getRandomPhotos().then((images) => {
      setRandomPhotos(images);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 g">
      {randomPhotos.map((item, index) => (
        <div key={index}>{item.id}</div>
      ))}
    </div>
  );
};

export default Photos;
