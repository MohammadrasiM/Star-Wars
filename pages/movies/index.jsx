import Link from "next/link";
import React, { useState } from "react";
import { Spin, Row, Col } from "antd";
import { Card } from "antd";
import { Pagination } from "antd";
import contentful from "../../contentful";
const { Meta } = Card;
export default function movie({ movies }) {
  console.log(movies);
  return (
    <div>
      {/* {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <a>
            <h1 key={movie.id}>{movie.title}</h1>
          </a>
        </Link>
      ))} */}
      <Row gutter={100}>
        {movies?.map((b) => (
          <Col key={b.sys.id} xs={24} sm={12} md={8} xl={6}>
            <Link href={`/movies/${b.sys.id}`}>
              <a>
                <Card
                  style={{ overflow: "hidden", height: 250 }}
                  hoverable
                  cover={
                    <img
                      alt={b.fields.title}
                      src={b.fields.poster.fields.file.url}
                    />
                  }
                >
                  <Meta title={b.fields.title} />
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export async function getStaticProps() {
  const result = await contentful.getEntries({
    content_type: "movies",
  });
  return {
    props: {
      movies: result.items,
      seo: { title: "STW Movies", description: "Star Wars Movies" },
    },
  };
}
