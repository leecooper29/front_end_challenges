document.addEventListener("DOMContentLoaded", function () {
  function calculateTip() {
    // calculate tip amount not defined
    // reset Tip Amount not defined
    const btn1 = document.getElementById("percent1");
    const btn2 = document.getElementById("percent2");
    const btn3 = document.getElementById("percent3");
    const btn4 = document.getElementById("percent4");
    const btn5 = document.getElementById("percent5");

    function calculateAndDisplayTip(percentage) {
      let billAmnt = parseFloat(document.getElementById("input").value);

      let numPeople = parseInt(document.getElementById("num").value);

      // validation
      if (isNaN(billAmnt) || isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter valid bill amount and number of people.");
        return;
      }

      let tipAmount = (billAmnt * (percentage / 100)) / numPeople;
      let totalAmount = (billAmnt + tipAmount * numPeople).toFixed(2);
      let tipPerPerson = tipAmount.toFixed(2);

      // set the values of each html element
      document.getElementById("tipAmount").innerText = `$${tipPerPerson}`;
      document.getElementById("totalAmount").innerText = `$${totalAmount}`;
    }
    // reset the form ant there values
    function resetTipAmount() {
      document.getElementById("reset").addEventListener("click", function () {
        document.getElementById("tipAmount").innerText = "$0.00";
        document.getElementById("totalAmount").innerText = "$0.00";
        console.log("Tip amount reset");
      });
    }

    // calculate and display the value of each tip button
    btn1.addEventListener("click", function () {
      calculateAndDisplayTip(5);
    });

    btn2.addEventListener("click", function () {
      calculateAndDisplayTip(10);
    });

    btn3.addEventListener("click", function () {
      calculateAndDisplayTip(15);
    });

    btn4.addEventListener("click", function () {
      calculateAndDisplayTip(25);
    });

    btn5.addEventListener("click", function () {
      calculateAndDisplayTip(50);
    });

    resetTipAmount();
  }

  calculateTip();
});
