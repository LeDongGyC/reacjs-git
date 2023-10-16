import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const handleFetchRespose = useRef({});
  handleFetchRespose.current = async () => {
    const respose = await axios.get(
        set
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(respose.data?.hits);
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
      {loading && <p>Loading...</p>}
      {!loading && hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
