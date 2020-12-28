var myVar = setInterval(myTimer, 1000);
var i = 5;


function myTimer() {

document.getElementById("count").innerText = i;
i--;

}
