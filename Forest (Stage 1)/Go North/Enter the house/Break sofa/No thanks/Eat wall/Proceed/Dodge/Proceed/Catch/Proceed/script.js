var myVar = setInterval(myTimer, 1000);
var i = 3;

function myTimer() {

document.getElementById("count").innerText = i;
i--;

}