import React, { useEffect, useState } from "react";

const useClickListener = (id, toggle) => {
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const targetedElement = document.querySelector(`#${id}`);
    // console.log("at use effect");
    document.body.addEventListener("click", (e) => {
      // console.log("at click body");
      if (targetedElement?.contains(e.target)) {
        setFocused(true);
        // console.log("at set true");
      } else {
        setFocused(false);
        // console.log("at set false");
      }
      if (toggle && focused && targetedElement?.contains(e.target)) {
        setFocused(false);
        // console.log("at toggle");
      }
    });
  }, []);
  return [
    focused,
    (value) => {
      setFocused(value);
    },
    () => {
      console.log(focused);
      setFocused(!focused);
    },
  ];
};

export default useClickListener;
