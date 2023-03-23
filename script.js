//Changing Background Script Start
const backgroundImages = [
    "url(assets/img1.jpg)", 
    "url(assets/img2.jpg)", 
    "url(assets/img3.jpg)"
]

//Changing Background Function
let img = 0;
const background = document.querySelector("body")

function changeBackground () {
        img++
        if (img === backgroundImages.length) {img = 0}
        background.style.backgroundImage = backgroundImages[img]
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
}

setInterval(changeBackground, 60000)
//Changing Background Script End

//Changing Quote Script Start
let quoteDisplay = document.getElementById("quotes-display")
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

//Changing Quotes Function
let num = 0
const quoteText = document.getElementById("quote-text")
const authorText = document.getElementById("author-text")

function changeQuote () {
    num++
    if (num === quotesList.length) {num = 0}
    quoteText.innerHTML = quotesList[num].quote
    authorText.innerHTML = quotesList[num].author
}

setInterval(changeQuote, 60000)
//Changing Quote Script End

//Real-Time Clock Script Start
let clock = document.getElementById("clock")

//Changes 1-digit numbers to 2-digits 
function checkTime(t) {
    if (t < 10) {t = "0" + t};
    return t;
}

//Gets current time in hours, minutes & seconds
function myTimer (){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m)
    s = checkTime(s)
    clock.innerHTML = h + ":" + m + ":" + s;
} 

setInterval(myTimer,1000)
//Real-Time Clock Script End

//Todo List Script Start
let listContainer = document.getElementById("todo-list-container")

//Add a close button to each list item
let myNodelist = document.getElementsByTagName("LI")
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span)
}

//Click on close to remove selected list item
let close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none"
    }
}

//Add a checked symbol when list item is clicked
var list = document.querySelector("ul")
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        }
    }, false
);

//Create new item when "Add" button is clicked
function newItem () {
    var li = document.createElement("li");
    var inputValue = document.getElementById("listInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert ("Required");
    }
    else {
        document.getElementById("todo-list-ul").appendChild(li);
    }
    document.getElementById("listInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
//Todo List Script End

//Greeting Script Start
let submit = document.getElementById("name-submit")

submit.onclick = function greetName () {
    let greet = document.getElementById("greet-text");
    let name = document.getElementById("name-input");
    let nameValue = document.getElementById("name-input").value;
    let question = document.getElementById("name-label");
    const date = new Date();
    let h = date.getHours();

    if (nameValue === "") {return};

    question.style.display = "none";
    name.style.display = "none";
    submit.style.display = "none";
    
    if (h > 0 && h < 12) {greet.innerHTML = "Good Morning, " + nameValue}
    else if (h > 12 && h < 18) {greet.innerHTML = "Good Afternoon, " + nameValue}
    else if (h > 18 && h < 24) {greet.innerHTML = "Good Evening, " + nameValue}
    else {greet.innerHTML = "Hello, " + nameValue}

    clock.style.display = "block";
    quoteDisplay.style.display = "block";
    listContainer.style.display = "block";
    quoteText.innerHTML = quotesList[0].quote;
    authorText.innerHTML = quotesList[0].author;
    edit.style.display = "flex";
}
//Greeting Script End

//Edit Name Script Start
let edit = document.getElementById("edit-container")

edit.onclick = function editName() {
    let name = document.getElementById("name-input");
    name.contentEditable === "true";
}

//Initial Load in
window.onload = (
    background.style.backgroundImage = backgroundImages[0],
    background.style.backgroundRepeat = "no-repeat",
    background.style.backgroundSize = "cover"
)