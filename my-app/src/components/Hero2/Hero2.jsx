import Image from "next/image";
import styles from './Hero2.module.css';

export default function Hero2() {
  return (
    <main>
 

      <hr className={styles.separator} />

      <section id="how-it-works" className={styles.howItWorksSection}>
        <h2 className={styles.howItWorksText}>How It Works</h2>
        <div className={styles.tiles}>
          <article className={styles.tile}>
            <img
              src="how-it-works-1.png"
              alt="Phone call illustration"
              className={styles.tileImage}
            />
            <h3>Give us a call...</h3>
            <p>
              Call us and book in a "Design Consultation" on a date and time
              that suits you.
            </p>
          </article>
          <article className={styles.tile}>
            <img
              src="how-it-works-2.png"
              alt="Home visit illustration"
              className={styles.tileImage}
            />
            <h3>We come to you...</h3>
            <p>
              We come to your home to do an assessment of the space and to your
              style preference.
            </p>
          </article>
          <article className={styles.tile}>
            <img
              src="how-it-works-3.png"
              alt="Fireplace recommendation illustration"
              className={styles.tileImage}
            />
            <h3>We recommend...</h3>
            <p>We send you a bespoke set of fireplace recommendations.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
