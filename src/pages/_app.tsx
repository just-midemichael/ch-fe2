import "@/styles/globals.scss";
import { toastOptions } from "@/utils/config/toast.config";

import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-left" toastOptions={toastOptions} />
      <Component {...pageProps} />
    </>
  );
}
