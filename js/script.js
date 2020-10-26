var x = document.getElementById("third");
x.style.display = "none";

var showBtn = document.getElementById("showButton");
var closeBtn = document.getElementById("closeButton");

function showAll() {
    if (x.style.display == "none") {
        x.style.display = "block";
        closeBtn.style.display = "block";
        showBtn.style.display = "none";
    } else {
        x.style.display = "none";
        closeBtn.style.display = "none";
        showBtn.style.display = "block";
    }
}