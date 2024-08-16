import Image from "next/image";
import styles from '../page.module.css';

export default function Founders() {
  return (
      <><section className={styles.introFounders}>
      <h2>Meet the artisans behind our masterpieces!</h2>
      <p>Mike and Mandy</p>
      <Image src='/founder-mike-and-mandy.png' width={500} height={500} alt="Mike and Mandy"/>
      </section>
      <section className={styles.contentFounders}>
          <div>
          <h3 className={styles.contentFoundersH3}>Our craftsmanship</h3>
          <p>Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.</p>
          <Image src="/founders-1.png" width={400} height={224} alt="Craftsmanship Image"/>
          </div>
        <div>
          <h3 className={styles.contentFoundersH3}>Our experience</h3>
          <p>Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.</p>
          <Image src="/founders-2.png" width={400} height={224} alt="Experience Image"/>
          </div>
        <div>
          <h3 className={styles.contentFoundersH3}>Our guarantee</h3>
          <p>If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!</p>
          <Image src="/founders-3.png" width={400} height={224} alt="Guarantee Image"/>
          </div>
      </section>
      </>
  );
}