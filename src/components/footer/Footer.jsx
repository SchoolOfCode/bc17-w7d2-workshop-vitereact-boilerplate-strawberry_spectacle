

export default function Footer() {
  return (
    <footer className="footer">
      <div className="columnsContainer">
        <div className="footerColumn">
          <p>Find us on:</p>
          <ul className="footerNav">
            <li>
              <a href="https://www.facebook.com" className="socialsLink">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" className="socialsLink">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com" className="socialsLink">
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <p>Contact us:</p>
          <address>
            <a href="mailto:info@firepalace.co.uk" className="emailLink">
              info@firepalace.co.uk
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
