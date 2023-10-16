import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const handleFetchRespose = useRef({});
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [message, setMessge] = useState([]);
  const [url, setUrl] = useState(initialUrl);
  handleFetchRespose.current = async () => {
    setLoading(true);
    try {
      const respose = await axios.get(url);
      setData(respose.data || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessge(`The error happend ${message}`);
    }
  };
  useEffect(() => {
    handleFetchRespose.current();
  }, [url]);
  return {
    data,
    setUrl,
    loading,
    message,
  };
}
