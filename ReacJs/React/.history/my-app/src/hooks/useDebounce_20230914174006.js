import { useEffect, useState } from "react";

export default function useDeboune(initializeValue, delay) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, delay);
  }, [delay, initializeValue]);
  return () => {
    clearTimeout()
  }
}
