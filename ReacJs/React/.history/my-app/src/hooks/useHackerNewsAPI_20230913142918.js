import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const handleFetchRespose = useRef({});
  const [data, setData] = useState(in);
  const [loading, setLoading] = useState(true);
  const [message, setMessge] = useState([]);
  const [url, setUrl] = useState(initialUrl);
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
