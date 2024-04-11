import "../public/assets/css/app.2afad0c.bundle.css";
import "../public/assets/css/swiper-custom.css";
import Head from "next/head";

import React, { useEffect, useState } from "react";
import Preloader from "../components/elements/Preloader";
import "react-modal-video/css/modal-video.css";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your site description here" />
        <title>Human Before Resource Pvt Ltd</title>
        <script src="/js/next/support.js" defer></script>
        {/* <script src="/metadata/metadata.js" defer></script> */}
        <script src="/js/ui/ui-dark-mode-toggle.js" defer></script>
        <script src="/js/ui/ui-responsive-nav.js" defer></script>
        <script src="/js/sw/sw-caching-strategies.js" defer></script>
        <script src="/js/sw/sw-push-notifications.js" defer></script>
        <script src="/js/analytics/analytics-google.js" defer></script>
        <script src="/js/analytics/analytics-facebook.js" defer></script>
        <script src="/js/seo/seo-schema-org.js" defer></script>
        <script src="/js/seo/seo-meta-tags.js" defer></script>
        <script src="/js/perf/perf-lazy-load-images.js" defer></script>
        <script src="/js/perf/perf-preload-assets.js" defer></script>
      </Head>
      {/* {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )} */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
