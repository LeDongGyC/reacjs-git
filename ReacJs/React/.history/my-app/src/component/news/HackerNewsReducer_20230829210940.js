import React, { useEffect, useRef, useState, useReducer } from "react";
import axios from "axios";
// import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react
const initialState = {
  hits: [],
  query: "",
  loading: true,
  message: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, message: action.payload };
    }
    default:
      break;
  }
  return state;
};
const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
  const handleFetchRespose = useRef({});
  // const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState("react");
  // const [loading, setLoading] = useState(true);
  // const [message, setMessge] = useState([]);
  // const handleFetchRespose = useRef({});
  // const [url, setUrl] = useState(
  //   `https://hn.algolia.com/api/v1/search?query=${query}`
  // );
  handleFetchRespose.current = async () => {
    // setLoading(true);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const respose = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: respose.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // setHits(respose.data?.hits);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      // setMessge(`The error happend ${message}`);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type:"SET_ERROR",
        payload:
      })
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
          defaultValuevalue={state.query}
          // onChange={(e) => setQuery(e.target.value)}
        />
        <button
          // onClick={() =>
          //   setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          // }
          className="bg-blue-500 tex  -white font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.message && <p>{state.message}</p>}
      {!state.loading &&
        state.hits.length > 0 &&
        state.hits.map((item, index) => {
          if (!item.title || item.title.length <= 0) return null;
          return <h3 key={item.title}>{item.title}</h3>;
        })}
    </div>
  );
};

export default HackerNewsReducer;
