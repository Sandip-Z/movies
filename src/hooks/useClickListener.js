import React, { useEffect, useState } from "react";

const useClickListener = (id) => {
  const [focused, setFocused] = useState(undefined);
  useEffect(() => {
    const targetedElement = document.querySelector(`#${id}`);
    document.body.addEventListener("click", (e) => {
      if (targetedElement.contains(e.target)) {
        setFocused(true);
      } else {
        setFocused(false);
      }
    });
  }, [id]);
  return [
    focused,
    (value) => {
      setFocused(value);
    },
  ];
};

export default useClickListener;
