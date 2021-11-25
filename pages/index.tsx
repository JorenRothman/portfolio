import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Joren Rothman</title>
        <meta name="description" content="Get your website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
