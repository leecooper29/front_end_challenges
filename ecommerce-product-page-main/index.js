// cart functionality, the difficult part of this project
window.onload = function () {
      var modal = document.getElementById("myModal");
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];
    
      btn.onclick = function () {
        modal.style.display = "block";
        console.log('modal opened');
      }
    
      span.onclick = function () {
        modal.style.display = "none";
        console.log('modal closed')
      }
    
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

function add() {
      const number = document.getElementById('num');
      // innertext or value of the id
      let value = parseInt(number.innerText);
      // increase by one
      value++;
      number.innerText = value;
      console.log('Now increasing number:', value);
}
  
function remove() {
      const number = document.getElementById('num');
      let value = parseInt(number.innerText);
      if (value > 0) {
        value--;
        number.innerText = value;
        console.log('Now decreasing number:', value);
      }
}
function addToCart(){
      console.log('display the cart information')
}

// when the cart is hovered over it should display the cart without any content
function showMenu(){
      const cart = document.getElementById('cart')
      console.log('display the cart data:', cart)
}

const showButton = document.getElementById('showDialog')
const dialog = document.getElementById('dialog')

showButton.addEventListener('click', () =>{
      // dialog.showModal()
})