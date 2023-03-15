//Real-Time Clock Function
function myTimer (){
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
} 

//Update every second
setInterval(myTimer,1000)

//Background Images Array
const backgroundImages = [
    "url(assets/img-1.jpg)", 
    "url(assets/img-2.jpg)", 
    "url(assets/img-3.jpg)"
]

const background = document.querySelector("body")

//Changing Background Function
function changeBackground () {
        let i = 0
        background.style.backgroundImage = backgroundImages[i]
        background.style.backgroundRepeat = "no-repeat"
        background.style.backgroundSize = "cover"
}

setInterval(changeBackground, 1000)