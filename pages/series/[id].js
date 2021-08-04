import contentful from "../../contentful";
import { Player } from "video-react";
import ReactAudioPlayer from "react-audio-player";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation]);
export default function Series({ serie }) {
  console.log(serie);
  const [state, setState] = React.useState(false);

  return (
    <div>
      <ReactAudioPlayer
        preload="auto"
        muted={state}
        src={serie?.fields?.audio}
        autoPlay
      />
      {/* <audio autoPlay>
        <source src={serie?.fields?.audio} type="audio/mpeg" />
      </audio> */}
      <p style={{ fontWeight: "bold", fontSize: "large" }}>
        {serie?.fields?.title}
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
              <p>{serie?.fields?.title}</p>
            </div>

            <p
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(serie?.fields?.overview),
              }}
            />
            <p>Creator :{serie?.fields?.creator}</p>
            <p>FirstEpisodeDate :{serie?.fields?.firstEpisodeDate}</p>
            <p>Production Company : {serie?.fields?.productioncompany}</p>
            <p>Cast : {serie?.fields?.cast}</p>
          </div>
        </section>{" "}
      </body>
      <div onClick={() => setState(true)}>
        <Swiper navigation={true} className="mySwiper">
          {serie?.fields?.trailers?.map((s, i) => {
            return (
              <SwiperSlide key={s?.fields?.description}>
                <Player
                  playsInline
                  poster={serie?.fields?.poster[i]?.fields?.file?.url}
                  src={s?.fields?.file?.url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
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
      serie: result,
      seo: { title: result?.fields?.title, description: "Star Wars Series" },
    },
  };
}
