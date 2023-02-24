import { Head, Html, Main, NextScript } from "next/document";

import { appConfig } from "@/utils/config/appConfig";

export default function Document() {
  return (
    <Html lang={appConfig.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
