// option 1 for button one
function makeDark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

// option 2 for button two
function makeLight() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

// option 3 for button blue
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "green";
  document.body.style.color = "white";
};

//option 3 but another way for function declaration separate
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
  document.body.style.color = "white";
}

// option 4
// getElementById.addEventListener('event type'handler)
document
  .getElementById("btn-make-red")
  .addEventListener("mouseleave", function makeRed() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
  });

// option 4 another way
const btnMakeGold = document.getElementById("btn-make-gold");

btnMakeGold.addEventListener("click", function () {
  document.body.style.backgroundColor = "gold";
  document.body.style.color = "green";
});

//  option 5 arrow funtion
const lightGreen = document.getElementById("btn-light-green");
lightGreen.onclick = (event) => {
  document.body.style.backgroundColor = "lightgreen";
  document.body.style.color = "white";
};
