document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const pageFrame = document.getElementById('pageFrame');

  if (hamburger && pageFrame){
    hamburger.addEventListener('click', () => {
      const isOpen = pageFrame.classList.toggle('menu-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }
});
