function formValid() {
      const nameValid = isValidName();
      const emailValid = isValidEmail();
      const phoneValid = isValidPhone();
    
      if (nameValid && emailValid && phoneValid) {
        console.log("All fields are valid. Moving to next step.");
      } else {
        console.log("Please fill out all fields correctly.");
      }
}
    
function isValidName() {
      const name = document.getElementById('name');
      const error = document.getElementById('name-error');
    
      if (name.value.trim() === "") {
        name.classList.add('error-message');
        error.classList.remove('hide');
        return false;
      } else {
        name.classList.remove('error-message');
        error.classList.add('hide');
        return true;
      }
}
    
function isValidEmail() {
      const email = document.getElementById('email');
      const error = document.getElementById('email-error');
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (!regex.test(email.value.trim())) {
        email.classList.add('error-message');
        error.classList.remove('hide');
        return false;
      } else {
        email.classList.remove('error-message');
        error.classList.add('hide');
        return true;
      }
}
    
function isValidPhone() {
      const phone = document.getElementById('phone');
      const error = document.getElementById('phone-error');
    
      if (phone.value.trim() === "") {
        phone.classList.add('error-message');
        error.classList.remove('hide');
        return false;
      } else {
        phone.classList.remove('error-message');
        error.classList.add('hide');
        return true;
      }
}

// array of elementsbyid
let referenceContainer = [];
let currentSectionIndex = 0;

function onLoadCalledByOnLoad() {
  // store a reference to each section in an array that is accessible to other functions, 
  // AFTER!!! the document loads
  referenceContainer = [
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3'),
  document.getElementById('step4'),
  document.getElementById('step5')
];
}

function showSection(section_number) {
  currentSectionIndex = section_number - 1;
  console.log(referenceContainer);
  // array.length
  for(let i = 0; i < referenceContainer.length; i++){
    // var index[i]
    const ref = referenceContainer[i];
    // console.log('s: ', ref);
    ref.classList.add('hide');
    // add the hide class, be carful with the css 
  }
  console.log(referenceContainer[currentSectionIndex]);
  referenceContainer[currentSectionIndex].classList.remove('hide');
  // if adding a class, can also remove
}

// when the checkbox is selected the month price changes to yearly
function selected(){
  const rectangle = document.querySelector('service-flex');
  rectangle.classList.add('border');
  // console.log('item selected');
}

// back form step one 2-1
function goBack() {
  const stepTwoSection = document.querySelector('.steptwo');
  stepTwoSection.classList.add('hide');
  // add the class and remove it for each step
  const stepOneForm = document.querySelector('.main-form');
  stepOneForm.classList.remove('hide');
}

// back from step two 3-2
function goBackToStepTwo() {
  const stepThreeSection = document.querySelector('.stepthree');
  stepThreeSection.classList.add('hide');

  const stepTwoForm = document.querySelector('.steptwo');
  stepTwoForm.classList.remove('hide');
}

// backfromstep three 4-3
function goBackToStepThree() {
  const stepFour = document.querySelector('.stepfour');
  stepFour.classList.add('hide');

  const stepThree = document.querySelector('.stepthree');
  stepThree.classList.remove('hide');
}

function showYearlyPrice(isShown){
  const year1 = document.getElementById('year1');
  const year2 = document.getElementById('year2');
  const year3 = document.getElementById('year3');
  const action = isShown ? 'show' : 'hide';
  const unaction = action === 'show' ? 'hide' : 'show';
  // console.log('w', action);

  year1.classList.remove(unaction);
  year2.classList.remove(unaction);
  year3.classList.remove(unaction);

  year1.classList.add(action);
  year2.classList.add(action);
  year3.classList.add(action);

  // monthly price values must be altered
  const price1 = document.getElementById('yearprice1')
  const price2 = document.getElementById('yearprice2')
  const price3 = document.getElementById('yearprice3')
  
  // not sure of alternative to changing text
  price1.innerHtml = "$90/yr";
  price2.innerHtml = "$120/yr";
  price3.innerHtml = "$150/yr";
}

// altering the text for values in step5
function showYearPrice(){
  const priceValue = document.querySelector('price').
  console.log('step4 year price')
}