import contentful from "../../contentful";
import { Player } from "video-react";
import React from "react";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
export default function Games({ game }) {
  console.log(game);
  return (
    <div>
      <p style={{ fontWeight: "bold", fontSize: "large" }}>
        {game?.fields?.title}
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
              <p>{game?.fields?.title}</p>
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(game?.fields?.overview),
              }}
            />
            <p>Publisher : {game?.fields?.publisher}</p>
            <p>Developer : {game?.fields?.developer}</p>
            <p>Initial release date :{game?.fields?.initialReleaseDate}</p>
            <p>Platforms :{game?.fields?.platforms}</p>
            <p>Game type:{game?.fields?.gameType?.fields?.gameType}</p>
          </div>
        </section>{" "}
      </body>
      <Player
        playsInline
        poster={game?.fields?.poster?.fields?.file?.url}
        src={game?.fields?.trailerurl?.content[0]?.content[0]?.value}
      />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params?.id);
  const result = await contentful.getEntry(`${params.id}`);
  console.log(result);
  return {
    props: {
      game: result,
      seo: { title: result?.fields?.title, description: "Star Wars Games" },
    },
  };
}
