/*document.getElementById("lefteye").style.backgroundColor =
"blue";
document.getElementById("head").style.transform =
    "rotate(15deg)";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
    "4px yellow dotted";
// Give Douglas hair.
document.getElementById("head").style.borderTop =
    "30px black solid";
// Change the text color.
document.getElementById("body").style.color = "black";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
    "#FF00FF";*/

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 1) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }

    }
}
var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 45) {
            clearInterval(id);
        }
    }
}

var mouth = document.getElementById("mouth");
mouth.addEventListener("click", moveUpDown2);

function moveUpDown2(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 1) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }

    }
}

function moveUpDown2(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 1) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 70) {
            clearInterval(id);
        }

    }
}

// Give Douglas hair.
document.getElementById("head").style.borderTop =
    "20px black solid";