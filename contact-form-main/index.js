function IsSubmitted(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.inputfield');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  let isFormValid = true;

  inputs.forEach((input) => {
    const error = document.querySelector(`.error-message[data-error-for="${input.id}"]`);
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      error.classList.add("isError");
      isFormValid = false;
    } else {
      input.style.borderColor = "";
      error.classList.remove("isError");
    }
  });

  checkboxes.forEach((checkbox) => {
    const error = document.querySelector(`.error-message[data-error-for="${checkbox.id}"]`);
    if (!checkbox.checked) {
      error.classList.add("isError");
      isFormValid = false;
    } else {
      error.classList.remove("isError");
    }
  });

  if (isFormValid) {
    alert("Form submitted successfully!");
      // open the sucess modal
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", IsSubmitted);
});