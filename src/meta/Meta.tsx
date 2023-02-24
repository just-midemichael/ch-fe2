import Head from "next/head";
import { NextSeo } from "next-seo";

import { appConfig } from "@/utils/config/appConfig";

import type MetaProps from "./Meta.props";

const Meta = (props: MetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: appConfig.locale,
          site_name: appConfig.site_name
        }}
      />
    </>
  );
};

export default Meta;
