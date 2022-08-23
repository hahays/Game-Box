function start(onLose) {
  const grid = document.querySelector(".grid-break-out");
  const scoreDiscplay = document.querySelector("#score");
  const blockWidth = 100;
  const blockHeight = 20;
  const ballDiameter = 20;
  const boardWidth = 510;
  const boardHeight = 390;
  let score = 0;
  let timeId;
  let xDirection = -2;
  let yDirection = 2;

  const userStart = [204, 2];
  let currentPosition = userStart;

  const ballStart = [230, 100];
  let ballCurrentPosition = ballStart;

  //create block
  class Block {
    constructor(xAxis, yAxis) {
      this.bottomLeft = [xAxis, yAxis];
      this.bottomRight = [xAxis + blockWidth, yAxis];
      this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
      this.topLeft = [xAxis, yAxis + blockHeight];
    }
  }

  //all my blocks

  const blocks = [
    new Block(5, 358),
    new Block(90, 358),
    new Block(175, 358),
    new Block(260, 358),
    new Block(345, 358),
    new Block(430, 358),
    new Block(5, 330),
    new Block(90, 330),
    new Block(175, 330),
    new Block(260, 330),
    new Block(345, 330),
    new Block(430, 330),
    new Block(5, 302),
    new Block(90, 302),
    new Block(175, 302),
    new Block(260, 302),
    new Block(345, 302),
    new Block(430, 302),
    new Block(5, 275),
    new Block(90, 275),
    new Block(175, 275),
    new Block(260, 275),
    new Block(345, 275),
    new Block(430, 275),
  ];

  function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.left = blocks[i].bottomLeft[0] + "px";
      block.style.bottom = blocks[i].bottomLeft[1] + "px";
      grid.appendChild(block);
    }
  }
  addBlocks();

  //add user

  const user = document.createElement("div");
  user.classList.add("user");
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
  grid.appendChild(user);

  //draw the user
  function drawUser() {
    user.style.left = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
  }

  //draw the ball
  function drawBall() {
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
  }

  // move user

  function moveUser(e) {
    switch (e.key) {
      case "ArrowLeft":
        if (currentPosition[0] > 0) {
          currentPosition[0] -= 10;
          drawUser();
        }
        break;
      case "ArrowRight":
        if (currentPosition[0] < boardWidth - blockWidth) {
          currentPosition[0] += 10;
          drawUser();
        }
        break;
    }
  }

  document.addEventListener("keydown", moveUser);

  // add ball

  const ball = document.createElement("div");
  ball.classList.add("ball");
  drawBall();
  grid.appendChild(ball);

  // move the ball
  function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
  }

  timeId = setInterval(moveBall, 10);

  // check for collision
  function checkForCollisions() {
    //check for block collisions
    for (let i = 0; i < blocks.length; i++) {
      if (
        ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
        ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
        ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
        ballCurrentPosition[1] < blocks[i].topLeft[1]
      ) {
        const allBlocks = Array.from(document.querySelectorAll(".block"));
        allBlocks[i].classList.remove("block");
        blocks.splice(i, 1);
        changeDirection();
        score++;
        scoreDiscplay.innerHTML = score;

        //check for win
        if (blocks.length === 0) {
          scoreDiscplay.innerHTML = "You WIN!";
          clearInterval(timeId);
          document.removeEventListener("keydown", moveUser);
        }
      }
    }
    // check for wall collisions
    if (
      ballCurrentPosition[0] >= boardWidth - ballDiameter ||
      ballCurrentPosition[0] <= 0 ||
      ballCurrentPosition[1] >= boardHeight - ballDiameter
    ) {
      changeDirection();
    }

    //check for user collisions
    if (
      ballCurrentPosition[0] > currentPosition[0] &&
      ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
      ballCurrentPosition[1] > currentPosition[1] &&
      ballCurrentPosition[1] < currentPosition[1] + blockHeight
    ) {
      changeDirection();
    }

    //check for game over
    if (ballCurrentPosition[1] <= 0) {
      clearInterval(timeId);
      scoreDiscplay.innerHTML = "LOSE! Score: " + score;
      document.removeEventListener("keydown", moveUser);
      if (onLose) {
        onLose();
      }
    }
  }

  function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
      yDirection = -2;
      return;
    }
    if (xDirection === 2 && yDirection === -2) {
      xDirection = -2;
      return;
    }
    if (xDirection === -2 && yDirection === -2) {
      yDirection = 2;
      return;
    }
    if (xDirection === -2 && yDirection === 2) {
      xDirection = 2;
      return;
    }
  }

  const stop = () => {
    document.removeEventListener("keydown", moveUser);
    clearInterval(timeId);
    score = 0;
  };

  return stop;
}

export default start;
