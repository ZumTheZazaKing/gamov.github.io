var myVar = setInterval(myTimer, 1000);

var i = 1;

function myTimer() {
document.getElementById("count").innerHTML = i;
i--;
}