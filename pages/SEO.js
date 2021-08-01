import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "Star Wars",
  description: "Star Wars website",
};
