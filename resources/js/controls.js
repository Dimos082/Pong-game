// Recreates the initial position of the ball (for reset button)
// function ballReset() {
//     ballX = 50;
//     ballY = 50;
//     ballSpeedX = 4;
//     ballSpeedY = 10;
//     }

// Number of rounds to win listener
document.getElementById("rounds").addEventListener("keyup", function(){
    winScore = rounds.value;
    console.log(rounds.value);
  });

document.getElementById("rounds").addEventListener("click", function(){
    winScore = rounds.value;
    console.log(rounds.value);
  });
// Functions for ball speed full stop and resume
function pauseGame() {
    gamePaused = true;
    // current_AI = AI;
    // console.log(currentXspeed, currentYspeed);
    currentXspeed = ballSpeedX; 
    currentYspeed = ballSpeedY;
ballSpeedX = 0;
ballSpeedY = 0;
// AI_disabled();
// console.log(current_AI)
}

function resumeGame() {
    gamePaused = false;
    // console.log(currentXspeed, currentYspeed);
    ballSpeedX = currentXspeed;
    ballSpeedY = currentYspeed;
    // AI = current_AI;
    // console.log(AI)
}

// Toggle for mute
function muteEverything() {
    hitSound1.muted ^= true;
    hitSound2.muted ^= true;
    sideHitSound.muted ^= true;
    offSideSound.muted ^= true;
    bellSound.muted ^= true;
    naniSound.muted ^= true;
    console.log('mute')
}

// Changing The Execution Context Of AI function
// function AI_disabled() {
//     window.AI = function(){
//     console.log('AI disabled');
//   }
// }

function AI_super_easy() {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
         paddle2X += 1;
    } else if (paddle2XCenter > ballX + 35) {
         paddle2X -= 1;
    }
    console.log('super easy');
  }
}

function AI_easy() {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
         paddle2X += 4;
    } else if (paddle2XCenter > ballX + 35) {
         paddle2X -= 4;
    }
    console.log('easy');
  }
}

function AI_normal() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 15;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 15;
    }
    console.log('normal');
  }
}

function AI_hard() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 30;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 30;
    }
    console.log('hard');
  }
}

function AI_super_hard() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 50;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 50;
    }
    console.log('super hard');
  }
}
// Changing The Execution Context Of drawEverything function for color change
function skyblueColor() {
    window.drawEverything = function(){
         // Background shape
         colorRect(0, 0, canvas.width, canvas.height, "skyblue");
         if (showWinScreen) {
             canvasContext.fillStyle = "white";
             canvasContext.fillText("CLICK TO START", 70, canvas.height / 2);
             canvasContext.font = "bold 30px Arial";
             if (player1Score >= winScore) {
                 canvasContext.fillText("Soulless machine won!", 35, 200);
             } else if (player2Score >= winScore) {
                 canvasContext.fillText("A WINRAR is you!", 70, 200);
             } return;
    }
    colorCircle(ballX, ballY, 7, "white");
    colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");
    colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");
    canvasContext.fillText(player1Score, 50, 100);
    canvasContext.fillText(player2Score, 50, 500);
    drawNet();
}}

function blackColor() {
    window.drawEverything = function(){
         // Background shape
         colorRect(0, 0, canvas.width, canvas.height, "black");
         if (showWinScreen) {
             canvasContext.fillStyle = "white";
             canvasContext.fillText("CLICK TO START", 70, canvas.height / 2);
             canvasContext.font = "bold 30px Arial";
             if (player1Score >= winScore) {
                 canvasContext.fillText("Soulless machine won!", 35, 200);
             } else if (player2Score >= winScore) {
                 canvasContext.fillText("A WINRAR is you!", 70, 200);
             } return;
    }
    colorCircle(ballX, ballY, 7, "white");
    colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");
    colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");
    canvasContext.fillText(player1Score, 50, 100);
    canvasContext.fillText(player2Score, 50, 500);
    drawNet();
}}

function greenColor() {
    window.drawEverything = function(){
         // Background shape
         colorRect(0, 0, canvas.width, canvas.height, "green");
         if (showWinScreen) {
             canvasContext.fillStyle = "white";
             canvasContext.fillText("CLICK TO START", 70, canvas.height / 2);
             canvasContext.font = "bold 30px Arial";
             if (player1Score >= winScore) {
                 canvasContext.fillText("Soulless machine won!", 35, 200);
             } else if (player2Score >= winScore) {
                 canvasContext.fillText("A WINRAR is you!", 70, 200);
             } return;
    }
    colorCircle(ballX, ballY, 7, "white");
    colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");
    colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");
    canvasContext.fillText(player1Score, 50, 100);
    canvasContext.fillText(player2Score, 50, 500);
    drawNet();
}}

