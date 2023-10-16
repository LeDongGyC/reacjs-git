import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const dom = nodeRef.current;
    function handleMouseOver() {
      setHovered(true);
    }
    function handleMouseOut() {
      setHovered(false);
    }
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
        dom.addEventListener("mouseover", handleMouseOver);
        dom.addEventListener("mouseout", handleMouseOut);
    }
  }, []);
}
