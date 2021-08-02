import contentful from "../../contentful";
import { Player } from "video-react";
import ReactAudioPlayer from "react-audio-player";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import React from "react";
export default function Movies({ movie }) {
  console.log(movie);
  const [state, setState] = React.useState(false);
  return (
    <div>
      <ReactAudioPlayer
        preload="auto"
        muted={state}
        src={movie?.fields?.audio}
        autoPlay
      />
      {/* <audio autoPlay>
        <source src={movie?.fields?.audio} type="audio/mpeg" />
      </audio> */}
      <p style={{ fontWeight: "bold", fontSize: "large" }}>
        {movie?.fields?.title}
      </p>
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
              <p>{movie?.fields?.title}</p>
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(movie?.fields?.overviews),
              }}
            />
            <p>Director :{movie?.fields?.director}</p>
            <p>Initial release date :{movie?.fields?.initialReleaseDate}</p>
            <p>Production Company : {movie?.fields?.productioncompany}</p>
            <p>Cast : {movie?.fields?.cast}</p>
          </div>
        </section>{" "}
      </body>
      <div onClick={() => setState(true)}>
        <Player
          playsInline
          poster={movie?.fields?.poster?.fields?.file?.url}
          src={movie?.fields?.trailer?.content[0]?.content[0]?.value}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id);

  const result = await contentful.getEntry(`${params.id}`);
  console.log(result);
  return {
    props: {
      movie: result,
      seo: { title: result?.fields?.title, description: "Star Wars Movies" },
    },
  };
}
