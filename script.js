var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Set initial values for color inputs
color1.value = "#ff0000"; // Example initial color
color2.value = "#0000ff"; // Example initial color

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
};  
function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
function setRandomGradient() {  
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}


//Apply the gradient on page load
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);


