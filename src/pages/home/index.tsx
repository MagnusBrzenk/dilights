import type { NextPage } from "next";
import Head from "next/head";
import { LightsImage } from "../../components/LightsImage";
import { scdotUrl } from "../../utils/constants";
import styles from "./styles.module.scss";

const onExampleUrls = [
  "di-example-on-1.jpg",
  "di-example-on-2.jpg",
  "di-example-on-3.jpg",
  "di-example-on-4.jpg",
  "di-example-on-5.jpg",
  "di-example-on-6.jpg",
];

const offExampleUrls = [
  "di-example-off-1.jpg",
  "di-example-off-2.jpg",
  "di-example-off-3.jpg",
  "di-example-off-4.jpg",
];

// const basePath = true ? "/dilights" : "";
// const basePath = process.env.NEXT_PUBLIC_BASE_HREF || "/";
const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_HREF || ""
    : "";

const Home: NextPage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Head>
        <title>Are DI Lights On?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Are DI Lights On at Govenors Park?</h1>

        <h2>Latest Image </h2>
        <div
          style={{
            width: "100%",
            maxWidth: 600,
          }}
        >
          <LightsImage
            width={"100%"}
            height={"auto"}
            highlightColor={"blue"}
            isToBeRefreshed={true}
          />
        </div>
        <h4> (Refreshes every 10s)</h4>
        <h2>How It Works</h2>

        <div>
          <p>
            {`This is a simple tool to help you decide if the lights are on at
          Govenors Park, Daniel Island, Charleston, SC. It works by showing
          the latest still image from highway webcam
          "I-526 E @ MM 26 (Wando Bridge)" available from the SC Department of
          Transportation website. You can find the live footage by going `}
            <a href={scdotUrl}>
              <span style={{ color: "blue", textDecoration: "underline" }}>
                here
              </span>
            </a>
            {` and selecting the camera icon near to where I-526 enters Mount Pleasant.
          If the lights are on at Govenors Park then you will see a row of about 5-6 white dots
          to the right of the highway. Reference photos are included below showing when
          the lights are on and off.`}
          </p>
        </div>

        <h2>Reference Images</h2>
        <h2>
          Lights <span style={{ color: "green" }}>ON</span>
        </h2>
        <p>
          <b>Beware!</b> Trees block some of the lights, so the wind will cause
          you to see different numbers of dots!
        </p>

        <div className={styles.lightsImagesWrapper}>
          {onExampleUrls.map((onExampleUrl, ind) => (
            <div key={ind} className={styles.lightsImageWrapper}>
              <LightsImage
                width={"auto"}
                height={"auto"}
                url={`${basePath}/jpgs/${onExampleUrl}`}
              />
            </div>
          ))}
        </div>

        <h2>
          Lights <span style={{ color: "red" }}>OFF</span>
        </h2>

        <p>
          <b>Beware!</b> When it is dark, the camera will sometimes produce a
          weird reflection effect whereby the lights of cars can appear to move
          off the highway and into the zone where the DI lights would be. For
          this reason, you may want to check the latest image through a few
          refreshes to be confident of your conclusion.
        </p>
        <div className={styles.lightsImagesWrapper}>
          {offExampleUrls.map((onExampleUrl, ind) => (
            <div key={ind} className={styles.lightsImageWrapper}>
              <LightsImage
                width={"auto"}
                height={"auto"}
                url={`${basePath}/jpgs/${onExampleUrl}`}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
