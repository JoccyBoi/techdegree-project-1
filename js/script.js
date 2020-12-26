/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {
    quote: 'Be the change that you wish to see in this world.',
    source: 'Mahatma Ghandhi',
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'Martin Golding',
  },
  {
    quote: 'These are the times that try men\'s souls',
    source: 'Thomas Paine',
    citation: 'The American Crisis',
    year: 1776
  },
  {
    quote: 'Give me liberty or give me death.',
    source: 'Patrick Henry',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: 'London, England',
    year: 1890
  },
  {
    quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    source: 'Ralph Waldo Emerson',
    citation: 'The American Scholar',
    year: 1837
  },
  {
    quote: 'It does not do to dwell on dreams and forget to live.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Sorcerer\'s Stone',
    year: 1997
  },
  {
    quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
    source: 'Thomas A. Edison',
  },
  {
    quote: 'Love all, trust a few, do wrong to none.',
    source: 'William Shakespeare',
    citation: 'All\'s Well That Ends Well',
    year: 1604
  },
  {
    quote: 'It is never too late to be what you might have been.',
    source: 'George Eliot',
    citation: 'The Mill on the Floss',
    year: 1860
  }
];
console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
 let randomNumber = Math.floor(Math.random() * quotes.length);
 console.log(randomNumber);
  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
let randomQuote = (quotes[randomNumber]);
console.log(randomQuote);
  // 3. Return the variable storing the random quote object
}
 getRandomQuote();

/***
 * `printQuote` function
***/
function printQuote() {
const forClick = getRandomQuote();
const quoteProp = `<p class='quotes'>${randomQuote.quote}</p><p class='source'>${randomQuote.source}`
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
