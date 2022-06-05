var selectHeader = document.getElementById("head");
var selectInput = document.getElementById("input");

function generate() {
  selectHeader.innerHTML =
    Math.random() +
    Math.random() +
    Math.random() +
    Math.random() +
    Math.random() +
    Math.random() +
    Math.random();
}

function reset() {
  selectHeader.innerHTML = 0;
}
