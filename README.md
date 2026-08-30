# Mi Portfolio Personal

¡Bienvenido/a a mi portfolio personal! Este proyecto reúne mi trabajo, proyectos desarrollados y novedades en un entorno moderno, rápido y totalmente responsive.

---

## Tech Stack & Tecnologías

Este sitio está construido con un stack de desarrollo web moderno:

- **Framework:** Next.js 15 (usando el App Router y Turbopack).
- **Biblioteca UI:** React 19
- **Estilos:** Tailwind CSS v4
- **Base de Datos & Backend:** Supabase (PostgreSQL + cliente JS para datos en tiempo real de proyectos y noticias).
- **Internacionalización:** Context personalizado para soporte multilenguaje (ES / EN).
- **Emailing:** Nodemailerpara el formulario de contacto.
- **Deploy:** Vercel

---

## Características Principales

- **Single Page Layout (One-Page):** Navegación fluida con scroll automático entre secciones
- **Sección de Noticias Paginada & Filtrable:**
- Filtrado dinámico por etiquetas traídas desde Supabase.
- Paginación _client-side_ rápida y fluida.
- _UX Mobile:_ Auto-scroll suave al principio de la sección de noticias únicamente al cambiar de página en dispositivos móviles.
- **Soporte Bilingüe:** Cambio rápido de idioma dinámico vía Context API.
- **Totalmente Responsive:** Diseñado con enfoque _Mobile First_.

---

## Estructura del Proyecto

```text
portfolio_posta/
├── src/
│   ├── app/                # Rutas principales y layout de Next.js (App Router)
│   ├── components/         # Componentes UI reutilizables (NavBar, NewsCard, etc.)
│   ├── context/            # Contextos globales (LanguageContext, etc.)
│   ├── data/               # Datos estáticos auxiliares (projectsData.ts)
│   ├── lib/                # Configuración de clientes (supabase.ts, etc.)
│   └── translations/       # Archivos JSON de idiomas (es.json, en.json)
├── public/                 # Assets estáticos (imágenes, favicons)
└── package.json            # Dependencias y scripts del proyecto
```

_Gracias por pasarte!!_
