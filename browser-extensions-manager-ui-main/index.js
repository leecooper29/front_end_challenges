function changeTheme() {
      // reference to each element on the page that changes color on the theme switch
      const icon = document.querySelector('.theme-switcher');
      const headerel = document.querySelector('header');
      const bodyel = document.getElementById('body');
      const griditems = document.querySelectorAll('.grid-item'); 
      const title = document.querySelector('h1');
      const item1 = document.querySelector('.selection-item-1');
      const item2 = document.querySelector('.selection-item-2');
      const item3 = document.querySelector('.selection-item-3');
      
      const isDark = document.body.classList.toggle('darktheme');
      // Toggle class on body
      
      if (isDark) {
          // Apply dark theme styles
          icon.src = './assets/images/icon-moon.svg';
  
          headerel.style.backgroundColor = "hsl(226, 11%, 37%)";
          bodyel.style.backgroundColor = 'hsl(227, 75%, 14%)';
          title.style.color = "white";
          griditems.forEach(item => {
              item.style.backgroundColor = "hsl(226, 11%, 37%)";
              item.style.color = "white";     
          });
          [item1, item2, item3].forEach(item => {
              if (item) {
                  item.style.backgroundColor = "hsl(226, 11%, 37%)";
                  item.style.color = "white";
              }
          });
      } else {
          // Apply light theme styles
          icon.src = './assets/images/icon-sun.svg';
  
          headerel.style.backgroundColor = "";
          bodyel.style.backgroundColor = '';
          title.style.color = "";
          griditems.forEach(item => {
              item.style.backgroundColor = "";
              item.style.color = "";     
          });
          [item1, item2, item3].forEach(item => {
              if (item) {
                  item.style.backgroundColor = "";
                  item.style.color = "";
              }
          });
      }
  }

// show all, active, and inactive elements on the page (these are the grid items)

function removeItem(){
      const griditems = document.querySelectorAll('.grid-item'); 

}
  