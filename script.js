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

//Update Background every minute
setInterval(changeBackground, 60000)