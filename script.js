let firstdiv = document.getElementById("firstdiv");
let btn = document.getElementById("button");

btn.addEventListener("click", function() {
    firstdiv.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ','  + Math.round(Math.random() * 255) + ')';
})