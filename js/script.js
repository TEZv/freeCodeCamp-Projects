var tweetURL = "";
var tempList = "";
var randomQuote = "";
var html = "";
var quoteBody = document.querySelector("#quote-body");
var quoteText = document.querySelector("#quote-text");
var button = document.querySelector("#quote-btn");
var twitter = document.querySelector("#twitter");

// Here Object with Quotes & Authors
var quotes = [
  {
    text: "Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    author: "— Linus Torvalds —",
  },
  {
    text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    author: "— Edsger Dijkstra —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
  {
    text: "  ",
    author: "—  —",
  },
];

// Here's a Shuffling of the Quotes
function randomize() {
  tempList = Object.keys(quotes);
  randomQuote = tempList[Math.floor(Math.random() * tempList.length)];
  console.dir(randomize);
}
// Here's a Quote Load on the page
function loadQuote() {
  randomize();

  // Here's a Creation of an element to load a quote
  html =
    '<p id="quote-text"><q>' +
    quotes[randomQuote].text +
    '</q><span class="quote-author">' +
    quotes[randomQuote].author +
    "</span></p>";

  // Here's a Creation of Twiter URL to share a quote
  tweetURL =
    "https://twitter.com/intent/tweet?text=" +
    '"' +
    quotes[randomQuote].text +
    '" ' +
    quotes[randomQuote].author +
    " %23famouspeople " +
    "%23quotes " +
    "%23inspiration " +
    "%23programming " +
    "%23funny ";

  // Here's a Display of the element with a quote on the page
  quoteBody.innerHTML = html;
}
loadQuote();

// Load a new random quote by onclick
button.onclick = function () {
  loadQuote();
};

// Open Twitter window
twitter.onclick = function () {
  window.open(tweetURL);
};