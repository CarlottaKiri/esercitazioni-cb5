import React, { useState } from "react";
import "./index.css";

const LikeButton = () => {
  const [like, setLike] = useState(0),
    [isLiked, setIsLiked] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLiked ? -1 : 1));
      setIsLiked(!isLiked);
    };

  return (
    <>
      <button
        className={"like-button " + (isLiked ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"❤"} | {like}
      </button>
    </>
  );
};

export default LikeButton;
