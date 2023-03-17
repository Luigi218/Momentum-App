//Real-Time Clock Function
function myTimer (){
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
} 

//Update Time every second
setInterval(myTimer,1000)

//Background Images Array
const backgroundImages = [
    "url(assets/img1.jpg)", 
    "url(assets/img2.jpg)", 
    "url(assets/img3.jpg)"
]

//Start Index at 0
let img = 0;
const background = document.querySelector("body")

//Changing Background Function
function changeBackground () {
        img++
        if (img === backgroundImages.length) {img = 0}
        background.style.backgroundImage = backgroundImages[img]
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
}

//Load in Background Image
window.onload = (
    background.style.backgroundImage = backgroundImages[0],
    background.style.backgroundRepeat = "no-repeat",
    background.style.backgroundSize = "cover"
)

//Update Background every minute
setInterval(changeBackground, 60000)

//Quotes Array
const quotesList = [
    {
        quote: "Words are not meant to stir the air only; they are capable of moving greater things.",
        author: "Natsume Soseki"
    },
    {
        quote: "I think that inside every adult is the heart of a child. We just gradually convince ourselves that we whave to act more like adults.",
        author: "Shigeru Miyamoto"
    },
    {
        quote: "The objective of cleaning is not just to clean, but to feel happiness living within that environment.",
        author: "Marie Kondo"
    }
]

//Start Index at 0
let i = 0
const quoteText = document.getElementById("quote-text")
const authorText = document.getElementById("author-text")

//Change Quote Function
function changeQuote () {
    i++
    if (i === quotesList.length) {i = 0}
    quoteText.textContent = quotesList[i].quote
    authorText.textContent = quotesList[i].author
}

setInterval(changeQuote, 60000)
