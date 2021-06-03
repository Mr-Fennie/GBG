// var css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");

const color6 = document.querySelector(".color6");
const color7 = document.querySelector(".color7");
const color8 = document.querySelector(".color8");
const color9 = document.querySelector(".color9");

var css = document.getElementById("currentGradient");
var body = document.getElementById("gradient");


function setGradient() {
  body.style.background =
                  "linear-gradient(to right, "
                  + color1.value
                  + ", "
                  + color2.value
                  + ")";
  css.textContent = body.style.background + ";";
}

function setThreeGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color3.value
	+ ", "
	+ color4.value
	+ ", "
	+ color5.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setFourGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color6.value
	+ ", "
	+ color7.value
	+ ", "
	+ color8.value
	+ ", "
	+ color9.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color3.addEventListener("input", setThreeGradient);
color4.addEventListener("input", setThreeGradient);
color5.addEventListener("input", setThreeGradient);

color6.addEventListener("input", setFourGradient);
color7.addEventListener("input", setFourGradient);
color8.addEventListener("input", setFourGradient);
color9.addEventListener("input", setFourGradient);



function openColor(evt, colorName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(colorName).style.display = "block";
  evt.currentTarget.className += " active";
}
