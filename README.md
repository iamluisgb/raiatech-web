# raiatech-web

Web de Raiatech (raiatech.com): consultoría técnica e IA. Estática, sin build.

```
index.html              portada: servicios, proceso, pruebas y contacto
assets/raiatech.css     design system compartido (tokens y componentes); reglas en AGENTS.md
patterns.html           muestra de componentes (noindex)
auditoria-ejemplo.html  informe real de luisgonzalezbernal.com, generado en auditorias-web (noindex)
aviso-legal.html, privacidad.html, terminos.html
webs/                   kit para negocios locales: sin enlazar desde la portada y noindex (origen: experimentos/raiatech-webs)
CNAME                   dominio para GitHub Pages
```

Reglas: no nombrar clientes ni publicar fichas de auditoría de terceros sin permiso.

En local: `python3 -m http.server 8000`
