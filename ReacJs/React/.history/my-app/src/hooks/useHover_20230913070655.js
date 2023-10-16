import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseo", handleMouseOut);
    }
  }, []);
}
