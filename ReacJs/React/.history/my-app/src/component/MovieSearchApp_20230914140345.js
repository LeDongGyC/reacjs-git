// https://api.themoviedb.org/3/movie/550?api_key=95f2419536f533cdaa1dadf83c606027
// https://api.themoviedb.org/3/search/movie?api_key=03353b943970dc693fa2f337d37459be&query=''
import axios from 'axios';
import React, { useEffect } from 'react';

const MovieSearchApp = () => {
    useEffect(()=>{
        async function featchData() {
            const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=03353b943970dc693fa2f337d37459be&query=''`)
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MovieSearchApp;