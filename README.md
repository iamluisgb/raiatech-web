# raiatech-web

Landing de Raiatech — raiatech.com

Marca paraguas desde la que se publican las PWAs: [Bookreader](https://github.com/iamluisgb/bookreader) y [Areté](https://github.com/iamluisgb/arete).

## Cómo funciona

Una página estática, un solo fichero. Sin build, sin dependencias que instalar.

```
index.html   la landing entera (CSS inline)
CNAME        dominio para GitHub Pages
```

Para verla en local:

```bash
python3 -m http.server 8000
```

## Despliegue

GitHub Pages sirve la rama `main` desde la raíz. Un push a `main` publica.

### DNS

El dominio está en Namecheap. Registros necesarios:

| Tipo  | Host | Valor             |
|-------|------|-------------------|
| A     | @    | 185.199.108.153   |
| A     | @    | 185.199.109.153   |
| A     | @    | 185.199.110.153   |
| A     | @    | 185.199.111.153   |
| CNAME | www  | iamluisgb.github.io |

## Pendiente

- Páginas legales: `/terminos` y `/privacidad` (enlazadas en el pie, aún sin escribir).
- Subdominios de las apps: `bookreader.raiatech.com` y `arete.raiatech.com`.
- Reactivar el enlace de reembolsos cuando haya cobros por Polar.
