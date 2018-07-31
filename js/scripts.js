const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// let shuffledArray = shuffle(circles);

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
lives = 5;
$(".circle").on("click", event => {
  if ($(event.target).hasClass("pop-up") === true) {
    score++;
    scoreKeeper(score);
    $(event.target).removeClass("pop-up");
    checkWinner();
  } else if ($(event.target).hasClass("angry-mushroom") === true) {
    lives--;
    scoreKeeper(score);
    $(event.target).removeClass("angry-mushroom");
    checkWinner();
  }
});

function popUpToggle(element) {
  element.toggleClass("pop-up");
}

function angryMushroomToggle(element) {
  element.toggleClass("angry-mushroom");
}

$(".start").on("click", () => {
  let shuffledArray = shuffle(circles);
  for (let i = 0; i < 10000; i++) {
    let circleDiv = $(`.${shuffledArray[i]}`);
    setTimeout(() => popUpToggle(circleDiv), i * 2000 + 2000);
    setTimeout(() => popUpToggle(circleDiv), i * 3000 + 100);
  }
});

$(".start").on("click", () => {
  let shuffledArray = shuffle(circles);
  for (let i = 0; i < shuffledArray.length; i++) {
    let circleDiv = $(`.${shuffledArray[i]}`);
    setTimeout(() => angryMushroomToggle(circleDiv), i * 5000 + 5000);
    setTimeout(() => angryMushroomToggle(circleDiv), i * 3000 + 3000);
  }
});

$(".start").on("click", () => {
  $(".container").removeClass("hidden");
  $(".start").attr("class", "hidden");
});

function scoreKeeper(number) {
  $(".score").text(number);
  $(".lives").text(lives);
}

function checkWinner() {
  if (lives === 0) {
    alert("You Loose");
    $(".container").attr("class", "hidden");
  } else if (lives > 0 && score === 10) {
    alert("You Win!");
    $(".container").attr("class", "hidden");
  }
}

// $(".music").on("click", playMusic);

function playMusic() {
  console.log("hello");
  $(".on-load")[0].play();
}

// $("body").load(function() {
//   let onLoad = $(".on-load")[0];
//   $(onLoad).play();
// });
$("document").ready(playMusic);
// document.querySelector("body").addEventListener("load", playMusic());
