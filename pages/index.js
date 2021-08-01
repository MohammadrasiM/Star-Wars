import styles from "../styles/Home.module.css";
import Link from "next/link";
import contentful from "../contentful";
import React, { useState } from "react";
export default function Home({ games }) {
  console.log(games);
  return (
    <>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
            {games?.map((g) => (
              <div className="col">
                {" "}
                <div className="card shadow-sm h-100">
                  <Link href={`/games/${g.sys.id}`}>
                    <a>
                      <img
                        className="card-img-top bd-placeholder-img"
                        style={{ layout: "fill" }}
                        alt={g.fields.poster.fields.title}
                        src={g.fields.poster.fields.file.url}
                      />
                    </a>
                  </Link>
                  <div className="card-body">
                    <Link href={`/games/${g.sys.id}`}>
                      <a style={{ color: "white" }}>
                        <p className="card-text">{g.fields.title}</p>
                      </a>
                    </Link>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            key={g.fields.id}
                          >
                            Reac Now
                          </button>
                        </div> */}
                      <small className="text-muted" key={g.fields.id}>
                        {g.fields.initialReleaseDate}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const result = await contentful.getEntries({
    content_type: "games",
  });
  return { props: { games: result.items } };
}
