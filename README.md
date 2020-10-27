# EtymoloGenius
## Background
EtymoloGenius is a visual representation of the etymologies of all words in the English dictionary. Simply enter a correctly spelled English word, and EtymoloGenius will show you that word's evolution and journey to modern day English on an interactive world map.

## MVPs
* Users will enter an English word
* EtymoloGenius will display the years and locations where and when that word's ancestors were used on a rotating globe

## Initial Wireframe
![wireframe](/src/images/wireframe.png)

## Final Product
![wireframe](/src/images/final.png)

## Architecture and Technologies
The project will require the following technologies:
* JavaScript for rendering and logic
* Oxford Dictionaries API for etymologies and first uses
* An interactive globe from AMCharts

The scripts necessary for this project include:
* map.js which will reset the map before every search; upon search it will light up the applicable countries with arrows showing the word's journey
* country.js for logic to show if a country is involved in the word's journey or not

## Implementation Timeline
* Day 1: Have Webpack running and be able to functionally use the MW API; have a skeleton of all basic files outlined; make a search bar for word entry
* Day 2: Implement a map API and be able to interact with it, having certain countries light up upon calling them through MW
* Day 3: Implement animations showing the countries involved in a word's journey to English; scale the time by the amount of time between first uses in each language

## Scripts and Functionality
The user inputs their search word in the search bar at the top of the page. Upon submitting, the SearchOutput function is triggered as follows...

First, the word is "fetch"ed from the dictionary API:
```
fetch(bigURL, { headers: { "app_id": app_id, "app_key": app_key } })
            .then(response => response.json())
            .then(data => { ... }
```

Then, the API definition and etymology text is formatted and stored in local variables:
```
const etymologyText = data.results[0].lexicalEntries[0].entries[0].etymologies[0];
              const partOfSpeech = data.results[0].lexicalEntries[0].lexicalCategory["id"];
              const definition = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
              const pronunciation = data.results[0].lexicalEntries[0].entries[0].pronunciations[0].phoneticSpelling;
```

The most challenging part was next... extracting the relevant country and language words from the API definition and etymology *and* coming up with a function that would order the countries in chronological order:
```
function extractCountries(text) {
    let wordLanguages = ["English"];
    let wordCountries = ["United Kingdom"];
    let chars = text.split('');
    let cleanLetters = chars.filter(function (char) { //Thank you: https://remarkablemark.org/blog/2019/09/28/javascript-remove-punctuation/
        let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        return punctuation.indexOf(char) === -1;
    });
    let cleanString = cleanLetters.join('');
    if (cleanString.includes('Latin America')) {
        wordLanguages.push('Spanish');
        wordCountries.push('Latin America');
    }
    let words = cleanString.split(" ");
    words.forEach((word) => {
        (Object.keys(languageToCountry).includes(word) && !wordLanguages.includes(word)) ? wordLanguages.push(word) : null;
        (Object.keys(languageToCountry).includes(word) && !wordCountries.includes(languageToCountry[word])) ? wordCountries.push(languageToCountry[word]) : null;
        (Object.values(languageToCountry).includes(word) && !wordCountries.includes(word)) ? wordCountries.push(word) : null; //in case the country is listed in the etymology instead of language (see Panda)
    });
    if (cleanString.includes('Latin America')) {
        wordCountries = wordCountries.filter(item => item !== "Italy" && item !== "the United States" && item !== "United States")
    }


    const countryText = " came from what is present day " + makeCountryText(wordCountries.reverse());
    document.getElementById('countries').innerHTML = wordCountries.reverse();
    return countryText;
    // return [ wordLanguages.reverse(), wordCountries.reverse() ];
}
```
This was a great lesson in using JavaScript to generalize language patterns in the API text. The etymological countries for each word were not given to me in a nicely formatted table; it was pure text, so I had to make tables that would map demonyms to countries, e.g.: Spanish -> Spain, British -> United Kingdom, Brazilian -> Brazil. This was even harder for lesser known languages and demonyms, e.g.: Aboriginal -> Australia, Gujarati -> India, Iroquois -> United States (or Canada). There are countless world languages and country descriptors that I had to track, but I have accounted for nearly everything in the Oxford Dictionary.

After the languages and demonyms are mapped to the correct countries, I then had to: map the country names to their latitude and longitude from another table I created, draw the lines on the AMCharts globe, and pan the globe to the word's origin country:
```
function findCoordinates() {
            let countryArray = document.getElementById('countries').innerHTML.split(",");
            let coords = [];
            countryArray.forEach(country => {
              coords.push(latAndLongs[country]);
            });
            if (coords.length === 0) {
              return null
            } else {
              drawLines(coords);
              panToOriginCountry(coords.reverse()[0]);
            }      
          }
```


Here are some cool words to try (because they either involve more than two countries, or they involve a lesser known language): coyote, luau, avocado, hammock, mambo, jalapeno
