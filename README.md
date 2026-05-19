# luisgeraldo.academy

Sitio web personal de **Luis Alberto Geraldo Campos** con enfoque de marca personal moderna para investigación aplicada, analítica de datos y publicación científica.

## Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React

## Estructura

```text
app/
  layout.jsx        # SEO, metadatos Open Graph, Twitter Card y configuración global
  page.jsx          # Página principal
  globals.css       # Estilos base de Tailwind
  robots.js         # Robots para indexación
  sitemap.js        # Sitemap de luisgeraldo.academy
components/
  HomePage.jsx      # Sitio completo
public/
  images/
    luis-geraldo.jpg # Foto profesional
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

Luego abrir:

```text
http://localhost:3000
```

## Publicar en Vercel

1. Crear un repositorio en GitHub, por ejemplo `luisgeraldo-web`.
2. Subir todos los archivos de esta carpeta.
3. Entrar a Vercel y elegir **Add New Project**.
4. Importar el repositorio desde GitHub.
5. Framework preset: **Next.js**.
6. Build command: `npm run build`.
7. Output: automático.
8. Deploy.

## Conectar dominio luisgeraldo.academy

En Vercel:

1. Ir a **Project Settings**.
2. Entrar a **Domains**.
3. Agregar `luisgeraldo.academy`.
4. Agregar también `www.luisgeraldo.academy`.
5. Seguir las instrucciones DNS que indique Vercel en el proveedor del dominio.

Normalmente Vercel pedirá configurar registros similares a estos:

```text
A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com
```

Usar siempre los valores exactos que Vercel muestre en el panel, porque pueden variar.

## SEO incluido

- Título optimizado.
- Descripción meta.
- Canonical URL: `https://luisgeraldo.academy`.
- Open Graph para LinkedIn y redes sociales.
- Twitter Card.
- Robots.
- Sitemap.
- Imagen principal para compartir.

## Próximas mejoras sugeridas

- Agregar favicon personalizado.
- Crear sección de blog o recursos.
- Agregar formulario con Formspree, Resend o Vercel Functions.
- Crear página `/publicaciones` con filtros por año, tipo y línea de investigación.
- Crear página `/servicios` con detalle de cada servicio.
