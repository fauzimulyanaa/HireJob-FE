/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ReactCardSlider from "react-card-slider-component";
import CommentCard from "./CommentCard";
const CommentSlider = ({ comments, cardStyles, imageStyles }) => {
  const slides = comments.map((comment, index) => ({
    content: <CommentCard key={index} {...comment} cardStyles={cardStyles} imageStyles={imageStyles} />,
  }));

  return (
    <div className="max-w-screen-lg mx-auto">
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default CommentSlider;
