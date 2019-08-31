// Recreates the initial position of the ball (for reset button)
function ballReset() {
    ballX = 50;
    ballY = 50;
    ballSpeedX = 4;
    ballSpeedY = 10;
    }

// Changing The Execution Context Of AI function
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
    console.log('impossibru');
  }
}

//Difficulty selector
function changeDifficulty() {
    let z = document.getElementById("difficulty").value; 
switch
(z) { 
case
 "super_easy":
 AI_super_easy()
    break;
case
 "easy":
 AI_easy()
    break;
case
 "normal":
 AI_normal()
    break;  
case
 "hard":
 AI_hard()
    break; 
case
 "super_hard":
 AI_super_hard()
    break; 
}
console.log(z);
  }