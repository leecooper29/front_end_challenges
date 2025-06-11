let updateCount;

function inner() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  let countdownDate = new Date("Feb 01, 2025 17:40:25").getTime();
  let todayDate = new Date().getTime();

  //get milliseconds between now and countdown date
  let distance = countdownDate - todayDate;

  let d = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let dRemainder = Math.abs(Math.floor(distance % (1000 * 60 * 60 * 24)));

  let h = Math.abs(Math.floor(dRemainder / (1000 * 60 * 60)));
  let hRemainder = Math.abs(Math.floor(dRemainder % (1000 * 60 * 60)));

  let m = Math.abs(Math.floor(hRemainder / (1000 * 60)));
  let mRemainder = Math.abs(Math.floor(hRemainder % (1000 * 60)));

  let s = Math.abs(Math.floor(mRemainder / 1000));
  let sRemainder = Math.abs(Math.floor(mRemainder % 1000));

  // display the values
  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}

// initializing the function
updateCount = setInterval(inner, 1000);
