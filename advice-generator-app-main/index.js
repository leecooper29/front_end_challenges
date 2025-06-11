const dice = document.getElementById("dice-cont");
const advice = document.getElementById("advice");

dice.addEventListener("click", function () {
  console.log("clicked");
});

function generate() {
  console.log("clicked");
  let val = Math.trunc(Math.random() * 6);
  advice.innerText = quotes[val];
}

const quotes = [
  "'Every time you fall down. you must get back up.'",
  "'The more you learn, the more you earn.'",
  "'You can beat death, but you can beat death and life.'",
  "'The meaning of life is to enjoy the passage of time.'",
  "'It is better to follow your mind rather than you heart.'",
  "'Quality is almost always better than.'",
];
