var button = document.getElementById("myButton");
var input = document.getElementById("input");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");

input.value = "notch";
 
 button.onclick= function() {
	 var name = input.value;
	 image1.src = "https://crafatar.com/renders/body/" + name;
	 image2.src = "https://crafatar.com/skins/" + name;
	 
 }