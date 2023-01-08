const a =  document.querySelectorAll(".a_b")
var arr = [0];
const max = 15;
const min = 0;

var timeleft = 10;

const numberOfBoxes = 3;

document.getElementById('display').style.visibility = "hidden";
document.getElementById('progressBar').style.visibility = "hidden";

while(arr.length < numberOfBoxes){
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr); // just for debugging

 let count = 0

setInterval(() => {
    if (count <= numberOfBoxes) {
        let count2 = 0
        a.forEach((b) => {
            if (count2 == arr[count]) {
                b.style.backgroundColor = "#F7C232"
            }
            count2 += 1;
        })
    }
    count += 1
}, 1000)

setInterval(removeBoxes, 5000);
function removeBoxes() {
    var div = document.getElementById('rand');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    document.getElementById('display').style.visibility = "visible";
    document.getElementById('progressBar').style.visibility = "visible";
    
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 10 - timeleft;
        timeleft -= 1;
      }, 1000);

}
