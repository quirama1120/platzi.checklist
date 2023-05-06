import React from "react";
import "./Skeleton.css";

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__avatar" />
      <div className="skeleton__text" />
    </div>
  );
}

export { Skeleton };
