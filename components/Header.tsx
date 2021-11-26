import Image from "next/image";
import headerImage from "../public/header-image.png";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <section className={styles.border}>
      <motion.div
        animate={{ y: "0%", opacity: 1 }}
        initial={{ y: "-10%", opacity: 0 }}
        transition={{ duration: 0.65 }}
        className={styles.backgroundDark}
      >
        <div className={styles.mainText}>
          <p className={styles.largeText}>Hi!</p>
          <p>
            My Name Is <span className={styles.boldText}>Joren</span>
          </p>
          <p>
            I’m a <span className={styles.boldText}>Webdeveloper</span>
          </p>
        </div>

        <div className={styles.bingoBangoText}>
          <p className={styles.bingoDark}>Bingo Bango</p>
          <p className={styles.bingoLight}>Bingo Bango</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.image}
        initial={{ opacity: 0, y: 40, x: 40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.85 }}
      >
        <motion.div
          initial={{ x: -30, y: 30 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Image src={headerImage} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Header;
