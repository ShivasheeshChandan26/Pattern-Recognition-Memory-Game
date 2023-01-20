var sessionString = sessionStorage.getItem('boxOrder_final');
var boxOrder_final = JSON.parse(sessionString);
console.log(boxOrder_final);

var userBox = [];
const numberOfBoxes = 3;

function get0() {
    userBox.push(0);
    document.getElementById("a_1").style.backgroundColor = "#26DE81";
}

function get1() {
    userBox.push(1);
    document.getElementById("a_2").style.backgroundColor = "#26DE81";
}
function get2() {
    userBox.push(2);
    document.getElementById("a_3").style.backgroundColor = "#26DE81";
}
function get3() {
    userBox.push(3);
    document.getElementById("a_4").style.backgroundColor = "#26DE81";
}
function get4() {
    userBox.push(4);
    document.getElementById("b_1").style.backgroundColor = "#26DE81";
}
function get5() {
    userBox.push(5);
    document.getElementById("b_2").style.backgroundColor = "#26DE81";
}
function get6() {
    userBox.push(6);
    document.getElementById("b_3").style.backgroundColor = "#26DE81";
}
function get7() {
    userBox.push(7);
    document.getElementById("b_4").style.backgroundColor = "#26DE81";
}
function get8() {
    userBox.push(8);
    document.getElementById("c_1").style.backgroundColor = "#26DE81";
}
function get9() {
    userBox.push(9);
    document.getElementById("c_2").style.backgroundColor = "#26DE81";
}
function get10() {
    userBox.push(10);
    document.getElementById("c_3").style.backgroundColor = "#26DE81";
}
function get11() {
    userBox.push(11);
    document.getElementById("c_4").style.backgroundColor = "#26DE81";
}
function get12() {
    userBox.push(12);
    document.getElementById("d_1").style.backgroundColor = "#26DE81";
}
function get13() {
    userBox.push(13);
    document.getElementById("d_2").style.backgroundColor = "#26DE81";
}
function get14() {
    userBox.push(14); 
    document.getElementById("d_3").style.backgroundColor = "#26DE81";
}
function get15() {
    userBox.push(15); 
    document.getElementById("d_4").style.backgroundColor = "#26DE81";
}

setInterval(matchingArray, 1000);

function matchingArray() {
    if(userBox[numberOfBoxes-1] != null) {
        count = 0;
        for(var i = 0; i < numberOfBoxes; i++) {
            if(userBox[i] == boxOrder_final[i]) {
                count++;
            }
        }
        return count;
    }
}
matchingArray();

var count_new;
setInterval(() => {
    for(var i = 0; i < numberOfBoxes; i++) {
        if(userBox[i] != null) {
            if(userBox[i] != boxOrder_final[i]) {
                var a = 
                a.forEach((b) => {
                if (count_new == boxOrder[count]) {
                    b.style.backgroundColor = "#26DE81";
                    b.innerHTML = count+1;
                }})

                gameOver();
        }
        }
    }
    if(userBox[numberOfBoxes-1] != null) {
        count_new = count;
        if(count_new == numberOfBoxes) {
            winLevel();
        }
        else {
            timeleft = 0;
            gameOver();
        }
    }
}, 1000);


console.log(matchingArray());


function winLevel() {
    window.location.href = "level_2.html";
}

function gameOver() {
    $("body").empty();
    var displayScore = document.createElement("p");
    var text = document.createTextNode("Score : 2");
    displayScore.appendChild(text);
    var element = document.body;
    element.appendChild(displayScore);

    var displayText = document.createElement("h1");
    var text1 = document.createTextNode("Better Luch Next Time!");
    displayText.appendChild(text1);
    element.appendChild(displayText);

    displayText.style.position = "absolute";
    displayText.style.top = "45%";
    displayText.style.color = "#FFF";
    displayText.style.left = "15%";
    displayText.style.fontSize = "50px";
    
    displayScore.style.position = "absolute";
    displayScore.style.top = "37.5%";
    displayScore.style.color = "#F7C232";
    displayScore.style.left = "15%";
    displayScore.style.fontSize = "50px";
    

    document.body.style.background = "url('gameOverBackground.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
}

var timeleft = 7;
var timerId = setInterval(countdown, 1000);

function countdown() {
    if(timeleft == 0) {
        clearInterval(timerId);
    }
    else {
        document.getElementById("display").innerHTML = "You have " + timeleft + " seconds!";
        document.getElementById("progressBar").value = timeleft;
        timeleft -= 1;
    }
}

setInterval(gameOver, 8000);