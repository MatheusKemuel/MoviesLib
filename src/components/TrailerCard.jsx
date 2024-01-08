import React from "react";

import ReactPlayer from "react-player";

const TrailerCard = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=USD0L-kEc8c"
        controls
        height="275px"
        width="400px"
      />
    </div>
  );
};

export default TrailerCard;
