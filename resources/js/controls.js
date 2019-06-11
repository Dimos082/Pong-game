function button1() {
    winScore = 40;
}
function button2() {
    winScore = 10;
}
function button3() {
    winScore = 100;
}

// Recreates the initial position of the ball (for reset button)
function ballReset() {
    ballX = 50;
    ballY = 50;
    ballSpeedX = 4;
    ballSpeedY = 10;
    }

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