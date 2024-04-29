import React from "react";

export default function useKeyDown(key, callback) {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === key) {
        callback(event);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [key, callback]);
}
