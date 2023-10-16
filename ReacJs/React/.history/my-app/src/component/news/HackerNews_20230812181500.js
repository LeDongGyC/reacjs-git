import React, { useEffect, useState } from "react";
import axios from "axios";
// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleFetchRespose = async () => {
    const respose = await axios.get(
      " https://hn.algolia.com/api/v1/search?query=react"
    );
    setHits(respose.data?.hits);
  };
  useEffect(() => {
    handleFetchRespose();
  }, []);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;
