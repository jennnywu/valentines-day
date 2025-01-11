// lastpage.js

document.addEventListener("DOMContentLoaded", function() {
    // clear container on page load
    document.getElementById("heart-container").innerHTML = '';

    document.getElementById("heart-button").addEventListener("click", function() {
        var heart = document.createElement("img");
        heart.src = "img/heart.png"
        heart.classList.add("heart");
    
        // set random position for each heart to appear
        var randomLeft = Math.random() * 100;
        var randomTop = Math.random() * 80;

        heart.style.left = randomLeft + "%";
        heart.style.top = randomTop + "%";
        heart.style.position = "absolute";
        
        // append heart to container
        document.getElementById("heart-container").appendChild(heart);
    
        // remove heart at end of 3s animation
        setTimeout(function () {
            heart.remove();
        }, 3000);
    });
});