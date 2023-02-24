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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
