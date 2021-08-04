import React from "react";

export default function starwars() {
  return (
    <body
      style={{
        width: "100%",
        height: "100%",
        background: "#000",
        overflow: "hidden",
      }}
    >
      {" "}
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Star Wars</p>
            <h1>SMRM</h1>
          </div>

          <p>
            Brought to you by the Power of Force and Next js , React js
            ,bootstrap,AntD,sweeper and Me . hope you enjoy it as much as i did
            , contact info :+989128131774
          </p>
        </div>
      </section>{" "}
    </body>
  );
}
