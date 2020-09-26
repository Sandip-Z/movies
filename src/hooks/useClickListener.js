import React, { useEffect, useState } from "react";

const useClickListener = (id, toggle) => {
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    const targetedElement = document.querySelector(`#${id}`);
    document.body.addEventListener("click", (e) => {
      if (targetedElement.contains(e.target)) {
        setFocused(true);
      } else {
        setFocused(false);
      }
      // console.log(focused, targetedElement.contains(e.target));
      if (toggle && focused && targetedElement.contains(e.target)) {
        setFocused(false);
      }
    });
  });
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
