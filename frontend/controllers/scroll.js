export function whenScrolled() {

document.addEventListener('scroll', function() {
  const header = document.querySelector('.header-container');
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

}