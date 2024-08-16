
import { useState, useEffect } from 'react';

export default function Reviews() {
    
    const [ selectedCountry, setSelectedCountry ] = useState(null);
    const [ countryData, setCountryData ] = useState(null);

    useEffect(() => {
        
        if (selectedCountry) {
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
            .then(response => response.json())
            .then(data => setCountryData(data));
        }

    }, [selectedCountry]);

    console.log(selectedCountry);

    function selectCountry(countryName) {
        
        setSelectedCountry(countryName);

    }
    
    return (
        <>
            <h2>Reviews</h2>
            <button onClick={() => selectCountry("scotland")}>Scotland</button>
            <button onClick={() => selectCountry("england")}>England</button>
            <button onClick={() => selectCountry("wales")}>Wales</button>
        
            { JSON.stringify(countryData) };
        </>
    )
}



//Make 3 buttons ✅

//When you click a button it calls a select pokemon function and passes the name✅

//Make some state to hold the selected pokemon