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
      <Player
        playsInline
        poster={game?.fields?.poster?.fields?.file?.url}
        src={game?.fields?.trailerurl?.content[0]?.content[0]?.value}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(game?.fields?.overview),
        }}
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
