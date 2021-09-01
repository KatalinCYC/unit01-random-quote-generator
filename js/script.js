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
  {quote: "Ideologies are like arseholes: everyone's got one, we use it every day, but you very rarely look at your own unless something's gone wrong.", source: "Abigail Thorn", year: "2021", citation: "Jordan Peterson's Ideology", tag: "video essay"},
  {quote: "If you'd had told me 400 years ago that one day, I'd be watching my decapitated body having an affair with a 60-year old dead woman, I'd have said you were mad.", source: "Humphrey Bone (Laurence Richard)", year: "2021", citation: "Ghosts", tag: "sitcom"},
  {quote: "You look so sweet.", source: "Jan-Peter Balkenende, Dutch Prime Minister (2002-2010)", year: "2010", citation: "RTL Election Debate", tag: "political"},
  {quote: "It's not easy having a good time. Even smiling makes my face ache.", source: "Dr. Frank-n-Furter (Tim Curry)", year: "1975", citation: "Rocky Horror Picture Show", tag: "movie"},
  {quote: "When I'm good, I'm very good. When I'm bad, I'm better.", source: "Tira (Mae West)", year: "1933", citation: "I'm No Angel", tag: "movie"}
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
let quoteNumber = Math.floor(Math.random() * quotes.length);  
return quotes[quoteNumber];
}


/***
 * `printQuote` function
***/

function printQuote(quotes){
let randomQuote = getRandomQuote();
let html = `<p class='quote'>${randomQuote.quote}</p><p class='source'>${randomQuote.source}<span class='citation'>${randomQuote.citation}</span><span class='year'>${randomQuote.year}</span></p>
<p class='tag'>${randomQuote.tag}</p>`;
document.getElementById("quote-box").innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);