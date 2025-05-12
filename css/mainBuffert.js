function changeColour(colour) {
	document.getElementById("printsheet").style.borderColor = colour;
}
function changePicture(bild) {
	if (bild == 1) {
	var src = document.getElementById("bildInput1").value;
	document.getElementById("bild1").src = src;
	}
	if (bild == 2) {
	var src = document.getElementById("bildInput2").value;
	document.getElementById("bild2").src = src;
	}
	if (bild == 3) {
	var src = document.getElementById("bildInput3").value;
	document.getElementById("bild3").src = src;
	}
}
function removePicture(bild) {
	if (bild == 1) {
	document.getElementById("bild1").src = "../../media/blank.png";
	document.getElementById("bildInput1").value = "";
	}
	if (bild == 2) {
	document.getElementById("bild2").src = "../../media/blank.png";
	document.getElementById("bildInput2").value = "";
	}
	if (bild == 3) {
	document.getElementById("bild3").src = "../../media/blank.png";
	document.getElementById("bildInput3").value = "";
	}
}