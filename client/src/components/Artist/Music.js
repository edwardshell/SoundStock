import React from "react";

// const styles = {
//     song: {
//         position: "relative",
//         width: "260px",
//         height: "25px",
//         overflow: "hidden",
//         marginLeft: "20px"
//     },
//     controls: {
//         position: "absolute",
//         top: "-267px",
//         left: "-5px"
//     }
// }
const Music = props => (
  <div>
    <div>
      <iframe
        title="Song Link"
        width="300"
        height="24"
        frameborder="0"
        autohide="0"
        allowFullScreen
        src={props.src}
      />
    </div>
  </div>
);

export default Music;
