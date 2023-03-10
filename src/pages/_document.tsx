import { Head, Html, Main, NextScript } from "next/document";

import { appConfig } from "@/utils/config/appConfig";

export default function Document() {
  return (
    <Html lang={appConfig.locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Poppins:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" key="charset" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
