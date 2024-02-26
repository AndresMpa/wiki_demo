# Demo, nueva Wiki para FLISoL

Este proyecto es una demo que usa [Next.js](https://nextjs.org/) v14.0.1; creado desde [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) como reemplazo a la actual wiki de [FLISoL](https://flisol.info/) intentando satisfacer la mayoría de [requerimientos](https://flisol.info/CT/RelevoGeneracional2023) que esta tiene.

## Para desarrolladores

Para iniciar el servidor en desarrollo, se puede usar cualquiera de los siguientes.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Esto abrirá el servidor en [http://localhost:3000](http://localhost:3000) en el navegador principal.

### Notas para desarrolladores:

La arquitectura propuesta fue la siguiente:

![Architecture](./.doc/uml/arch.svg)

- Este proyecto rederiza [Markdown](https://daringfireball.net/projects/markdown/syntax) a HTML, para esto se usa [remark](https://github.com/remarkjs/remark?tab=readme-ov-file#example-turning-markdown-into-html), un paquete de node que se encarga justamente de hacer eso. Para usuario nuevos algunas refencias utiles son [esta guía](https://commonmark.org/help/)
- Para renderizar mapas se usan 3 dependencias [OpenStreetMap](https://www.openstreetmap.org/) como provedor de los mapas, [Leaflet](https://leafletjs.com/) para renderizar los mapas y [React Leaflet](https://react-leaflet.js.org/) para renderizar esos mapas como componentes de React.
- La estrategia de login se implementó usando [Passport](https://www.passportjs.org/)
- El proceso de agregado de images que no provienen de algún link exterior pasa por [reducir el tamaño](https://www.iloveimg.com/resize-image#resize-options,percentage) de las mismas y luego [reducir su peso](https://tinypng.com/); esto así para mejorar la carga de las misma en la pagina
- El proveedor de iconos natural viene siendo el de [ShadcnUI](https://ui.shadcn.com/docs/installation/manual) (Vease el apartado "Add icon library"), además de este se agrega el paquete de [React Icons](https://react-icons.github.io/react-icons/), concretamente para usar Hero Icons 2 y Font Awesome 6 para los iconos más generales además de los de iconos de redes sociales, respectivamente

#### Sobre los tipos de paginas

Next permite renderizar paginas en el client-side (CSR) y en el servidor server-site (SSR); ambos tipos de renderizado son usado, a continuación se dividen las paginas usando el nombre en el diseño de la carpeta [design](./.design/README.md) para las paginas CSR y SSR, respectivamente:

> Nota: Tambien se permite [Incremental Site Generation](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) (ISG) pero no sería necesario en una primera instancia

##### CSR - SPA-like

- [Admin](./app/pages/admin/): Admin
- [Crear FLISoL](./app/pages/create/): Add, Confirm, NotOnList, Create
- [Material grafico](./app/pages/content/): [type]
- [Historico - Todos los FLISoL](./app/pages/history/): All, Countries, Entries
- [Registro](./app/pages/register/): Register
- [Assist](./app/pages/assist/): Find

##### SSR - Static pages

- [Assist](./app/pages/assist/): Entry
- [FAQ](./app/pages/faq): faq
- [Main](./app/pages/index.tsx)

#### Oportunidades de mejora

- Mejorar el [buscador](https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210)
- Un mejor [editor de markdown](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9) sería bueno

## Como hacer deploy

## Referencia

- [Integrating Next.js with Leaflet.js + Mapbox](https://dev.to/tsaxena4k/integrating-next-js-with-leaflet-js-mapbox-1351)
- [Un ejemplo de React Leaflet con Mapbox](https://codesandbox.io/p/devbox/leafletjs-with-nextjs-m7qnb?file=%2Fpackage.json)
- [React Leaflet - Setup](https://react-leaflet.js.org/docs/start-setup/)
- [Render Markdown](https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown)
- [Markdown and MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- [React Markdown editor](https://uiwjs.github.io/react-md-editor)
- [Ejemplo](https://github.com/uiwjs/react-md-editor)
- [Markdown editor](https://dev.to/acidop/i-built-an-markdown-editor-using-nextjs-and-tailwindcss-46bg)