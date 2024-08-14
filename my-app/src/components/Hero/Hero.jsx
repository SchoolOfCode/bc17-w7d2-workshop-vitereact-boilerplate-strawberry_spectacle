
import Image from "next/image";
export default function Hero () {
    return (        
        <main>
              <section className="hero-section">
                <img
                  src="hero-mobile.png"
                  srcset="hero-mobile.png 900w, hero-desktop.png 901w"
                  sizes="(max-width: 900px) 100vw,
                  901px"
                  alt="Cozy living room with a fireplace"
                  className="hero-image"
                />

                <div className="hero-description">
                  <p className="hero-headline">
                    Discover the <br />
                    perfect fireplace ...
                  </p>
                  <p className="consultation-paragraph">
                    Book consultation: <span className="number-span">0121 345 6789</span>
                  </p>
                </div>
              </section>

              <hr className="separator" />

              <section id="how-it-works" className="how-it-works-section">
                <h2 className="how-it-works-text">How It Works</h2>
                <div className="tiles">
                  <article className="tile">
                    <img
                      src="how-it-works-1.png"
                      alt="Phone call illustration"
                      className="tile-image"
                    />
                    <h3>Give us a call...</h3>
                    <p>
                      Call us and book in a "Design Consultation" on a date and time
                      that suits you.
                    </p>
                  </article>
                  <article className="tile">
                    <img
                      src="how-it-works-2.png"
                      alt="Home visit illustration"
                      className="tile-image"
                    />
                    <h3>We come to you...</h3>
                    <p>
                      We come to your home to do an assessment of the space and to
                      your style preference.
                    </p>
                  </article>
                  <article className="tile">
                    <img
                      src="how-it-works-3.png"
                      alt="Fireplace recommendation illustration"
                      className="tile-image"
                    />
                    <h3>We recommend...</h3>
                    <p>We send you a bespoke set of fireplace recommendations.</p>
                  </article>
                </div>
              </section>
            </main>
    );
}
