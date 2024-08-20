import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columnsContainer}>
        <div className={styles.footerColumn}>
          <p>Find us on:</p>
          <ul className={styles.footerNav}>
            <li>
              <a href="https://www.facebook.com" className={styles.socialsLink}>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className={styles.socialsLink}>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com" className={styles.socialsLink}>
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <p>Contact us:</p>
          <address>
            <a href="mailto:info@firepalace.co.uk" className={styles.emailLink}>
              info@firepalace.co.uk
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
