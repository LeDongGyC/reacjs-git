import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, in) {
  const handleFetchRespose = useRef({});
  const [hits, setHits] = useState([]);

  const [loading, setLoading] = useState(true);
  const [message, setMessge] = useState([]);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  handleFetchRespose.current = async () => {
    setLoading(true);
    try {
      const respose = await axios.get(url);
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
  }, [url]);
  return () => {

  }
}
