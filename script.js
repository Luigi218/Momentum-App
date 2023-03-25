//Global Variables
let img = 0;
const background = document.querySelector("body")

let num = 0
const quoteText = document.getElementById("quote-text")
const authorText = document.getElementById("author-text")

let clock = document.getElementById("clock")

const bg = document.querySelector("body")
var button = document.getElementById("listButton");
var modal = document.getElementById("listModal");

let form = document.getElementById("name-form")
let submit = document.getElementById("name-submit")
let nameGreeted = document.getElementById("greet-name");

let edit = document.getElementById("edit-container")
let editContent = document.getElementById("name-edit")

//Changing Background Script
const backgroundImages = [
    "url(assets/img1.jpg)", 
    "url(assets/img2.jpg)", 
    "url(assets/img3.jpg)"
]

//Changing Background Function
function changeBackground () {
        img++
        if (img === backgroundImages.length) {img = 0}
        background.style.backgroundImage = backgroundImages[img]
}

setInterval(changeBackground, 60000)

//Changing Quote Script
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
function changeQuote () {
    num++
    if (num === quotesList.length) {num = 0}
    quoteText.innerHTML = quotesList[num].quote
    authorText.innerHTML = quotesList[num].author
}

setInterval(changeQuote, 60000)

//Real-Time Clock Script

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

//Todo List Script 
button.addEventListener("click",function () {
        modal.style.display = "block";
})

window.addEventListener("click", function(event) {
    if (event.target === bg) {
        modal.style.display = "none";
        nameGreeted.contentEditable = "false";
        input.contentEditable = "false";
    }
})

//Create new item when "Add" button is clicked
function newItem () {
    var li = document.createElement("li");
    var checkBox = document.createElement("input");
    var inputValue = document.getElementById("listInput").value;
    var input = document.createElement("SPAN");
    input.innerHTML = inputValue
    checkBox.type = "checkbox";
    
    li.appendChild(checkBox)
    li.appendChild(input);
    if (inputValue === "") {
        alert ("What do you want to do today?");
    }
    else {
        document.getElementById("todo-list-ul").appendChild(li);
    }
    document.getElementById("listInput").value = "";
    
    //Add a checked symbol when list item is clicked
    checkBox.addEventListener("click", function() {
        li.classList.toggle("checked");
            }
        )

    //Add an edit button to each list item
    var listEdit = document.createElement("SPAN");
    var editText = document.createTextNode("Edit");
    listEdit.className = "edit";
    listEdit.appendChild(editText);
    li.appendChild(listEdit);

    //Click on edit to make todo editable
    let edit = document.getElementsByClassName("edit")
    var i;
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {
            input.contentEditable = "true";
        }
    }

    window.addEventListener("click", function(event) {
        if (event.target === bg) {
            input.contentEditable = "false";
        }
    })
    
    //Add a close button to each list item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    //Click on close to remove selected list item
    let close = document.getElementsByClassName("close")
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Greeting Script Start
function submitForm (event) {
    event.preventDefault();
}

form.addEventListener("submit",submitForm);

form.addEventListener("submit",function greetName () {
    let greeting = document.getElementById("greet-text");
    let name = document.getElementById("name-input");
    let nameValue = document.getElementById("name-input").value;
    let question = document.getElementById("name-label");
    const date = new Date();
    let h = date.getHours();

    if (nameValue === "") {return};

    if (h >= 0 && h < 12) {greeting.innerHTML = "Good Morning," + "&nbsp;"}
    else if (h >= 12 && h < 18) {greeting.innerHTML = "Good Afternoon" + "&nbsp;"}
    else if (h >= 18 && h < 24) {greeting.innerHTML = "Good Evening" + "&nbsp;"}
    else {greeting.innerHTML = "Hello" + "&nbsp;"};
    nameGreeted.innerHTML = nameValue;
    localStorage.setItem("name", nameValue);
    
    clock.style.display = "block";
    question.style.display = "none";
    name.style.display = "none";
    quoteDisplay.style.display = "block";
    quoteText.innerHTML = quotesList[0].quote;
    authorText.innerHTML = quotesList[0].author
    edit.style.display = "flex";
    button.style.display = "block";
})

//Edit Name Script Start
editContent.onclick = function editName() {
    nameGreeted.contentEditable = "true";
}

//Initial Load in
var storedName = localStorage.getItem("name")

window.onload = function loadin () {
    background.style.backgroundImage = backgroundImages[0];
    if (localStorage.getItem("name")) {
        storedName = nameValue;
        greetName();
    }
}