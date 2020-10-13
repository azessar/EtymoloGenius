const languageToCountry = {
    "English": "United Kingdom",
    "Hindi": "India",
    "Spanish": "Spain",
    "French": "France",
    "Bengali": "India",
    "Portuguese": "Portugal",
    "Urdu": "Pakistan",
    "German": "Germany",
    "Marathi": "India",
    "Punjabi": "India",
    "Italian": "Italy",
    "Gujarati": "India",
    "Persian": "Iran",
    "Bhojpuri": "India",
    "Polish": "Poland",
    "Odia": "India",
    "Maithili": "India",
    "Ukrainian": "Ukraine",
    "Sindhi": "India",
    "Nepali": "Nepal",
    "Romanian": "Romania",
    "Dutch": "Netherlands",
    "Pashto": "Afghanistan",
    "Magahi": "India",
    "Hindi": "Pakistan",
    "Afrikaans": "South Africa",
    "Sinhala": "Sri Lanka",
    "Chhattisgarhi": "India",
    "Assamese": "India",
    "Kurdish": "Turkey",
    "Chhattisgarhi": "India",
    "Bavarian": "Germany",
    "Czech": "Czech Republic",
    "Greek": "Greece",
    "Chittagonian": "Bangladesh",
    "Swedish": "Sweden",
    "Deccan": "India",
    "Sadri": "India",
    "Sylheti": "India",
    "Chinese": "China",
    "Burmese": "Myanmar",
    "Arabic": "Saudi Arabia",
    "Hausa": "Nigeria",
    "Somali": "Somalia",
    "Tunisian": "Tunisia",
    "Sanaani": "Yemen",
    "Hebrew": "Israel",
    "Yiddish": "Germany",
    "Indonesian": "Indonesia",
    "Vietnamese": "Vietnam",
    "Javanese": "Indonesia",
    "Filipino": "Philippines",
    "Hawaiian": "United States",
    "Alaskan": "United States",
    "Sundanese": "Indonesia",
    "Tagalog": "Philippines",
    "Cherokee": "United States",
    "Aztec": "Mexico",
    "Mayan": "Mexico",
    "Japanese": "Japan",
    "Swahili": "Tanzania",
    "Yoruba": "Nigeria",
    "Zulu": "South Africa",
    "Xhosa": "South Africa",
    "Igbo": "Nigeria",
    "Korean": "South Korea",
    "Fulfulde": "Niger",
    "Telugu": "India",
    "Tamil": "India",
    "Turkish": "Turkey",
    "Malayalam": "India",
    "Thai": "Thailand",
    "Hungarian": "Hungaria",
    "Swedish": "Sweden",
    "Finland": "Finnish",
    "Norway": "Norwegian",
    "Zapotec": "Mexico",
    "Quechua": "Bolivia",
    "Incan": "Peru",
    "Inca": "India",
}

function extractLanguages(text) {
    let wordLanguages = ["English"];
    let wordCountries = ["United Kingdom"];
    words = text.split(" ");
    words.forEach(word => 
        (Object.keys(languageToCountry).includes(word) && !wordLanguages.includes(word)) ? wordLanguages.push(word) : null
    );
    words.forEach(word =>
        (Object.keys(languageToCountry).includes(word) && !wordCountries.includes(languageToCountry[word])) ? wordCountries.push(languageToCountry[word]) : null
    );
    return [ wordLanguages.reverse(), wordCountries.reverse() ];
}

function searchOutput() {
    var userInput = document.getElementById('searchBar').value;
    document.getElementById('output').innerHTML = userInput;

    // fetching from dictionary API
    const app_id = "aefa1dac"; // insert your APP Id
    const app_key = "11e3bb87b4b4fa64832a3ce1570ff663"; // insert your APP Key
    const wordId = userInput;
    const fields = "pronunciations";
    const strictMatch = "false";

    const endpoint = "entries";
    const languageCode = "en-us";

    const countries = ["United Kingdom"];


    const bigURL = "https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/" + endpoint + "/" + languageCode + "/" + wordId.toLowerCase()

    fetch(bigURL, { headers: { "app_id": app_id, "app_key": app_key } })
        .then(response => response.json())
        .then(data => {
            const etymologyText = data.results[0].lexicalEntries[0].entries[0].etymologies[0]
            document.getElementById('etymologies').innerHTML = etymologyText;
            console.log(document.getElementById('etymologies').innerHTML);
            console.log(extractLanguages(etymologyText));
        })
        .catch(error => window.alert("Oops, you might have to renew the API key"));
    // .then(data => console.log(data.results[0].lexicalEntries[0].entries[0].etymologies[0]));




    // finish fetching from dictionary API
}