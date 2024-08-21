import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        if (selectedCountry) {
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
                .then((response) => response.json())
                .then((data) => setCountryData(data));
        }
    }, [selectedCountry]);

    function selectCountry(countryName) {
        setSelectedCountry(countryName);
    }

    return (
        <section className={styles.reviewSection}>
            <h2 className={styles.reviewHeading}>Trusted.</h2>
            <p className={styles.trustedText}>
                We've got thousands of happy customers all over the UK. Choose your country to see the latest review:
            </p>

            {/* Container for the buttons */}
            <div className={styles.buttonContainer}>
                <button
                    className={`${styles.countryButton} ${
                        selectedCountry === 'scotland' ? styles.activeButton : ''
                    }`}
                    onClick={() => selectCountry('scotland')}
                >
                    Scotland
                </button>

                <button
                    className={`${styles.countryButton} ${
                        selectedCountry === 'england' ? styles.activeButton : ''
                    }`}
                    onClick={() => selectCountry('england')}
                >
                    England
                </button>

                <button
                    className={`${styles.countryButton} ${
                        selectedCountry === 'wales' ? styles.activeButton : ''
                    }`}
                    onClick={() => selectCountry('wales')}
                >
                    Wales
                </button>
            </div>

            {countryData.text && (
                <div className={styles.reviewContainer}>
                    <p className={styles.reviewText}>{countryData.text}</p>
                    <p className={styles.reviewAuthorLocation}>
                        - {countryData.author}, {countryData.location}
                    </p>
                </div>
            )}
        </section>
    );
}



//Make 3 buttons ✅

//When you click a button it calls a select pokemon function and passes the name✅

//Make some state to hold the selected pokemon