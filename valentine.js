// 1-valentine.js

document.getElementById("no-button")
  .addEventListener("click", function () {
    var noButton = document.getElementById("no-button");

    // generate random positions in 10% to 90% percentage range
    var randomLeft = Math.floor(Math.random() * 80) + 10
    var randomTop = Math.floor(Math.random() * 80) + 10

    // update button position
    noButton.style.position = "absolute";
    noButton.style.left = randomLeft + "%";
    noButton.style.top = randomTop + "%";
  });