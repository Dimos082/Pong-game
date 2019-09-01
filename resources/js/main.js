    let canvas;
    let canvasContext;
    let ballX = 50;
    let ballY = 50;
    let ballSpeedX = 4;
    let ballSpeedY = 10;

    let player1Score = 0;
    let player2Score = 0;
    // Winning condition (in sake of QA it was set to 3 points, default = 10)
    let winScore = 3;

    // HTML5 sound. Recorded and voiced by me, so no copyrights involved :-)
    let hitSound1 = new Audio("resources/sound/hitsound1.mp3");
    let hitSound2 = new Audio("resources/sound/hitsound2.mp3");
    let sideHitSound = new Audio("resources/sound/sidehitsound.mp3");
    let offSideSound = new Audio("resources/sound/offsidesound.mp3");
    let bellSound = new Audio("resources/sound/bellsound.mp3");

    let winSounds = [
    new Audio("resources/sound/winsound1.mp3"),
    new Audio("resources/sound/winsound2.mp3"),
    new Audio("resources/sound/winsound3.mp3"),
    new Audio("resources/sound/winsound4.mp3"),
    new Audio("resources/sound/winsound5.mp3")
    ];

    let lostSounds = [
    new Audio("resources/sound/lostsound1.mp3"),
    new Audio("resources/sound/lostsound2.mp3"),
    new Audio("resources/sound/lostsound3.mp3"),
    new Audio("resources/sound/lostsound4.mp3")
    ];

    // Those 2 functions below throw a random win/lose sound
    function playWinSound() {
        let winSound = winSounds[Math.floor(Math.random() * winSounds.length)];
        winSound.play();
    }
    
    function playLostSound() {
        let lostSound = lostSounds[Math.floor(Math.random() * lostSounds.length)];
        lostSound.play();
    }

    let showWinScreen = true;

    let paddle1X = 100;
    let paddle2X = 100;
    let paddleWidth = 100;
    let paddleThickness = 12;

    // Gereral func that calls all others + FPS + mouseclick
    window.onload = function () {
        canvas = document.getElementById("gameCanvas");
        canvasContext = canvas.getContext("2d");
        // Sets framerate and gamespeed
        let framesPerSecond = 60;
        setInterval(function () {
            moveEverything();
            drawEverything();
        }, 2000 / framesPerSecond);
        // Defines mouse click and move events
        canvas.addEventListener("mousedown", handleMouseClick);
        canvas.addEventListener("mousemove",
            function (evt) {
                // Stick paddle's center to cursor position
                let mousePos = calculateMousePos(evt);
                paddle1X = mousePos.x - (paddleWidth / 2);
            });
    }

    // Binds player's paddle to a mouse position
    function calculateMousePos(evt) {
        let rect = canvas.getBoundingClientRect();
        let root = document.documentElement;
        let mouseX = evt.clientX - rect.left - root.scrollLeft;
        let mouseY = evt.clientY - rect.right - root.scrollRight;
        return {
            x: mouseX,
            y: mouseY
        };
    }
    // Starts a new game with a mouse click
    function handleMouseClick(evt) {
        if (showWinScreen) {
            player1Score = 0;
            player2Score = 0;
            showWinScreen = false;
        }
    }

    // Set ball's position far against paddle1x if paddle 2 (comp) wins 1 point
    function ballResetPaddle1x() {
        if (player1Score >= winScore) {
            showWinScreen = true;
            playLostSound(); //calls a function with random loosing sound
        } else
            ballX = 50;
        ballY = 50;
        ballSpeedX = 5; // ball direction
    }
    // Set ball's position far against paddle2x if paddle 1 (human) wins 1 point
    function ballResetPaddle2x() {
        if (player2Score >= winScore) {
            showWinScreen = true;
            playWinSound(); //calls a function with random winning sound
        } else
            ballX = 380;
        ballY = 540;
        ballSpeedX = -5; // ball direction
    }
    // Computer player's performance (aka difficulty)
    function AI() {
        let paddle2XCenter = paddle2X + (paddleWidth / 2);
        if (paddle2XCenter < ballX - 35) {
            paddle2X += 15;
        } else if (paddle2XCenter > ballX + 35) {
            paddle2X -= 15;
        }
    }
    // Adds movement to ball and computer's paddle
    function moveEverything() {
        if (showWinScreen == true) {
            return;
        }
        // Enables computer player's AI
        AI();
        // Adds speed to ball 
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        // Ball's bounce against the left wall
        if (ballX - 5 < 0) {
            ballX = 5; //Declares a horizontal min for ball position
            ballSpeedX = -ballSpeedX;
            sideHitSound.play();
            // console.log(ballX, ballY);
        } else {
            ballSpeedX = ballSpeedX;
        }
        // Ball's bounce against the right wall
        if (ballX + 5 > 400) {
            ballX = 395;  //Declares a horizontal max for ball position
            ballSpeedX = -ballSpeedX;
            sideHitSound.play();
            // console.log(ballX, ballY);
        } else {
            ballSpeedX = ballSpeedX;
        }
        // Ball's bounce against computer's paddle
        if (ballY < 20) {
            if (ballX > paddle2X - paddleWidth * 0.1 &&
                ballX < paddle2X + paddleWidth * 1.1) {
                ballSpeedY = -ballSpeedY;
                // When ball touches the paddle
                let deltaX = ballX - (paddle2X + paddleWidth / 2);
                ballSpeedX = deltaX * 0.35;
                hitSound2.play();
            } else {
                // Winning condition for human player
                player2Score++; //adds one point
                bellSound.play(); //plays sound
                // ball position afrer human scores
                ballResetPaddle2x();
            }
        }
        // Ball's bounce against human's paddle
        if (ballY > 580) {
            if (ballX > paddle1X - paddleWidth * 0.1 &&
                ballX < paddle1X + paddleWidth * 1.1) {
                ballSpeedY = -ballSpeedY;
                // Adds speed to ball when it hits paddle's sides
                let deltaX = ballX - (paddle1X + paddleWidth / 2);
                ballSpeedX = deltaX * 0.35;
                hitSound1.play();
            } else {
                // Winning condition for computer player
                player1Score++; //adds one point
                offSideSound.play(); //plays sound
                // ball position afrer computer scores
                ballResetPaddle1x();
            }
        }
    }
    // Creates canvas and start/win screen
    function drawEverything() {
        // Background shape
        colorRect(0, 0, canvas.width, canvas.height, "skyblue");
        // Start and wining screens settings
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

        // Calls Net shape
        drawNet();

        // Calls Ball shape
        colorCircle(ballX, ballY, 7, "white")

        // Calls Bottom paddle shape
        colorRect(paddle1X, 587, paddleWidth, paddleThickness, "white");

        // Calls Upper paddle shape
        colorRect(paddle2X, 0, paddleWidth, paddleThickness, "white");

        // Displays score counters positions
        canvasContext.fillText(player1Score, 50, 100);
        canvasContext.fillText(player2Score, 50, 500);
    }
    // Shaping the ball
    function colorCircle(centerX, centerY, radius, drawColor) {
        canvasContext.fillStyle = drawColor;
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        canvasContext.fill();
    }
    // Shaping all rect objects
    function colorRect(leftX, topY, width, height, drawColor) {
        // canvasContext.beginPath();
        canvasContext.fillStyle = drawColor;
        // canvasContext.lineCap = "round";
        canvasContext.fillRect(leftX, topY, width, height);
        //         canvasContext.moveTo(leftX, topY, width, height);
        //         canvasContext.lineTo(leftX, topY, width, height);
        // canvasContext.stroke();
    }
    // Setting the net between players
    function drawNet() {
        for (let i = 0; i < canvas.width; i += 40) {
            colorRect(i + 10, canvas.height / 2, 20, 2, "white");
        }
        // colorRect(0, canvas.height/2, 400, 2, "white");
    }

