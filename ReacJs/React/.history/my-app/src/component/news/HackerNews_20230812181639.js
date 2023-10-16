import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleFetchRespose = useRef({});
  handleFetchRespose.current = async () => {
    const respose = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(respose.data?.hits);
  };
  useEffect(() => {
    handleFetchRespose.current();
  }, []);
  return (
    <div>
    <input type="text" className="border border-green-400 text-black" value={} />
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
