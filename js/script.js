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
    text: "To thrive in life you need three bones. A wishbone. A backbone. And a funny bone.",
    author: "— Reba McEntire —",
  },
  {
    text: "Java is C++ without the guns, clubs and knives.",
    author: "— James Gosling —",
  },
  {
    text: "Isn't it funny how day by day nothing changes, but when you look back everything is different",
    author: "— C. S. Lewis —",
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place.",
    author: "— Brian Kernighan —",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "— Linus Torvalds —",
  },
  {
    text: "I tried to be normal once. Worst to minutes of my life.",
    author: "— Unknown Someone —",
  },
  {
    text: "The question of whether computers can think is like the question of whether submarines can swim.",
    author: "— Edsger Dijkstra —",
  },
  {
    text: "Any fool can write code that a computer can understand.",
    author: "— Martin Fowler —",
  },
  {
    text: "Good programmers write code that humans can understand.",
    author: "— Martin Fowler —",
  },
  {
    text: "If you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "— Brian Kernighan —",
  },
  {
    text: "A good programmer is someone who always looks both ways before crossing a one-way street.",
    author: "— Doug Linder —",
  },
  {
    text: "Never miss a good chance to shut up.",
    author: "— Will Rogers —",
  },
  {
    text: "Computers are good at following instructions, but not at reading your mind.",
    author: "— Donald Knuth —",
  },
  {
    text: "Copy and paste is a design error.",
    author: "— David Parnas —",
  },
  {
    text: "I actually don't like thinking. I think people think I like to think a lot. And I don't. I do not like to think at all.",
    author: "— Kanye West —",
  },
  {
    text: "I`ve never really wanted to go to Japan. Simply because I don`t like eating fish. And I know that`s very popular out there in Africa",
    author: "— Britney Spears —",
  },
  {
    text: "If everybody in the world dropped out of school, we would have a much more intelligent society.",
    author: "— Jaden Smith —",
  },
  {
    text: "Is this chicken or is this fish? I know it`s tuna but it says `Chicken of the Sea`.",
    author: "— Jessica Simpson —",
  },
  {
    text: "Smoking kills. If you're killed, you've lost an important part of your life",
    author: "— Brooke Shields —",
  },
  {
    text: "I thought Europe was a country.",
    author: "— Kellie Pickler —",
  },
  {
    text: "I've been on foodstamps and welfare. Anybody help me out? No.",
    author: "— Craig T. Nelson —",
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
    "http://twitter.com/share?text=Have a look at the Quottis:)&url=http://" +
  " " + " " + " " +
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
