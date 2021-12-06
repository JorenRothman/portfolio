import Head from "next/head";
import Nav from "../components/Nav/Nav";
import type { NextPage } from "next";
import PageHeader from "../components/PageHeader/PageHeader";
import Work from "../components/Work";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Joren Rothman</title>
        <meta name="description" content="Get your website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Nav></Nav>
      </header>

      <main className={styles.container}>
        <PageHeader></PageHeader>
        <Work></Work>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
