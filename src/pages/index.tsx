import Head from "next/head";
// import c from "@/styles/some.js";
import styles from "@/styles/Home.module.css";

export default function Home() {
  // console.log(c);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
