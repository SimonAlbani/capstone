const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let shuffledArray = shuffle(circles);

function shuffle(array) {
  var ctr = array.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}

// function randomCircleArray(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

score = 0;
$(".circle").on("click", event => {
  console.log($(event.target).data("number"));
  console.log($(event.target).hasClass("pop-up"));

  if ($(event.target).hasClass("pop-up") === true) {
    score++;
    console.log("score: ", score);
    scoreKeeper(score);
    $(event.target).removeClass("pop-up");
  } else if ($(event.target).hasClass("pop-up") === false) {
    score--;
    console.log("score down: ", score);
    scoreKeeper(score);
  }
});

function popUpToggle(element) {
  element.toggleClass("pop-up");
}

function startGame() {
  for (let i = 0; i < shuffledArray.length; i++) {
    let circleDiv = $(`.${shuffledArray[i]}`);
    setTimeout(() => popUpToggle(circleDiv), i * 2000 + 2000);
    setTimeout(() => popUpToggle(circleDiv), i * 3000 + 100);
  }
}

$("button").on("click", startGame);

function scoreKeeper(number) {
  $(".score").text(number);
}

function checkWinner() {}
