var tweetURL = "";
var tempList = "";
var randomQuote = "";
var html = "";
var quoteBody = document.querySelector("#quote-body");
var quote = document.querySelector("#quote-text");
var button = document.querySelector("#quote-btn");
var share = document.querySelector("#twitter");

// Here Object with Quotes & Authors
var quotes = [
    {
        text: "Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        author: "— Linus Torvalds —"
    },
    {
        text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        author: "— Edsger Dijkstra —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    },
    {
        text: "  ",
        author: "—  —"
    }
]
