# Loopa Technology — Sitio Web

Consultora de datos e IA de alta gama para empresas en LatAm. Sitio construido con React 19 + Vite + TypeScript + Tailwind CSS 4.

## Stack

- React Router para rutas reales (`/servicios`, `/blog/:id`, `/casos/:id`, etc.)
- `react-i18next` para ES/EN (estructura preparada, contenido pendiente de adaptación cultural)
- `animejs` + `motion` para animaciones e interacciones de scroll

## Correr en local

**Requisitos:** Node.js

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Genera `public/sitemap.xml` automáticamente antes del build de Vite.

## Variables de entorno

Copiá `.env.example` a `.env` y completá según necesites:

- `VITE_CALENDLY_URL` — link de Calendly para agendar demos
- `VITE_PLATFORM_URL` — URL de la plataforma Loopa (login Facebook) embebida vía iframe
- `VITE_MERCATELY_WIDGET_ID` — ID del widget de chatbot Mercately
- `VITE_GA4_ID`, `VITE_GTM_ID`, `VITE_META_PIXEL_ID` — analítica (opcional)
- `VITE_SITE_URL` — dominio usado al generar el sitemap
