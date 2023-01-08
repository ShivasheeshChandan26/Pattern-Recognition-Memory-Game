const a =  document.querySelectorAll(".a_b")
var arr = [0];
const max = 15;
const min = 0;

const numberOfBoxes = 10;

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
                b.style.backgroundColor = "#827"
            }
            count2 += 1;
        })
    }
    count += 1
}, 1000)