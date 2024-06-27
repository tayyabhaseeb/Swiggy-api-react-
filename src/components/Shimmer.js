import React from "react";

function Shimmer() {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="shimmer-effect"></div>
      ))}
    </div>
  );
}

export default Shimmer;
