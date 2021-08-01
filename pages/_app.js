import React, { useEffect, useState } from "react";
import Head from "next/head";
import "../styles/globals.css";
import "../pages/some.css";
import router, { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Spin } from "antd";
import Link from "next/link";
import SEO from "./SEO";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  const rout = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
  });

  return (
    <Spin spinning={loading}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <Script src="https://third-party-script.js"></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></Script>

      <Script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
        integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
        crossorigin="anonymous"
      ></Script>
      <Script type="text/javascript" src="/dist/js/vendor.min.js"></Script>
      <Script
        type="text/javascript"
        src="https://cdn.turbo360-dev.com/dist/turbo.min.js"
      ></Script>
      <Script type="text/javascript" src="/dist/bundle/commons.js"></Script>
      <Script type="text/javascript" src="/dist/bundle/app.js"></Script>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              {" "}
              <>STAR WARS </>
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link href="/">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link active" ariaCurrent="page">
                    Home
                  </a>
                </li>
              </Link>

              <Link href="/movies">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link">Movies</a>
                </li>
              </Link>

              <Link href="/">
                <li className="nav-item">
                  <a className="nav-link">Series</a>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeHolder="Search"
                ariaLabel="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <SEO
        title={pageProps?.seo?.title}
        description={pageProps?.seo?.description}
      />
      <Component {...pageProps} />
    </Spin>
  );
}

export default MyApp;
