var image = document.getElementById("img3");
var imageText = document.getElementById("img3text");
image.style.display = "none";
imageText.style.display = "none";
var showBtn = document.getElementById("showButton");
function showAll() {
	if(image.style.display == "none" && imageText.style.display == "none") {
		image.style.display = "block";
		imageText.style.display = "block";
	} else {
		image.style.display = "none";
		imageText.style.display = "none";
	}
}