const a =  document.querySelectorAll(".a_b")
let a_l = []

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandNum() {
    const min = 1;
    const max = 16;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}

for (let a = 0; a<=6; a++) {
    let rn_ = getRandNum()
    a_l.push(rn_)
} 

window.localStorage.setItem('Random Number List', a_l)

let count = 0

setInterval(() => {
    if (count <= 5) {
        let count2 = 0
        a.forEach((b) => {
            if (count2 == a_l[count]) {
                b.style.backgroundColor = getRandomColor()
            }
            count2 += 1;
        })    
    }
    count += 1
}, 1000)

setTimeout(function() {
    a.forEach((b) => {
        b.style.backgroundColor = "#CCC"
    })
}, 10000)

