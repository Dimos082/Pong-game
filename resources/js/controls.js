function button1() {
    winScore = 40;
}

// Recreates the initial position of the ball (for reset button)
function ballReset() {
    ballX = 50;
    ballY = 50;
    ballSpeedX = 4;
    ballSpeedY = 10;
    }

// Changing The Execution Context Of AI function
function AI_easy() {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
         paddle2X += 4;
    } else if (paddle2XCenter > ballX + 35) {
         paddle2X -= 4;
    }
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
  }
}