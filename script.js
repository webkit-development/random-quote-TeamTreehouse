//attatching the functionality to the button
document.getElementById("load").addEventListener("click", printQuote, false);
//global variables
let viewedQuote = [];
let message = '';
//quotes
let quotes = [
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
        source: "Mother Teresa",
        citation: "",
        year: 1973,
        tags: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.", 
        source: "Franklin D. Roosevelt",
        citation: "",
        year: 1943,
        tags: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.", 
        source: "Margaret Mead",
        citation: "",
        year: 1953,
        tags: "Margaret Mead"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.", 
        source: "Eleanor Roosevelt",
        citation: "https://www.shopify.com/blog/motivational-quotes",
        year: 1942,
        tags: "Eleanor Roosevelt"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", 
        source: "Benjamin Franklin",
        citation: "",
        year: 1743,
        tags: "Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", 
        source: "Helen Keller",
        citation: "",
        year: 1900,
        tags: "Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.", 
        source: "Aristotle",
        citation: "",
        year: 344 + " BC",
        tags: "Aristotle"
    },
    {
        quote: "Whoever is happy will make others happy too. ", 
        source: "Anne Frank",
        citation: "",
        year: 1963,
        tags: "Anne Frank"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", 
        source: "Ralph Waldo Emerson",
        citation: "",
        year: 1950,
        tags: "Ralph Waldo Emerson"
    }
];

//function to call and display the quote and will be later called

function print(quote) {
	let output = document.getElementById('quote-display');
	output.innerHTML = quote;
}

//getRandomQuote gets a random quote from the quotes array using some of the math functions
//it clears the array and what on the screen when you hit the button again takes it off the screen and puts a new one in
function getRandomQuote() {
	let random = Math.floor(Math.random() * quotes.length);
	let spliced = quotes.splice(random, 1)[0];
	viewedQuote.push(spliced);
	if (quotes.length === 0) {
		quotes = viewedQuote;
		viewedQuote = [];
	}
	return spliced;
}

//makes a random color and it will be called later

function randomColorGenerator() {
	let randomColor;
	let red = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	randomColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
	return randomColor;
}

//printQuote holds the structure of the html and uses css classes within to be called from the css sheet
//the variables are placed in there that are taken off of the quotes object that is connected to the fuction getRandomQuote


function printQuote() {
	let quotes = getRandomQuote();
	message ='<p class="quote">\" ' + quotes.quote + ' \"</p>';
	message += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += ' <span class="citation">'+quotes.citation+'</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += ' <span class="year">'+quotes.year+'</span></p>';	
	} else {
		message += '';
	}
	if (quotes.tags) {
		message += ' <h3 class="tags">'+quotes.tags+'</h3>';
	} else {
		message += '';
    }
  
    //prints the message which is the random quote
	print(message);
    //random color generator needs to be called to use the function
	randomColorGenerator();
    //when clicked the background changes color
	document.getElementById('background').style.backgroundColor = randomColorGenerator();
}
