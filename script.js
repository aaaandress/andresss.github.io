document.addEventListener('DOMContentLoaded', () => {

  // ---- Transición al navegar entre páginas ----
  document.body.classList.add('page-enter');

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const isInternal = !href.startsWith('http') && !href.startsWith('mailto:') && href.endsWith('.html');
    if (!isInternal) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(() => { window.location.href = href; }, 320);
    });
  });

  // ---- Paneo vertical lento de la Imagen 1 (Talleres y Proyectos) ----
  document.querySelectorAll('.pan-frame').forEach(frame => {
    const img = frame.querySelector('img');
    if (!img) return;
    const computePan = () => {
      const frameH = frame.clientHeight;
      const imgH = img.clientHeight;
      const distance = Math.max(0, imgH - frameH);
      img.style.setProperty('--pan-distance', distance + 'px');
      // velocidad constante y muy lenta (~15 px por segundo)
      img.style.animationDuration = Math.max(14, distance / 15) + 's';
    };
    if (img.complete) computePan();
    else img.addEventListener('load', computePan);
    window.addEventListener('resize', computePan);
  });

});
