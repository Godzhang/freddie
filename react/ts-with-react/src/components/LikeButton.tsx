import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../App";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLButtonElement>(null);
  const theme = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    console.log("running");
    document.title = `you click ${like} times`;
  }, [like]);

  useEffect(() => {
    if (didMountRef.current) {
      console.log("is mounted");
    } else {
      didMountRef.current = true;
    }
  });

  function handle() {
    setTimeout(() => {
      console.log(like);
      console.log(likeRef.current);
      console.log(domRef.current?.innerText);
    }, 3000);
  }

  return (
    <>
      <button
        style={theme}
        onClick={() => {
          setLike((prevLike) => prevLike + 1);
          likeRef.current++;
        }}
        ref={domRef}
      >
        {like}👍
      </button>
      <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
      <button onClick={handle}>alert</button>
    </>
  );
};

export default LikeButton;
