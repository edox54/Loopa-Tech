# Migración Vercel → GoDaddy (loopa.technology)

## Situación actual (revisado 2026-10-26)

| Qué | Estado |
|---|---|
| loopa.technology | WordPress en **GoDaddy Managed WordPress** (IP 160.153.0.157, CDN propio de GoDaddy) |
| DNS | GoDaddy (ns21/ns22.domaincontrol.com) |
| Correo | **Microsoft 365** (MX `loopa-technology.mail.protection.outlook.com`). No se toca. |
| SPF | `v=spf1 include:secureserver.net -all`: **no incluye Microsoft 365** (ver "Antes") |
| Sitio nuevo | Vercel (loopa-tech.vercel.app), 40 páginas estáticas ES/EN + 404 |
| Search Console | loopa.technology **no** está en nuestra cuenta |

URLs del WordPress que hay que cuidar (sitemap `wp-sitemap.xml`, cada una también con versión `/en/...`):

- `/`, `/blog/`, `/privacy-policy/`, `/terms-and-conditions/`
- 4 artículos: `/2023/07/desarrollar-la-estructura-tecnologica-...`, `/2023/07/inteligencia-artificial-competitiva-...`, `/2023/07/soporte-para-los-equipos-de-data-science/`, `/2026/04/el-anaquel-vacio-le-cuesta-mas-de-lo-que-crees/`
- `/category/*`, `/tag/*`, `/author/anita-sancho/`, `/feed/`, `wp-*`

## Decisiones pendientes con la cliente

1. **Tipo de plan GoDaddy.** El plan actual es Managed WordPress y no sirve bien un sitio estático (no hay `.htaccess` propio). Se necesita **Web Hosting (cPanel, Linux)**. La alternativa es quedarse en Vercel y solo apuntar el DNS. Para un sitio comercial Vercel exige el plan Pro (USD 20/mes), porque Hobby es solo para uso personal.
2. **Los 4 artículos del WordPress.** Hoy redirigen a `/blog`. Si se migran (sobre todo "El anaquel vacío…", de abril 2026), cada URL vieja se redirige a su artículo nuevo.
3. **Casos y DataLab.** Tienen clientes y simuladores ficticios. Están en `noindex` y sin enlaces en el menú, pero siguen abiertos por URL. Recomendación: quitarlos antes del lanzamiento.
4. **Nosotros.** El texto es genérico (DAMA, "visión 2029") y no coincide con el deck. El equipo inventado ya se eliminó.

## Antes (1–3 días)

- [ ] Backup completo del WordPress (archivos + base de datos) desde el panel de GoDaddy. Guardarlo fuera de GoDaddy.
- [ ] Contratar o confirmar el hosting cPanel y activar el SSL (AutoSSL) para `loopa.technology` y `www`.
- [ ] Bajar el TTL del registro A `@` y del CNAME `www` a 600 s.
- [ ] La cliente agrega `loopa.technology` en Search Console como **propiedad de dominio** (TXT en DNS) y nos da acceso.
- [ ] SPF: cambiarlo a `v=spf1 include:spf.protection.outlook.com include:secureserver.net -all`. Sin esto los correos de Microsoft 365 pueden caer en spam. Es independiente de la migración.
- [ ] Si hay IDs reales de GA4, GTM, Meta Pixel o Mercately, ponerlos en `.env.local`: se incrustan al compilar.

## Día de la migración

1. `npm run build:godaddy` genera `loopa-godaddy.zip`. Trae el dominio `https://loopa.technology` en canonical, hreflang, sitemap, robots y llms.txt, más el `.htaccess`.
2. cPanel → Administrador de archivos → `public_html`: subir el zip y extraerlo. Debe quedar `public_html/index.html` y `public_html/.htaccess`; activar "mostrar archivos ocultos" para verlo.
3. DNS en GoDaddy:
   - `A @` → IP del hosting cPanel.
   - `CNAME www` → `@`.
   - **No tocar** MX, TXT (SPF, `NETORGFT…` de Microsoft) ni `autodiscover`.
4. Esperar la propagación (minutos con TTL 600) y correr la verificación de abajo.
5. Search Console: enviar `https://loopa.technology/sitemap.xml` e inspeccionar la home y `/en`.
6. Vercel: cuando el dominio ya responda desde GoDaddy, eliminar el proyecto o redirigir `loopa-tech.vercel.app` a `loopa.technology`, para no tener contenido duplicado.

## Verificación (ya probada con Apache local sobre el build)

| URL | Esperado |
|---|---|
| `http://loopa.technology/x`, `https://www.loopa.technology/x` | 301 → `https://loopa.technology/x` (un solo salto) |
| `/`, `/en`, `/servicios/...`, `/blog`, `/contacto`, `/en/privacidad`, `/en/terminos` | 200 |
| `/blog/`, `/en/` (barra final) | 301 → sin barra |
| `/terminos.html`, `/index.html` | 301 → URL limpia |
| `/terms-and-conditions/`, `/privacy-policy/` (+ `/en/...`) | 301 → `/terminos`, `/privacidad` (+ `/en/...`) |
| `/2023/07/...`, `/2026/04/...`, `/category/*`, `/tag/*`, `/author/*`, `/feed/` | 301 → `/blog` (o `/en/blog`) |
| `/wp-sitemap.xml` | 301 → `/sitemap.xml` |
| `/?p=123`, `/home-3/` | 301 → `/` |
| `/wp-admin/`, `/wp-login.php`, `/wp-content/*`, `/xmlrpc.php` | 410 |
| `/no-existe` | 404 con la página 404 del sitio |

## Si algo sale mal

Volver el registro `A @` a `160.153.0.157` (el WordPress sigue intacto en Managed WordPress hasta que se cancele ese plan). No cancelar el plan viejo hasta 2 semanas después, sin errores en Search Console.
