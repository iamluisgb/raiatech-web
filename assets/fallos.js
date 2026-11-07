// Simulación de la portada: el mismo fallo en un sistema sin preparar y en uno preparado.
(function () {
  var caja = document.getElementById('fallos');
  if (!caja) return;
  var FALLOS = [
    { id: 'datos', boton: 'Se inventa un dato',
      demo: ['El asistente dice que el pedido 4512 salió ayer.', 'Nadie lo comprueba.', 'El cliente espera un paquete que no llega.'], demoFin: 'Te enteras por el cliente', demoCifra: 'Lo detectas: 3 días después',
      prod: ['Antes de responder, consulta el pedido en tu sistema: no ha salido.', 'No envía la respuesta y avisa a una persona.', 'El caso se añade a las pruebas para que no vuelva.'], prodFin: 'El cliente no llega a verlo', prodCifra: 'Lo detectas: en segundos',
      enlace: 'Esto lo reviso en la auditoría (área: sistemas con IA)', href: '#servicios' },
    { id: 'caida', boton: 'Se cae un servicio',
      demo: ['La pasarela de pago deja de responder.', 'La web se queda cargando y el cliente abandona.', 'Nadie sabe qué ha pasado.'], demoFin: 'Te enteras por una queja', demoCifra: 'Lo detectas: horas después',
      prod: ['A los 5 segundos deja de esperar.', 'Lo vuelve a intentar y, si no responde, usa otro proveedor.', 'Te llega una alerta con la causa.'], prodFin: 'Te enteras tú primero', prodCifra: 'Lo detectas: en 1 minuto',
      enlace: 'Esto lo reviso en la auditoría (área: fiabilidad)', href: '#servicios' },
    { id: 'coste', boton: 'Se dispara el coste',
      demo: ['Un agente entra en un bucle de madrugada.', 'Nada lo frena y sigue llamando al modelo.', 'El gasto sube sin que nadie lo vea.'], demoFin: 'Te enteras por la factura', demoCifra: 'Factura: 2.300 €',
      prod: ['Cada tarea tiene un tope de pasos y de gasto.', 'El bucle se corta al llegar al tope.', 'La traza enseña dónde se atascó.'], prodFin: 'El gasto tiene un límite', prodCifra: 'Tope: 20 €',
      enlace: 'Esto lo reviso en la auditoría (área: rendimiento y costes)', href: '#servicios' },
    { id: 'despliegue', boton: 'Un despliegue rompe algo',
      demo: ['Se sube una versión nueva el viernes por la tarde.', 'Falla el pago y nadie sabe qué ha cambiado.', 'Volver atrás hay que hacerlo a mano.'], demoFin: 'Una tarde sin ventas', demoCifra: 'Caído: 3 horas, para todos',
      prod: ['La versión nueva llega primero al 5 % de los usuarios.', 'Suben los errores y salta la alerta.', 'Vuelve sola a la versión anterior.'], prodFin: 'El 95 % ni lo nota', prodCifra: 'Caído: 2 minutos, para pocos',
      enlace: 'Esto lo monto por jornadas, en tu equipo', href: '#servicios' }
  ];
  var quieto = matchMedia('(prefers-reduced-motion: reduce)').matches, temporizadores = [];
  var botones = caja.querySelector('.f-botones'), dem = document.getElementById('f-demo'), pro = document.getElementById('f-prod');

  function columna(el, pasos, fin, cifra, enlace, href) {
    var ol = el.querySelector('ol'), res = el.querySelector('.f-fin'), num = el.querySelector('.f-cifra'), a = (enlace && caja.querySelector('.f-enlace'));
    ol.innerHTML = pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('');
    res.textContent = fin; num.textContent = cifra;
    var items = [].slice.call(ol.children).concat(res, num);
    if (a) { a.textContent = enlace + ' →'; a.href = href; items.push(a); }
    items.forEach(function (it, i) {
      if (quieto) { it.classList.add('on'); return; }
      it.classList.remove('on');
      temporizadores.push(setTimeout(function () { it.classList.add('on'); }, 150 + i * 420));
    });
  }
  function elige(f) {
    temporizadores.forEach(clearTimeout); temporizadores = [];
    [].forEach.call(botones.children, function (b) { b.setAttribute('aria-pressed', b.dataset.id === f.id ? 'true' : 'false'); });
    columna(dem, f.demo, f.demoFin, f.demoCifra); columna(pro, f.prod, f.prodFin, f.prodCifra, f.enlace, f.href);
  }
  FALLOS.forEach(function (f) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = f.boton; b.dataset.id = f.id;
    b.addEventListener('click', function () { elige(f); });
    botones.appendChild(b);
  });
  elige(FALLOS[0]);
})();
