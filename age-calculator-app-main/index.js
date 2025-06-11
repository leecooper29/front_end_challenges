const output_year = document.getElementById("output_year");
const output_month = document.getElementById("output_month");
const output_day = document.getElementById("output_day");
const submit_btn = document.querySelector(".submit-btn");

let isValid = false;
const day_error = document.getElementById("day-error");
const month_error = document.getElementById("month-error");
const year_error = document.getElementById("year-error");
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

submit_btn.addEventListener("click", CalculateDate);
input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid day";
    input_day.style.borderColor = "hsl(0, 100%, 67%)";
    day_error.style.color = " hsl(0, 100%, 67%)";

    // change the day month an year text to red when it is not valid
    //     title.classList.add("title-error");
    isValid = false;
    return;
    // allows for the function to end
  } else {
    isValid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid month";
    input_month.style.borderColor = "hsl(0, 100%, 67%)";
    month_error.style.color = " hsl(0, 100%, 67%)";
    isValid = false;
    return;
    // allows for the function to end
  } else {
    isValid = true;
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2024) {
    // year border is not changin when greater that 2024, the month is
    error_year.textContent = "Must be in the past";
    input_year.style.borderColor = "hsl(0, 100%, 67%)";
    year_error.style.color = " hsl(0, 100%, 67%)";
    isValid = false;
    return;
    // allows for the function to end
  } else {
    isValid = true;
    error_year.textContent = "";
  }

  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }

  if (+input_day > 30 && input_month) {
    isValid = false;
  } else {
    isValid = true;
  }

  // if 4 of the 12 months are greater that 30 days, output is (this is not a valid date below day input)
  // january // 31 0days
  // february // 31 days
  // march // 31 days
  // april // 30 days
  // may // 31 days
  // june // 20 days
  // july // 31 days
  // august // 31 days
  // september // 30 days
  // november // 30 days
  // december // 31 days
});

function CalculateDate() {
  if (isValid) {
    //     const birthday = new Date(
    //       input_year.value,
    //       input_month.value - 1,
    //       input_day.value
    //     );
    //     const today = new Date();
    //     const elapsed = today - birthday;
    //     const seconds = elapsed / 1000;
    //     const hours = seconds / 3600;
    //     const days = hours / 24;
    //     if (days > 30) {
    //     }
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    //
    // date object begins at 1970
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    //displaying everything
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert("error invalid inputs");
    day_error.style.color = " hsl(0, 100%, 67%)";
    month_error.style.color = " hsl(0, 100%, 67%)";
    year_error.style.color = " hsl(0, 100%, 67%)";
    input_year.style.borderColor = " hsl(0, 100%, 67%)";
    input_month.style.borderColor = " hsl(0, 100%, 67%)";
    input_day.style.borderColor = " hsl(0, 100%, 67%)";
    error_day.textContent = "This field is required";
    error_month.textContent = "This field is required";
    error_year.textContent = "This field is required";
  }
}
