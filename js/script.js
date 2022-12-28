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
    author: "— Unknown S. Omeone —",
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
    text: "It's time for the human race to enter the solar system!",
    author: "— Dan Quayle —",
  },
  {
    text: "Listen, everyone is entitled to my opinion.",
    author: "— Madonna —",
  },
  {
    text: "If it weren't for electricity, we'd all be watching television by candlelight.",
    author: "— George Gobel —",
  },
  {
    text: "I`ve been noticing gravity since I was very young.",
    author: "— Cameron Diaz —",
  },
  {
    text: "Electricity can transform people's lives, not just economically but also socially.",
    author: "— Piyush Goya —",
  },
  {
    text: "Electricity is really just organized lightning.",
    author: "— George Carlin —",
  },
  {
    text: "We can, and must, shift to an economy in which 100% of our electricity is generated renewably.",
    author: "— Jill Stein —",
  },
  {
    text: "Why is electricity so expensive these days? Why does it cost so much for something I can make with a balloon and my hair?",
    author: "— Dennis Miller —",
  },
  {
    text: "Once electricity and petrol and facilities and food stop, society stops. It's crazy.",
    author: "— Alycia Debnam-Carey —",
  },
  {
    text: "5G will have an impact similar to the introduction of electricity or the car, affecting entire economies and benefiting entire societies.",
    author: "— Steve Mollenkopf —",
  },
  {
    text: "Imagination has brought mankind through the dark ages to its present state of civilization. Imagination led Columbus to discover America. Imagination led Franklin to discover electricity.",
    author: "— L. Frank Baum —",
  },
  {
    text: "I'm not a techie, but I don't know how I lived without an iPad! Mine comes with me everywhere. As greatest inventions go, it's up there with electricity and cars.",
    author: "— Joanna Garcia —",
  },
  {
    text: "Ampere was the Newton of Electricity.",
    author: "— James C. Maxwell —",
  },
  {
    text: "We should learn to live more with our climate and rely less on electricity to alter our climate.",
    author: "— James Dyson —",
  },
  {
    text: "I don't have a crystal ball, but I'm willing to bet one of my arms right now that as long as there's electricity, Ramones music is going to be relevant.",
    author: "— Henry Rollins —",
  },
  {
    text: "My grandmother's house - she ran it just like her grandmother and her great-grandmother. They didn't have electricity. They had wood stoves that never got cold.",
    author: "— Willard Scott —",
  },
  {
    text: "Electricity, the peril the wind sings to in the wires on a gray day.",
    author: "— Janet Frame —",
  },
  {
    text: "For as long as anyone can remember, reliable, cheap electricity has been taken for granted in the United States.",
    author: "— Alex Berenson —",
  },
  {
    text: "We're electrical items and when we die the electricity goes somewhere else. When we die our energy goes into the galaxy.",
    author: "— Dominic Monaghan —",
  },
  {
    text: "Our increasingly electrified, electronic, and data-driven society places steadily rising demand on reliable baseload power - that is, on electricity available 24/7/365. Servers never sleep, nor does air conditioning during hot nights, and in Asia's megacities, subways and electric trains take only brief naps between midnight and 5 A.M.",
    author: "— Vaclav Smil —",
  },
  {
    text: "When I meet a person and that chemistry is there, I cannot hide the electricity. I need to learn more about him, and once I feel safe, I'm gone, I'm in love, and I give it my all!",
    author: "— Taraji P. Henson —",
  },
  {
    text: "I fell in love with electricity.",
    author: "— Geisha Williams —",
  },
  {
    text: "To avoid a blackout, electricity generating companies must lower generation in line with low demand.",
    author: "— Jyotiraditya Madhavrao Scindia —",
  },
  {
    text: "I know a lot of people around the world have these problems where there's just no light, no electricity, nothing.",
    author: "— Ann Makosinski —",
  },
  {
    text: "The first time I acted was in high school in Florida, and when I heard that applause I felt so alive and felt that electricity go up my spine.",
    author: "— Angela Bassett —",
  },
  {
    text: "Electricity is derived from many non-renewable energy sources like oil, natural gas and coal.",
    author: "— Lamar S. Smith —",
  },
  {
    text: "Fibre optic is becoming like electricity. If you look at how electricity spread around the globe 100 years ago, that's what's happening now.",
    author: "— Reed Hastings —",
  },
  {
    text: "I grew up in rural Oregon in a log house with bark left on inside and out. We had no electricity, a massive stone fireplace, a grand piano, and tons of books.",
    author: "— Virginia Euwer Wolff —",
  },
  {
    text: "When people listen to Jay-Z, they're working all day or trying to work and pay their bills, and what they hear is someone who's free. Who doesn't have to worry about the electricity. But all we're taught is that those who are rich deserve to be rich because they worked harder than the rest of us, or they're smarter.",
    author: "— Boots Riley —",
  },
  {
    text: "I agree completely with my son James when he says 'Internet is like electricity. The latter lights up everything, while the former lights up knowledge'.",
    author: "— Kerry Packer —",
  },
  {
    text: "The air is dirty because of the electricity monopolists. They have powerful money lobbyists.",
    author: "— Sam Wyly —",
  },
  {
    text: "In the early 1980s, I got into a war with my management - they just kept on suing me and I lost everything. So I had to go out on tour to make sure the electricity stayed on.",
    author: "— Meat Loaf —",
  },
  {
    text: "Only electricity can give the transport sector the flexibility to switch fuels when one or more become too expensive.",
    author: "— Frederick W. Smith —",
  },
  {
    text: "Until there is an electricity in Ukraine, we may to work, we need to work",
    author: "— Oksana Kolisnyk (Author, Ukraine, 12.2022) —",
  },
  {
    text: "They can't do without electricity. They can do with less electricity.",
    author: "— Kenneth Lay —",
  },
  {
    text: "I am an expert of electricity. My father occupied the chair of applied electricity at the state prison.",
    author: "— W. C. Fields —",
  },
  {
    text: "Ben Franklin may have discovered electricity- but it is the man who invented the meter who made the money.",
    author: "— Earl Warren —",
  },
  {
    text: "What is a soul? It's like electricity - we don't really know what it is, but it's a force that can light a room.",
    author: "— Ray Charles —",
  },
  {
    text: "We take for granted electricity, water, even concerts. Count your blessings.",
    author: "— Damian Marley —",
  },
  {
    text: "Without electricity, the air would rot.",
    author: "— Ralph Waldo Emerson —",
  },
  {
    text: " The kingdom of heaven is like electricity. You don't see it. It is within you.",
    author: "— Maharishi Mahesh Yogi —",
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
    " %23quotes " +
    " %23inspiration " +
    " %23programming " +
    " %23electricity " +
    " %23funny " + " " + " "
    "Taken from:" + " " + "&url=https://tezv.github.io/freeCodeCamp-RandomQuoteMachine/";

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
