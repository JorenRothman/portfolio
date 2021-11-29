import { motion, useAnimation } from "framer-motion";

import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import type { NextPage } from "next";
import Work from "../components/Work";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const controls = useAnimation();

  return (
    <div>
      <Head>
        <title>Portfolio - Joren Rothman</title>
        <meta name="description" content="Get your website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <motion.a
            className={styles.navLink}
            href="#top"
            onHoverStart={async (event) => {
              controls.start(
                {
                  y: -95,
                },
                { duration: 0.2 }
              );

              controls.start({ x: 0 }, { duration: 0.2 });
            }}
            onHoverEnd={(event) => {
              controls.start({ x: "70%" }, { duration: 0.2 });
            }}
          >
            Top
          </motion.a>
          <motion.a
            onHoverStart={async (event) => {
              controls.start(
                {
                  y: -61,
                },
                { duration: 0.2 }
              );

              controls.start({ x: 0 }, { duration: 0.2 });
            }}
            onHoverEnd={(event) => {
              controls.start({ x: "70%" }, { duration: 0.2 });
            }}
            className={styles.navLink}
            href="#work"
          >
            Work
          </motion.a>
          <motion.a
            onHoverStart={async (event) => {
              controls.start(
                {
                  y: -22,
                },
                { duration: 0.2 }
              );

              controls.start({ x: 0 }, { duration: 0.2 });
            }}
            onHoverEnd={(event) => {
              controls.start({ x: "70%" }, { duration: 0.2 });
            }}
            className={styles.navLink}
            href="#contact"
          >
            Contact
          </motion.a>
        </nav>

        <motion.div
          initial={{ x: "70%", y: -61 }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={styles.finger}
        >
          <svg
            width="43"
            height="24"
            viewBox="0 0 43 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.907 12.0916C29.907 14.4023 29.6625 15.9978 29.6441 16.1079L28.4338 15.9184C28.4399 15.8634 29.1001 11.517 28.2076 6.79772L29.4057 6.57154C29.7909 8.58273 29.907 10.5022 29.907 12.0916ZM29.039 16.0101L28.4338 15.9184L29.039 16.0101Z"
              fill="black"
            />
            <path
              d="M26.3493 14.4023L25.2061 14.8303C25.145 14.6713 23.7329 10.8323 24.9922 8.06313L26.1047 8.57051C25.0533 10.8751 26.337 14.3657 26.3493 14.4023Z"
              fill="black"
            />
            <path
              d="M24.2403 16.493L23.1033 16.9392C23.0177 16.7131 20.9515 11.3397 22.1435 6.31478L23.3356 6.59598C22.2291 11.2419 24.222 16.438 24.2403 16.493Z"
              fill="black"
            />
            <path
              d="M55.0378 1.23484C53.106 1.27763 51.2416 1.61996 49.5971 1.9195C48.8697 2.05398 48.1789 2.17625 47.5432 2.26794C44.1565 2.73864 41.8091 2.6225 39.0949 2.48801C36.5275 2.35963 33.6177 2.21903 29.1123 2.53691C19.4904 3.21546 10.3942 3.43553 8.34024 3.43553C7.80841 3.43553 5.95616 3.53334 4.32398 4.82319C2.53897 6.2353 1.63424 8.57048 1.63424 11.7615C1.63424 14.9525 2.53897 17.2877 4.31786 18.6998C5.94393 19.9896 7.8023 20.0875 8.33413 20.0875C10.382 20.0875 19.6922 20.4726 29.094 20.9861C33.6666 21.2367 36.4724 21.1022 38.9482 20.9861C41.7419 20.8577 43.9487 20.7538 47.5371 21.2489C48.1728 21.3406 48.8636 21.4629 49.591 21.5974C51.2354 21.8969 53.0938 22.2392 55.0316 22.282L55.0011 23.5046C52.9715 23.4557 51.0582 23.1073 49.371 22.8016C48.6557 22.6733 47.9772 22.5449 47.3659 22.4593C43.8937 21.9764 41.7358 22.0742 39.0032 22.2026C36.503 22.3187 33.6666 22.4532 29.0268 22.2026C19.6433 21.6891 10.3575 21.3039 8.32802 21.3039C7.69837 21.3039 5.49157 21.1878 3.55373 19.6534C1.46307 17.9968 0.405518 15.3437 0.405518 11.7554C0.405518 8.16702 1.46919 5.51396 3.55985 3.85733C5.49768 2.32296 7.70449 2.20681 8.33413 2.20681C10.3759 2.20681 19.4293 1.98674 29.0207 1.30819C33.5993 0.984202 36.5458 1.13092 39.15 1.25929C41.803 1.38766 44.0954 1.50381 47.372 1.04533C47.9833 0.959751 48.6557 0.837488 49.3771 0.703001C51.0643 0.397349 52.9777 0.0489055 55.0072 1.23495e-06L55.0378 1.23484Z"
              fill="black"
            />
            <path
              d="M16.2016 11.7615C16.2016 13.6871 15.5598 15.1909 14.2883 16.2301C11.3479 18.6264 6.11512 17.5872 5.89505 17.5383L5.60163 17.4772L5.47937 17.2327L5.4488 17.1899C3.4315 13.846 3.4315 9.69528 5.44269 6.35145C5.46714 6.30866 5.49159 6.27198 5.50382 6.25364L5.65053 6.03969L5.89505 5.98467C6.11512 5.94188 11.3479 4.89655 14.2883 7.29286C15.5598 8.33208 16.2016 9.83588 16.2016 11.7615ZM6.39632 16.3829C7.43554 16.548 11.3601 17.037 13.5119 15.2765C14.4961 14.4696 14.9729 13.3203 14.9729 11.7615C14.9729 10.2027 14.4961 9.0473 13.5119 8.24649C11.354 6.48594 7.43554 6.97498 6.39632 7.14003C4.7458 10.007 4.7458 13.5159 6.39632 16.3829Z"
              fill="black"
            />
          </svg>
        </motion.div>
      </header>

      <main className={styles.container}>
        <Header></Header>
        <Work></Work>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
