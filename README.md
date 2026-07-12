# Portfolio React

A modern, high-performance portfolio website built as a Single Page Application (SPA).

## Project Overview
This project serves as a personal portfolio to showcase experience, projects, skills, and achievements. It is designed with a focus on rich aesthetics, smooth animations, and exceptional performance. The application is completely static, with data driven entirely from local TypeScript configuration files, avoiding the need for a complex backend.

## Features
*   **Dynamic UI**: Beautiful dark-mode tailored aesthetics with glassmorphism and smooth micro-animations.
*   **Performance Optimized**: Below-the-fold sections are lazy-loaded to reduce initial bundle size.
*   **Robust Forms**: Client-side validation using `react-hook-form` and `zod`, integrating seamlessly with FormSubmit.
*   **Resilient**: Native React Error Boundaries ensure the application handles unexpected runtime errors gracefully.
*   **Fully Responsive**: Adapts flawlessly across mobile, tablet, and desktop viewports.

## Technology Stack
*   **Core**: React 19, TypeScript, Vite
*   **Styling**: TailwindCSS (v4)
*   **Animations**: Framer Motion
*   **Form Management**: React Hook Form, Zod
*   **Icons**: Lucide React

## Folder Structure
```
src/
├── assets/         # Static resources and images
├── components/     # React components organized by domain
│   ├── layout/     # Structural components (Navbar, Footer)
│   ├── sections/   # Major page sections (Hero, About, Projects)
│   └── ui/         # Reusable atomic UI elements (Buttons, Loaders, ErrorBoundary)
├── data/           # TypeScript static data files (acts as a local DB)
├── App.tsx         # Main application composition & lazy loading
└── main.tsx        # React entry point
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables
The project requires environment variables for external integrations like the contact form. 
1. Copy the example configuration:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and configure your settings:
   *   `VITE_FORMSUBMIT_ENDPOINT`: The URL for FormSubmit to process contact messages.

## Development Workflow
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Run linting to ensure code quality:
```bash
npm run lint
```

Run TypeScript compiler checks:
```bash
npx tsc --noEmit
```

## Build & Deployment
To build the application for production:
```bash
npm run build
```
This will generate optimized, minified static files in the `dist/` directory.

The `dist/` folder can be deployed to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages).

## Architecture Notes
For a deeper dive into the technical architecture, component organization, and guidelines for extending the project, please refer to the [Developer Notes](docs/DEVELOPER_NOTES.md).
