 // mobile navigation menu 
function showMobileNav() {
  const navItems = document.getElementById('nav-item-');
  navItems.classList.toggle('active');  

  const icon = document.getElementById('icon');
    
  // add close icon when menu is clicked and vice versa
  if (icon.src.endsWith('icon-close.svg')) {
    icon.src = './images/icon-hamburger.svg'; 
  } else {
    icon.src = './images/icon-close.svg';
  }

  console.log("icon:", icon);
  console.log('Toggled mobile menu');
}

showMobileNav();
