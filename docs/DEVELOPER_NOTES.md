# Developer Notes

This document provides internal documentation for the `portfolio-react` project, outlining the architecture, project structure, and guidelines for adding new features or scaling the codebase.

## 1. Project Architecture
The project is built as a single-page application (SPA) using React and Vite. It utilizes a static architecture without a dedicated backend database.
*   **Framework**: React 19 / Vite
*   **Styling**: TailwindCSS (v4) with global CSS variables for theming.
*   **Animations**: Framer Motion for scroll-linked animations and page transitions.
*   **Forms**: `react-hook-form` paired with `zod` for type-safe client-side validation.
*   **Resilience**: A native React `<ErrorBoundary>` surrounds the application to prevent full-page crashes.
*   **Performance**: Below-the-fold sections are lazy-loaded via `React.lazy()` and `<Suspense>` to reduce the initial JavaScript payload.

## 2. Component Organization
The `src/` directory follows a domain-driven structure:
*   `assets/`: Static resources and images.
*   `components/layout/`: Global structural components (e.g., `Navbar.tsx`, `Footer.tsx`).
*   `components/sections/`: Primary content blocks that make up the single-page scroll experience (e.g., `Hero.tsx`, `Projects.tsx`, `Contact.tsx`).
*   `components/ui/`: Reusable, atomic UI elements (e.g., `ThemeToggle.tsx`, `SectionLoader.tsx`, `ErrorBoundary.tsx`).
*   `data/`: TypeScript files containing static content (e.g., `projects.ts`, `experience.ts`), acting as a local database.

## 3. Environment Configuration
The project relies on `.env` files for configuration.
*   Copy `.env.example` to `.env`.
*   `VITE_FORMSUBMIT_ENDPOINT`: Controls where the `Contact.tsx` form sends data. This avoids hardcoding sensitive emails or endpoints into the source code.

## 4. How to Add New Sections
1.  **Create the Component**: Add a new `.tsx` file in `src/components/sections/` (e.g., `Testimonials.tsx`).
2.  **Add Data**: If the section requires iterative data, create a `.ts` file in `src/data/` (e.g., `testimonials.ts`) to maintain separation of concerns.
3.  **Lazy Load**: In `src/App.tsx`, import the component using `React.lazy()` if it is below the fold:
    ```tsx
    const Testimonials = lazy(() => import('./components/sections/Testimonials'));
    ```
4.  **Render**: Add the `<Testimonials />` component inside the `<Suspense>` block in `App.tsx`.
5.  **Navigation**: Ensure the section has a unique `id` attribute and update the `Navbar` links accordingly.

## 5. Coding Conventions
*   **Strict Typing**: Always use TypeScript interfaces/types for props and data objects.
*   **Tailwind Utilities**: Keep utility classes readable. Extract overly complex styles to `index.css` using `@apply` if they repeat heavily, but prefer utility-first.
*   **Form State**: Never use manual `useState` for forms. Always rely on `react-hook-form` for performance and predictability.
*   **Imports**: Follow the `verbatimModuleSyntax` rule; use `import type { ... }` for pure type imports.

## 6. Deployment
The site is static and can be deployed to any static host (Vercel, Netlify, GitHub Pages).
1.  Run `npm run build` to generate the production bundle.
2.  Ensure environment variables (`VITE_FORMSUBMIT_ENDPOINT`) are set in the deployment platform's dashboard.
3.  Deploy the generated `dist/` directory.

## 7. Future Improvement Ideas (V2 Roadmap)
*   **Testing**: Integrate Vitest and React Testing Library for component and unit testing.
*   **Headless CMS**: Migrate `src/data/` static files to a headless CMS (like Sanity, Contentlayer, or Decap CMS) for non-developer content management.
*   **Telemetry**: Add a lightweight, privacy-friendly analytics tracker (e.g., Plausible or Vercel Analytics) to monitor traffic and interactions.
*   **i18n**: Introduce internationalization using `react-i18next` for broader accessibility.