function redColor() {
    window.drawEverything = function(){
         // Background shape
         colorRect(0, 0, canvas.width, canvas.height, "red");
         if (showWinScreen) {
             canvasContext.fillStyle = "white";
             canvasContext.fillText("CLICK TO START", 70, canvas.height / 2);
             canvasContext.font = "bold 30px Arial";
             if (player1Score >= winScore) {
                 canvasContext.fillText("Soulless machine won!", 35, 200);
             } else if (player2Score >= winScore) {
                 canvasContext.fillText("A WINRAR is you!", 70, 200);
             } return;
    }
    colorCircle(ballX, ballY, 7, "white");
    colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");
    colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");
    canvasContext.fillText(player1Score, 50, 100);
    canvasContext.fillText(player2Score, 50, 500);
    drawNet();
}}

function blueColor() {
    window.drawEverything = function(){
         // Background shape
         colorRect(0, 0, canvas.width, canvas.height, "blue");
         if (showWinScreen) {
             canvasContext.fillStyle = "white";
             canvasContext.fillText("CLICK TO START", 70, canvas.height / 2);
             canvasContext.font = "bold 30px Arial";
             if (player1Score >= winScore) {
                 canvasContext.fillText("Soulless machine won!", 35, 200);
             } else if (player2Score >= winScore) {
                 canvasContext.fillText("A WINRAR is you!", 70, 200);
             } return;
    }
    colorCircle(ballX, ballY, 7, "white");
    colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");
    colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");
    canvasContext.fillText(player1Score, 50, 100);
    canvasContext.fillText(player2Score, 50, 500);
    drawNet();
}}

function orangeColor() {
    window.drawEverything = function(){
         // Background shape
         colorRect(0, 0, canvas.width, canvas.height, "orange");
         if (showWinScreen) {
             canvasContext.fillStyle = "white";
             canvasContext.fillText("CLICK TO START", 70, canvas.height / 2);
             canvasContext.font = "bold 30px Arial";
             if (player1Score >= winScore) {
                 canvasContext.fillText("Soulless machine won!", 35, 200);
             } else if (player2Score >= winScore) {
                 canvasContext.fillText("A WINRAR is you!", 70, 200);
             } return;
    }
    colorCircle(ballX, ballY, 7, "white");
    colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");
    colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");
    canvasContext.fillText(player1Score, 50, 100);
    canvasContext.fillText(player2Score, 50, 500);
    drawNet();
}}
//Difficulty selector
function changeDifficulty() {
    let z = document.getElementById("difficulty").value; 
switch
(z) { 
case
 "super_easy":
 AI_super_easy()
 document.getElementById("image").src = "resources/img/Difficulty_0.png";
    break;
case
 "easy":
 AI_easy()
 document.getElementById("image").src = "resources/img/Difficulty_1.png";
    break;
case
 "normal":
 AI_normal()
 document.getElementById("image").src = "resources/img/Difficulty_2.png";
    break;  
case
 "hard":
 AI_hard()
 document.getElementById("image").src = "resources/img/Difficulty_3.png";
    break; 
case
 "super_hard":
 AI_super_hard()
 document.getElementById("image").src = "resources/img/Difficulty_4.png";
 naniSound.play()
    break; 
}
console.log(z);
  }
//Color selector
function changeColor() {
    let c = document.getElementById("color").value; 
switch
(c) { 
case
 "skyblue":
skyblueColor()
document.getElementById("color").class = color.style.color="skyblue"
    break;
case
 "black":
 blackColor()
 document.getElementById("color").class = color.style.color="black"
    break;
case
 "green":
 greenColor()
 document.getElementById("color").class = color.style.color="green"
    break;
case
 "red":
 redColor()
 document.getElementById("color").class = color.style.color="red"
    break;  
case
 "blue":
 blueColor()
 document.getElementById("color").class = color.style.color="blue"
    break; 
case
 "orange":
 orangeColor()
 document.getElementById("color").class =  color.style.color="orange"
    break; 
}
console.log(c);
  }