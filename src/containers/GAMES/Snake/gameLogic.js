function start(onLose) {
  let grid = document.querySelector(".grid-snake");
  let scoreDisplay = document.querySelector("#score");
  let width = 10;
  let currentIndex = 0;
  let appleIndex = 0;
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let score = 0;
  let speed = 0.8;
  let intervalTime = 0;
  let interval = 0;

  createBoard();
  startGame();

  function createBoard() {
    for (let i = 0; i < 100; i++) {
      let div = document.createElement("div");
      grid.appendChild(div);
    }
  }

  function startGame() {
    let squares = document.querySelectorAll(".grid-snake div");
    randomApple(squares);

    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcome, intervalTime);
  }

  function moveOutcome() {
    let squares = document.querySelectorAll(".grid-snake div");
    if (checkForHits(squares)) {
      alert("GAME OVER");

      if (onLose) {
        onLose();
      }
      return clearInterval(interval);
    } else {
      moveSnake(squares);
    }
  }

  function moveSnake(squares) {
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    eatApple(squares, tail);
    squares[currentSnake[0]].classList.add("snake");
  }
  function checkForHits(squares) {
    if (
      (currentSnake[0] + width >= width * width && direction === width) ||
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width <= 0 && direction === -width) ||
      squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
      return true;
    } else {
      return false;
    }
  }

  function eatApple(squares, tail) {
    if (squares[currentSnake[0]].classList.contains("apple")) {
      squares[currentSnake[0]].classList.remove("apple");
      squares[tail].classList.add("snake");
      currentSnake.push(tail);
      randomApple(squares);
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed;
      interval = setInterval(moveOutcome, intervalTime);
    }
  }

  function randomApple(squares) {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake"));
    squares[appleIndex].classList.add("apple");
  }

  function control(e) {
    switch (e.key) {
      case "ArrowUp":
        direction = -width;
        break;
      case "ArrowDown":
        direction = +width;
        break;
      case "ArrowLeft":
        direction = -1;
        break;
      case "ArrowRight":
        direction = 1;
        break;
    }
  }

  document.addEventListener("keydown", control);

  const stop = () => {
    document.removeEventListener("keydown", control);
    clearInterval(interval);
  };

  return stop;
}

export default start;
