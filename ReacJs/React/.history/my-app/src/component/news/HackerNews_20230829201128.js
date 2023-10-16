import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [message, setMessge] = useState([]);
  const handleFetchRespose = useRef({});
  handleFetchRespose.current = async () => {
    setLoading(true);
    try {
      const respose = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(respose.data?.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessge(`The error happend ${message}`);
    }
  };
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  useEffect(() => {
    handleFetchRespose.current();
  }, []);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          defaultValuevalue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-500 tex  -white font-semibold p-5 rounded-md flex-shrink-0">
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && message && <p>{message}</p>}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
