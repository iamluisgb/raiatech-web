// Comportamiento compartido de raiatech.com.
// 1. Botón de tema en la cabecera: claro/oscuro. Sigue al sistema hasta que eliges;
//    la elección se guarda en localStorage («tema»). El <head> de cada página fija
//    data-theme antes de pintar para que no parpadee.
// 2. Firma del pie: el ramiforme se dibuja la primera vez que se ve.
(function () {
  var raiz = document.documentElement, clave = 'tema';
  var sistema = matchMedia('(prefers-color-scheme: light)');
  function guardado() { try { return localStorage.getItem(clave); } catch (e) { return null; } }
  function aplicar(t) { raiz.dataset.theme = t; }
  if (!raiz.dataset.theme) aplicar(guardado() || (sistema.matches ? 'light' : 'dark'));
  sistema.addEventListener('change', function (e) { if (!guardado()) aplicar(e.matches ? 'light' : 'dark'); });

  var nav = document.querySelector('body>header nav') || document.querySelector('body>header .wrap');
  if (nav) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tema';
    b.innerHTML = '<svg class="sol" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
      '<svg class="luna" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
    function etiqueta() { b.setAttribute('aria-label', raiz.dataset.theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'); }
    etiqueta();
    b.addEventListener('click', function () {
      var t = raiz.dataset.theme === 'light' ? 'dark' : 'light';
      aplicar(t); etiqueta();
      try { localStorage.setItem(clave, t); } catch (e) {}
    });
    new MutationObserver(etiqueta).observe(raiz, { attributes: true, attributeFilter: ['data-theme'] });
    nav.appendChild(b);
  }

  var firma = document.querySelector('body>footer svg.firma');
  if (firma && firma.querySelector('path') && !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var p = firma.querySelector('path');
    firma.style.setProperty('--largo', Math.ceil(p.getTotalLength()));
    raiz.classList.add('anima');
    var io = new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) { firma.classList.add('visto'); io.disconnect(); }
    }, { threshold: 0.6 });
    io.observe(firma);
  }
})();
