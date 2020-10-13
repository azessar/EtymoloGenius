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
    "Hungarian": "Hungary",
    "Swedish": "Sweden",
    "Finnish": "Finland",
    "Norwegian": "Norway",
    "Zapotec": "Mexico",
    "Quechua": "Bolivia",
    "Incan": "Peru",
    "Inca": "India",
    "Aboriginal": "Australia",
    "Maori": "New Zealand",
    "American": "United States",
    "Latin": "Italy",
}

function extractLanguages(text) {
    let wordLanguages = ["English"];
    let wordCountries = ["United Kingdom"];
    let chars = text.split('');
    let cleanLetters = chars.filter(function (char) { //Thank you: https://remarkablemark.org/blog/2019/09/28/javascript-remove-punctuation/
        let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        return punctuation.indexOf(char) === -1;
    });
    let cleanString = cleanLetters.join('');
    let words = cleanString.split(" ");
    words.forEach(word => 
        (Object.keys(languageToCountry).includes(word) && !wordLanguages.includes(word)) ? wordLanguages.push(word) : null
    );
    words.forEach(word =>
        (Object.keys(languageToCountry).includes(word) && !wordCountries.includes(languageToCountry[word])) ? wordCountries.push(languageToCountry[word]) : null
    );
    document.getElementById('languages').innerHTML = wordLanguages.reverse();
    document.getElementById('countries').innerHTML = wordCountries.reverse();
    return [ wordLanguages.reverse(), wordCountries.reverse() ];
}

function extractTime(text) {
    let chars = text.split('');
    let cleanLetters = chars.filter(function (char) { //Thank you: https://remarkablemark.org/blog/2019/09/28/javascript-remove-punctuation/
        let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        return punctuation.indexOf(char) === -1;
    });
    let cleanString = cleanLetters.join('');
    let words = cleanString.split(" ");
    const centuryArray = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st"];
    const decadeArray = ["1800s", "1820s", "1830s", "1840s", "1850s", "1860s", "1870s", "1880s", "1890s", "1900s", "1910s", "1920s", "1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s"]
    words.forEach(word => {
            if (centuryArray.includes(word)) {
                let century = `${word} century`;
                document.getElementById('time').innerHTML = century;
                return;
            } else if (decadeArray.includes(word)) {
                let decade = `${word}`;
                document.getElementById('time').innerHTML = decade;
                return;
            }
        } 
    )
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
            extractLanguages(etymologyText);
            extractTime(etymologyText);
        })
        .catch(error => window.alert("Oops, we don't have access to that word at the moment."));
    // .then(data => console.log(data.results[0].lexicalEntries[0].entries[0].etymologies[0]));




    // finish fetching from dictionary API
}