var quote = document.getElementById("quote")


// Quote sliders

var quoteCounter = 0;
var quoteList = ["You don't need a silver fork to eat good food.", "One cannot think well, love well, sleep well, if one has not dined well.", "Only the pure in heart can make a good soup.", "There is no sincerer love than the love of food.", "If you can't feed a hundred people, then feed just one.", "Bon appétit!", "Food is symbolic of love when words are inadequate.", "All happiness depends on a leisurely breakfast.", "You are what you eat.", "Food is fun!", "Let food be thy medicine and medicine be thy food.", "People who love to eat are always the best people."]

function changeQuote() {
    if (quoteCounter >= 12) {
        quoteCounter = 0;
    } else {
        quote.innerHTML = quoteList[quoteCounter]
        quoteCounter++
    }
}

setInterval(() => {
    changeQuote()
}, 8000);