// mobile navigation menu 

// only apllies to a 375px screen width
function showMobileNav() {
  const navItems = document.getElementById('nav-item-');
  navItems.classList.toggle('active');  
  const icon = document.getElementById('icon');
  
  // adding and removing files
  if (icon.src.endsWith('icon-close.svg')) {
    icon.src = './images/icon-hamburger.svg'; 
  } else {
    icon.src = './images/icon-close.svg';
    // add close icon when menu is clicked and vice versa
  }
  // display the icon
  console.log("icon:", icon);
  console.log('Toggled mobile menu');
}

showMobileNav();
