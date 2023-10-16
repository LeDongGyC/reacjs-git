import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
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
  useEffect(() => {
    handleFetchRespose.current();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="border border-green-400 text-black p-5 mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && message %%}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
