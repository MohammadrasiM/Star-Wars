import React, { useEffect, useState } from "react";
import Head from "next/head";
import "../styles/globals.css";
import "../pages/some.css";
import router, { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Col, Row, Spin } from "antd";
import Link from "next/link";
import SEO from "./SEO";
import Script from "next/script";
import "../pages/creadits/starwars.css";
import { Progress } from "antd";
import ReactAudioPlayer from "react-audio-player";
import "../styles/stars.css";
function MyApp({ Component, pageProps }) {
  const rout = useRouter();
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(30);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
      setState(false);
    });
    router.events.on("routeChangeComplete", () => {
      setPercent(100);
      setTimeout(() => {
        setLoading(false);
        setState(true);
      }, 200);
    });
  });
  useEffect(() => {
    if (loading) {
      setPercent(30);
      const interval = setInterval(() => {
        setPercent((value) => (value < 90 ? value + 10 : value));
      }, 300);
      return () => clearInterval(interval);
    }
    setPercent(30);
  }, [loading]);
  return (
    <>
      {loading && (
        <Row
          style={{
            backgroundColor: "#f8f9fa",
          }}
        >
          <Col xl={1} xs={4} sm={3} md={3}>
            {" "}
            <img
              style={{
                position: "absolute",
                width: "100px",
                height: "40px",
                backgroundColor: "#f8f9fa",
                zIndex: "1000",
                top: "-10",
              }}
              src="https://p.kindpng.com/picc/s/235-2353764_star-wars-lightsaber-laser-sword-free-photo-star.png"
              alt="lightsaber"
            />
          </Col>
          <Col xl={23} xs={20} sm={21} md={21}>
            <Progress
              status="exception"
              strokeWidth="12px"
              style={{
                paddingTop: "5px",
                position: "relative",
                display: "inline-flex",
                // width: "1112",
                backgroundColor: "#f8f9fa",
                zIndex: "5",

                background:
                  "-webkit-linear-gradient(top, rgba(229, 17, 21, 1) 0%, rgba(254, 254, 254, 1) 30%, rgba(254, 254, 254, 1) 0%, rgba(254, 254, 254, 1) 60%, rgba(229, 17, 21, 1) 100%)",
                borderRadius: "0 12px 12px 0",
                WebkitBoxShadow: "0px 0px 8px 2px rgba(255,56,56,1)",
                MozBoxShadow: "0px 0px 8px 2px rgba(255,56,56,1)",
                boxShadow: "0px 0px 8px 2px rgba(255,56,56,1)",
              }}
              percent={percent}
              showInfo={false}
            >
              {" "}
            </Progress>
            {muted && (
              <ReactAudioPlayer
                preload="auto"
                muted={state}
                src="https://www.myinstants.com/media/sounds/sithignition.mp3"
                autoPlay
              />
            )}
            {/*    http://soundfxcenter.com/movies/star-wars/8d82b5_Lightsaber_Igniting_Sound_Effect.mp3*/}
          </Col>
        </Row>
      )}
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

              <Link href="/series">
                <li className="nav-item">
                  <a className="nav-link">Series</a>
                </li>
              </Link>
              <Link href="/creadits">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link">Creadits</a>
                </li>
              </Link>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeHolder="Search"
                ariaLabel="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            {/* </form> */}
          </div>
        </div>
      </nav>
      <body>
        <SEO
          title={pageProps?.seo?.title}
          description={pageProps?.seo?.description}
        />
        <Component {...pageProps} />
      </body>
      <footer className="page-footer font-small white">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={() => {
              muted ? setMuted(false) : setMuted(true);
            }}
          />
          <label className="form-check-label">Loading sound Effect</label>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://github.com/MohammadrasiM">SMRM</a>
        </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </footer>
    </>
  );
}

export default MyApp;
