import { appConfig } from "@/utils/config/appConfig";
import { Html, Head, Main, NextScript } from "next/document";

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
