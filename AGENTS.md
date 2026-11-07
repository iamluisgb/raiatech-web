# AGENTS.md · raiatech-web

Web estática de Raiatech (raiatech.com), sin build. Despliega GitHub Pages desde `main`.

## Design system

- **Una sola fuente de estilo: `assets/raiatech.css`.** Tokens de color (oscuro por defecto, claro con `prefers-color-scheme:light`), base, cabecera, logo, pie, botones, tarjetas, notas por área (`.score`), estados (`.estado`) y páginas de texto (`.doc`). Toda página nueva la carga; en el `<style>` de cada página solo va lo exclusivo de esa página.
- **Nunca colores sueltos** en las páginas: usa los tokens (`var(--acento)`, `var(--on-surface)`…). Si hace falta un color nuevo, se añade como token en los dos temas.
- **`patterns.html`** (noindex) enseña todos los componentes. Tras tocar `raiatech.css`, ábrela en claro y en oscuro.
- La cabecera y el pie compartidos se aplican a `body>header` y `body>footer`; un `header` dentro de otro bloque (como el del informe) no los hereda.

## Paleta «Earth» (materiales del abrigo de Puerto Roque)

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--bg` | `#fbfaf6` | `#252722` (carbón) | Fondo |
| `--surface` / `--surface-2` | `#ffffff` / `#f1ece2` | `#2e302b` / `#383a34` | Tarjetas / superficies secundarias |
| `--on-bg` / `--on-surface` | `#252722` / `#6b6459` | `#f2efe7` (caliza) / `#d6c4a9` (arenisca) | Texto / texto secundario |
| `--acento` | `#a3432b` (hematita) | `#dc8b58` | Texto de acento, enlaces, etiquetas |
| `--electric` / `--on-electric` | `#a3432b` / blanco | `#d17a43` / carbón | Botón principal |
| `--ocre` | `#a3432b` | `#d17a43` | Logo |
| `--bien` / `--mejorable` / `--malo` | `#00744a` / `#8a5a12` / `#b3123a` | `#3ddc97` / `#e3b25f` / `#ff7a9a` | **Solo estados**, nunca decoración |

Reglas:
- El ocre `#d17a43` **nunca como texto en claro** (contraste 2,8). La hematita **nunca sobre carbón** (2,4).
- Texto normal con contraste ≥ 4,5:1 en los dos temas; compruébalo al añadir combinaciones.
- Verde y carmín solo significan «bien» y «mal», siempre con su etiqueta de texto.
- Sin barras de acento laterales (`border-left` de color) para marcar estado. Sin retícula de fondo.
- Tipografía: Space Grotesk (titulares), Inter (texto), JetBrains Mono (datos y etiquetas).
- Logo: ramiforme del panel 4 de Puerto Roque (`images/raiatech-simbolo.svg`, también inline en la cabecera) + «raia**tech**».

## Contenido

- No nombrar clientes ni publicar fichas de auditoría de terceros sin permiso. Sin precios publicados ni mención a Fundae hasta que Luis lo decida.
- La voz y las fichas de contenido viven en `projects/content-engine` (`brands/raiatech.md`).
