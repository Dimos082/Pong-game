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

    function changeDifficulty() {
        let easy = AI_easy();
        let normal = AI_normal();
        let hard = AI_hard();
        }

// Changing The Execution Context Of AI function
function AI_easy() {
    window.AI = function(){
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
         paddle2X += 4;
    } else if (paddle2XCenter > ballX + 35) {
         paddle2X -= 4;
    }console.log('easy');
  }
}

function AI_normal() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 15;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 15;
    }console.log('normal');
  }
}

function AI_hard() {
    window.AI = function(){
    let paddle2XCenter = paddle2X + (paddleWidth / 2);
    if (paddle2XCenter < ballX - 35) {
        paddle2X += 30;
    } else if (paddle2XCenter > ballX + 35) {
        paddle2X -= 30;
    }console.log('hard');
  }
}

