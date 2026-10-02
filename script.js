document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.carousel-word');
  const arrow = document.getElementById('homeCarouselArrow');
  if (!words.length || !arrow) return;

  let index = 0;
  words[0].classList.add('active');

  arrow.addEventListener('click', () => {
    words[index].classList.remove('active');
    index = (index + 1) % words.length;
    words[index].classList.add('active');
  });
});
