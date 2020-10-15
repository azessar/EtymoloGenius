# EtymoloGenius
## Background
EtymoloGenius is a visual representation of the etymologies of all words in the English dictionary. Simply enter a correctly spelled English word, and EtymoloGenius will show you that word's evolution and journey to modern day English on an interactive world map.

## Functionality and MVP
* Users will enter an English word
* EtymoloGenius will display the years and locations where and when that word's ancestors were used
* The map will populate in scaled time showing when that word was first used in English

## Wireframes

![wireframe](/src/images/wireframe.png)

## Architecture and Technologies
The project will require the following technologies:
* JavaScript for rendering and logic
* Merriam-Webster dictionary API for etymologies and first uses (https://dictionaryapi.com/products/json)
* A world map API for displaying the word's etymology path

The scripts necessary for this project include:
* map.js which will reset the map before every search; upon search it will light up the applicable countries with arrows showing the word's journey
* word_info.js which will take the entry word and search the API for all relevant information, like definition, languages of origin, etc.
* country.js (not sure if this is necessary, will allow for logic to show if a country is involved in the word's journey or not)

## Implementation Timeline
* Day 1: Have Webpack running and be able to functionally use the MW API; have a skeleton of all basic files outlined; make a search bar for word entry
* Day 2: Implement a map API and be able to interact with it, having certain countries light up upon calling them through MW
* Day 3: Implement animations showing the countries involved in a word's journey to English; scale the time by the amount of time between first uses in each language

Bonus Features:
* Sidebar information for definition, examples, etc.


Cool words to try: coyote, luau, avocado, hammock, mambo

things to include still: animation, loading modal, left and right margin definitions