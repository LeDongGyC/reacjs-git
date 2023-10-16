import React, { useEffect, useState } from "react";
import axios from "axios";
const getRandomPhotos = async () => {
  try {
    const response = await axios.get("https://picsum.photos/v2/list?limit=8");
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
    <div className="grid grid-cols-4 gap-5 p-5">
      {randomPhotos.length > 0 &&
        randomPhotos.map((item, index) => (
          <div key={item.id} className="p-3 bg-white rounded-lg shadow-md h-[200px]">
            <img
              src={item.download_url}
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
            <button className="inline-block px-8 py-4 bg-purple-600 tex"></button>
          </div>
        ))}
    </div>
  );
};

export default Photos;
