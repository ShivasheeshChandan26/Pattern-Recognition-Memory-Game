const a =  document.querySelectorAll(".a_b")
var boxOrder = [0];
const max = 15;
const min = 0;

var timeleft = 5;
const numberOfBoxes = 3;

while(boxOrder.length < numberOfBoxes){
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    if(boxOrder.indexOf(r) === -1) boxOrder.push(r);
}

console.log(boxOrder); // just for debugging
sessionStorage.setItem("boxOrder_final", JSON.stringify(boxOrder));

let count = 0

setInterval(() => {
    if (count <= numberOfBoxes) {
        let count2 = 0
        a.forEach((b) => {
            if (count2 == boxOrder[count]) {
                b.style.backgroundColor = "#26DE81";
                b.innerHTML = count+1;
            }
            count2 += 1;
        })
    }
    count += 1
}, 1000)

setInterval(moveToUserInput, 4000);
function moveToUserInput() {
    window.location.href = "userInput_1.html"
}