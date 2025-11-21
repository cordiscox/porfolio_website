## Project Overview

This is a personal portfolio website built to showcase my skills, projects, and experience as a software developer. The goal is to create a modern, responsive, and performant single-page application (SPA).

## Key Technologies

-   **Framework**: React with TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS (likely, given the `ui` components) and global CSS in `src/styles/globals.css`.
-   **UI Components**: A mix of custom components in `src/components` and shadcn/ui components in `src/components/ui`.

## Project Structure

-   `src/components`: Contains the main components of the portfolio (Hero, About, Projects, etc.).
-   `src/components/ui`: Contains reusable UI components, likely from a library like shadcn/ui.
-   `src/styles/globals.css`: Global styles for the application.
-   `index.html`: The main entry point for the application.
-   `vite.config.ts`: Configuration for the Vite build tool.

## Development Workflow

-   **Running the development server**: `npm run dev`
-   **Building for production**: `npm run build`
-   **Linting**: `npm run lint` (assuming this script exists in `package.json`)

## Coding Conventions

-   **Component Structure**: Functional components with React Hooks are preferred.
-   **Styling**: Use Tailwind CSS utility classes for styling components whenever possible. Avoid inline styles.
-   **File Naming**: Use PascalCase for component files (e.g., `MyComponent.tsx`).
-   **Imports**: Use absolute imports relative to the `src` directory.

## Important Notes

-   Before making any changes, please analyze the existing code to understand the current patterns and conventions.
-   When adding new components, check if a similar component already exists in `src/components/ui` to maintain consistency.
-   Ensure that any new code is properly typed using TypeScript.
