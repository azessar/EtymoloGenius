const languages = ["English", "Spanish", "Greek", "Italian", "French", "Latin", "German", "Chinese", "Korean", "Russian", "Japanese", "Arabic", "Hebrew"]

function extractLanguages(text) {
    let wordLanguages = ["English"];
    words = text.split(" ");
    words.forEach(word => 
        (languages.includes(word) && !wordLanguages.includes(word)) ? wordLanguages.push(word) : null
    );
    return wordLanguages.reverse();
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