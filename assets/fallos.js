// Simulación de la portada: el mismo fallo en una demo y en producción.
(function () {
  var caja = document.getElementById('fallos');
  if (!caja) return;
  var FALLOS = [
    { id: 'datos', boton: 'Se inventa un dato',
      demo: ['Responde con total seguridad.', 'Nadie comprueba la respuesta.', 'El dato falso llega al cliente.'], demoFin: 'Te enteras por el cliente',
      prod: ['Se contrasta con tu fuente: no cuadra.', 'No se envía y pasa a revisión humana.', 'El caso entra en las pruebas para que no vuelva.'], prodFin: 'El cliente no llega a verlo' },
    { id: 'caida', boton: 'Se cae un servicio',
      demo: ['La llamada se queda colgada.', 'El usuario ve un error.', 'Nadie sabe qué ha pasado.'], demoFin: 'Te enteras por una queja',
      prod: ['Reintenta con espera y tiempo límite.', 'Pasa al proveedor alternativo.', 'Llega una alerta con la causa.'], prodFin: 'Te enteras tú primero' },
    { id: 'coste', boton: 'Se dispara el coste',
      demo: ['El agente entra en un bucle.', 'Nada lo frena y sigue llamando al modelo.', 'El gasto sube sin que nadie lo vea.'], demoFin: 'Te enteras por la factura',
      prod: ['Hay un tope de pasos y de gasto por tarea.', 'El bucle se corta al llegar al tope.', 'La traza enseña dónde se atascó.'], prodFin: 'El gasto tiene un límite' },
    { id: 'modelo', boton: 'Cambia el modelo',
      demo: ['El proveedor actualiza su versión.', 'Las respuestas empeoran poco a poco.', 'Nadie sabe desde cuándo.'], demoFin: 'No lo notas durante semanas',
      prod: ['La versión está fijada.', 'Se prueba la nueva con tus casos reales.', 'Solo se cambia si mejora.'], prodFin: 'Decides tú cuándo cambiar' }
  ];
  var quieto = matchMedia('(prefers-reduced-motion: reduce)').matches, temporizadores = [];
  var botones = caja.querySelector('.f-botones'), dem = document.getElementById('f-demo'), pro = document.getElementById('f-prod');

  function columna(el, pasos, fin) {
    var ol = el.querySelector('ol'), res = el.querySelector('.f-fin');
    ol.innerHTML = pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('');
    res.textContent = fin;
    var items = [].slice.call(ol.children).concat(res);
    items.forEach(function (it, i) {
      if (quieto) { it.classList.add('on'); return; }
      it.classList.remove('on');
      temporizadores.push(setTimeout(function () { it.classList.add('on'); }, 150 + i * 420));
    });
  }
  function elige(f) {
    temporizadores.forEach(clearTimeout); temporizadores = [];
    [].forEach.call(botones.children, function (b) { b.setAttribute('aria-pressed', b.dataset.id === f.id ? 'true' : 'false'); });
    columna(dem, f.demo, f.demoFin); columna(pro, f.prod, f.prodFin);
  }
  FALLOS.forEach(function (f) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = f.boton; b.dataset.id = f.id;
    b.addEventListener('click', function () { elige(f); });
    botones.appendChild(b);
  });
  elige(FALLOS[0]);
})();
