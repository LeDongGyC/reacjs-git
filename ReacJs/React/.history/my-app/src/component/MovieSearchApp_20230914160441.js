// https://api.themoviedb.org/3/movie/550?api_key=95f2419536f533cdaa1dadf83c606027
// https://api.themoviedb.org/3/search/movie?api_key=03353b943970dc693fa2f337d37459be&query=''
import axios from "axios";
import React, { useEffect } from "react";

const MovieSearchApp = () => {
  useEffect(() => {
    async function featchData() {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=03353b943970dc693fa2f337d37459be&query=''`
      );
      console.log(result);
    }
    featchData();
  }, []);
  return
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          type="text"
          className="w-full p-5 rounded-lg border border-purple-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]"
          placeholder="Search movie..."
          onChange={(e) => setQuery(e.target.value)}
          // onChange={handleChange}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-10">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      <div className="grid grid-cols-3 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <MovieItem key={item.id} data={item}></MovieItem>
          ))}
  </div>;
  <div></div>
};

export default MovieSearchApp;
