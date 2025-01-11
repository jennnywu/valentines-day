// valentine.js

document.getElementById("no-button")
  .addEventListener("click", function () {
    var noButton = document.getElementById("no-button");
    var imgElement = document.querySelector("img.responsive");

    // generate random positions
    var randomLeft = Math.floor(Math.random() * 60) + 20
    var randomTop = Math.floor(Math.random() * 80) + 10

    // update button position
    noButton.style.position = "absolute";
    noButton.style.left = randomLeft + "%";
    noButton.style.top = randomTop + "%";

    imgElement.src = "img/cat.gif";
  });

  // const images = ["img/jenny1.jpg", "img/jenny2.jpg", "img/jenny3.jpg", "img/jenny4.jpg", "img/jenny5.jpg", 
  //                 "img/jenny6.jpg", "img/jenny7.jpg", "img/jenny8.jpg", "img/jenny9.jpg"];
  // let index = 0;

  // function cycleImage() {
  //   const image = document.getElementById("image-cycle")

  //   index = (index + 1) % images.length;
  //   image.src = images[index];
  // }

  // setInterval(cycleImage, 500);