<?xml version="1.0" encoding="UTF-8"?>
<!-- Human-readable view of sitemap.xml in browsers; search engines ignore it. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <title>Sitemap | Loopa Technology</title>
        <style>
          body{font:14px/1.5 system-ui,sans-serif;margin:2rem auto;max-width:960px;padding:0 1rem;color:#1a1a1a}
          table{border-collapse:collapse;width:100%}
          th,td{text-align:left;padding:.5rem .75rem;border-bottom:1px solid #e5e5e5}
          th{background:#f6f2ea}
          a{color:#0b5fff;text-decoration:none}
        </style>
      </head>
      <body>
        <h1>Sitemap de Loopa Technology</h1>
        <p><xsl:value-of select="count(s:urlset/s:url)"/> URLs</p>
        <table>
          <tr><th>URL</th><th>Última modificación</th><th>Idiomas</th></tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
              <td><xsl:value-of select="s:lastmod"/></td>
              <td><xsl:for-each select="xhtml:link/@hreflang"><xsl:value-of select="."/><xsl:text> </xsl:text></xsl:for-each></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
