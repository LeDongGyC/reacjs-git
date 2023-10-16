import React, { useEffect } from 'react';
import axios from "axios"
const GetPhotos = () => {
    axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
const Photos = () => {
    useEffect(() =>{
        
    },[])
    return (
        <div>
           Photos 
        </div>
    );
};

export default Photos;