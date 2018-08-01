//sets the array for the circles on the DOM
const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//shuffles an array, some code obtained from stack overflow
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

//sets the score and lives variables
let score = 0;
let lives = 5;

//when the user clicks on a a circle it checks wether or not you click on a mushroom or an angry mushroom
// and adds points or removes lives accordingly
$(".circle").on("click", event => {
  if ($(event.target).hasClass("mushroom") === true) {
    $(".mushroom")[0].play();
    score++;
    scoreKeeper(score);
    $(event.target).removeClass("mushroom");
    checkWinner();
  } else if ($(event.target).hasClass("angry-mushroom") === true) {
    $(".angry-mushroom")[0].play();
    lives--;
    scoreKeeper(score);
    $(event.target).removeClass("angry-mushroom");
    checkWinner();
  }
});

function mushroomToggle(element) {
  element.toggleClass("mushroom");
}

function angryMushroomToggle(element) {
  element.toggleClass("angry-mushroom");
}

$(".start").on("click", () => {
  let shuffledArray = shuffle(circles);
  for (let i = 0; i < 10000; i++) {
    let circleDiv = $(`.${shuffledArray[i]}`);
    setTimeout(() => mushroomToggle(circleDiv), i * 2000 + 2000);
    setTimeout(() => mushroomToggle(circleDiv), i * 3000 + 100);
  }
});

$(".start").on("click", () => {
  $(".on-load")[0].pause();
  let shuffledArray = shuffle(circles);
  for (let i = 0; i < shuffledArray.length; i++) {
    let circleDiv = $(`.${shuffledArray[i]}`);
    setTimeout(() => angryMushroomToggle(circleDiv), i * 5000 + 5000);
    setTimeout(() => angryMushroomToggle(circleDiv), i * 3000 + 3000);
  }
});

$(".start").on("click", () => {
  $(".container").removeClass("hidden");
  $(".game-begin").attr("class", "hidden");
});

function scoreKeeper(number) {
  $(".score").text(number);
  $(".lives").text(lives);
}

function checkWinner() {
  if (lives === 0) {
    $(".outcome").text("You lose");
    $(".container").attr("class", "hidden");
    $(".lose")[0].play();
  } else if (lives > 0 && score === 10) {
    $(".outcome").text("You Win!");
    $(".container").attr("class", "hidden");
    $(".win")[0].play();
  }
}
