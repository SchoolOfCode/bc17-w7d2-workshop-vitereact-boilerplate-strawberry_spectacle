import Image from "next/image";
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <main>
      <section className={styles.heroSection}>
        <img
          src="hero-mobile.png"
          srcSet="hero-mobile.png 900w, hero-desktop.png 901w"
          sizes="(max-width: 900px) 100vw,
                  901px"
          alt="Cozy living room with a fireplace"
          className="hero-image"
        />

        <div className={styles.heroDescription}>
          <p className={styles.heroHeadline}>
            Discover the <br />
            perfect fireplace ...
          </p>
          <p className={styles.consultationParagraph}>
            Book consultation:{" "}
            <span className={styles.numberSpan}>0121 345 6789</span>
          </p>
        </div>
      </section>

      <hr className={styles.separator} />

     
    </main>
  );
}
