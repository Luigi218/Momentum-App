//Real-Time Clock Functions
function checkTime(t) {
    if (t < 10) {t = "0" + t};
    return t;
}

function myTimer (){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
} 

setInterval(myTimer,1000)

//Background Images Array
const backgroundImages = [
    "url(assets/img1.jpg)", 
    "url(assets/img2.jpg)", 
    "url(assets/img3.jpg)"
]

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

let i = 0
const quoteText = document.getElementById("quote-text")
const authorText = document.getElementById("author-text")

//Change Quote Function
function changeQuote () {
    i++
    if (i === quotesList.length) {i = 0}
    quoteText.innerHTML = quotesList[i].quote
    authorText.innerHTML = quotesList[i].author
}

setInterval(changeQuote, 60000)

//WIP Greeting Function
const greeting = document.getElementById("greet-text")

function firstName() {
    const name = document.querySelector("input").value;
    if (h < 12) {greeting.textContent = "Good Morning, " + name}
    else if (h > 12 && h < 18) {greeting.textContent = "Good Afternoon, " + name}
    else {greeting.textContent = "Good Evening, " + name}
}