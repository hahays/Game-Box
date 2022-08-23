import IMG1 from "../MemoryGame/images/fries.png";
import IMG2 from "../MemoryGame/images/cheeseburger.png";
import IMG3 from "../MemoryGame/images/hotdog.png";
import IMG4 from "../MemoryGame/images/ice-cream.png";
import IMG5 from "../MemoryGame/images/milkshake.png";
import IMG6 from "../MemoryGame/images/pizza.png";
import CLOSEIMG from "../MemoryGame/images/blank.png";
import WHITE from "../MemoryGame/images/white.png";

function start() {
  const cardArray = [
    {
      name: "fries",
      img: IMG1,
    },
    {
      name: "cheeseburger",
      img: IMG2,
    },
    {
      name: "hotdog",
      img: IMG3,
    },
    {
      name: "ice-cream",
      img: IMG4,
    },
    {
      name: "milkshake",
      img: IMG5,
    },
    {
      name: "pizza",
      img: IMG6,
    },
    {
      name: "fries",
      img: IMG1,
    },
    {
      name: "cheeseburger",
      img: IMG2,
    },
    {
      name: "hotdog",
      img: IMG3,
    },
    {
      name: "ice-cream",
      img: IMG4,
    },
    {
      name: "milkshake",
      img: IMG5,
    },
    {
      name: "pizza",
      img: IMG6,
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const gridDisplay = document.querySelector("#grid-memory");
  const resultDisplay = document.querySelector("#score");
  let cardsChosen = [];
  let cardsChosenIds = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", CLOSEIMG);
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

  createBoard();

  function checkMatch() {
    const cards = document.querySelectorAll("#grid-memory img");

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosenIds[0] === cardsChosenIds[1]) {
      cards[optionOneId].setAttribute("src", CLOSEIMG);
      cards[optionTwoId].setAttribute("src", CLOSEIMG);
    } else if (cardsChosen[0] === cardsChosen[1]) {
      // alert("You found a match!");
      cards[optionOneId].setAttribute("src", WHITE);
      cards[optionTwoId].setAttribute("src", WHITE);
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", CLOSEIMG);
      cards[optionTwoId].setAttribute("src", CLOSEIMG);

      // alert("Sorry try again!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.innerHTML = "You WIN!";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

export default start;
