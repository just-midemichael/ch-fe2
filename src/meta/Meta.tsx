import { appConfig } from "@/utils/config/appConfig";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import MetaProps from "./Meta.props";

const Meta = (props: MetaProps) => {
  const router = useRouter();
  console.log("dummy");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
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
          site_name: appConfig.site_name,
        }}
      />
    </>
  );
};

export default Meta;
