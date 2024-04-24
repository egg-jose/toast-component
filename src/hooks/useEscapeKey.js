import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        callback(event);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [callback]);
}
