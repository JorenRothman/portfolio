import Image from "next/image";
import headerImage from "../public/header-image.png";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <section className={styles.border}>
      <div className={styles.backgroundDark}>
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
      </div>

      <div className={styles.image}>
        <Image src={headerImage} alt="" />
      </div>
    </section>
  );
}

export default Header;
