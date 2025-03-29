import React from "react";

const CinemaBg = () => {
  return (
    <div className="flx-embed absolute top-0 left-0 w-full h-full">
      <div
        style={{
          position: "relative",
          height: "100%",
          //   paddingBottom: "60.35%",
          padding: 0,
          width: "100%",
          margin: 0,
        }}
        className="border-2 border-blue-500"
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://media.flixel.com/cinemagraph/5p1r3555z398perpttij?hd=true"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default CinemaBg;
