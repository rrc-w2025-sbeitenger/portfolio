# Sven Beitenger | Portfolio

My personal portfolio website, built to share my development projects, technical skills, and experience as an Application Development and Delivery student at Red River College Polytechnic.

I wanted the site to feel like a small desktop: visitors can open About, Projects, and Contact windows from the home screen and drag them around by their title bars.

## Features

- **Desktop-inspired interface:** draggable windows with title bars and close buttons.
- **About:** my background, education, and hobbies.
- **Projects:** technical skills, project repositories, and my Sprint to Innovate experience.
- **Contact:** my email and an invitation to connect about projects or co-op opportunities.
- **Responsive styling:** layouts that adapt to different screen sizes.
- **Animated background:** Vanta.js birds powered by Three.js, with a plain background when reduced motion is preferred or the effect cannot start.

## Built with

- React and TypeScript
- Vite for development and production builds
- Tailwind CSS for styling
- React Router for the application layout
- React Rnd for draggable windows
- Vanta.js and Three.js for the background animation

## Featured work

- **Marathon REST API:** a RESTful API with Firebase Authentication and Cloud Firestore integration.
- **Banking Management App:** a Python desktop application built with PySide6, object-oriented programming, and design patterns.
- **Formula One Web App:** a collaborative React and TypeScript project, currently in progress.
- **This portfolio:** an ongoing project exploring reusable components and a desktop-inspired web interface.
- **Sprint to Innovate:** a team competition experience developing and presenting an AI-driven security concept.

## Run locally

Install Node.js 22.12+ and npm before starting. Run these commands from the repository root:

```sh
cd portfolio
npm install
npm run dev
```

Open the local URL printed in the terminal. The site runs entirely in the browser; no backend or environment variables are required.

## Available commands

Run these commands inside the `portfolio` directory:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Type-check the application and create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally after building. |
| `npm run lint` | Check the code with ESLint. |

## Project structure

```text
portfolio/
  public/                 # Profile photos, project images, and navigation icons
  src/
    assets/fonts/         # Local fonts
    components/
      common/             # Shared windows, navigation, footer, and background
        layout/           # Application layout
      pages/              # Home, About, Projects, and Contact
    App.tsx               # Route configuration
    index.css             # Tailwind CSS and font styles
    main.tsx              # Application entry point
  package.json            # Dependencies and scripts
  vite.config.ts          # Vite and Tailwind configuration
```

## Contact

- **Email:** [svenbeit7@gmail.com](mailto:svenbeit7@gmail.com)
- **GitHub:** [rrc-w2025-sbeitenger](https://github.com/rrc-w2025-sbeitenger)
