# MADAR

> A modern, responsive learning dashboard built with React, Vite, and Supabase.

MADAR is a web-based learning interface designed to bring key learning information into one clear and approachable dashboard. The current application combines a welcome area, learning statistics, course information, and an integrated AI chat panel in a responsive layout.

## ✨ Features

- **Learning dashboard** — A clean central space for navigating the learning experience.
- **Welcome section** — A dedicated introduction area for users.
- **Learning statistics** — Quick-access cards for displaying useful progress or account metrics.
- **Course list** — Presents available courses and supports asking the AI assistant about a course.
- **AI chat panel** — Provides an in-app conversational interface for questions and assistance.
- **Responsive layout** — Uses Bootstrap's responsive grid to adapt the interface to different screen sizes.
- **Reusable React components** — The interface is organized into focused components for easier maintenance.
- **Supabase integration** — The project includes the Supabase JavaScript client for backend/data functionality.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | User interface |
| [Vite](https://vite.dev/) | Development server and build tooling |
| [JavaScript / JSX](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application code |
| [Bootstrap](https://getbootstrap.com/) | Responsive layout and UI utilities |
| [Lucide React](https://lucide.dev/) | Interface icons |
| [Supabase](https://supabase.com/) | Backend and data services |
| [ESLint](https://eslint.org/) | Code quality and linting |
| [TypeScript](https://www.typescriptlang.org/) | Type checking and project tooling |

## 📁 Project Structure

```text
MADAR/
├── public/
│   └── ...                 # Public assets
├── src/
│   ├── components/
│   │   ├── ChatPanel.jsx
│   │   ├── CourseList.jsx
│   │   ├── Navbar.jsx
│   │   ├── StatsGrid.jsx
│   │   └── WelcomeBanner.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (an active LTS version is recommended)
- npm, or another compatible JavaScript package manager

### Installation

Clone the repository:

```bash
git clone https://github.com/AbdullahSameh10/MADAR.git
cd MADAR
```

Install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will start the local development server and provide a URL to open the application in your browser.

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## 🔐 Environment Variables

If you connect MADAR to a Supabase project, keep credentials in environment variables rather than committing secrets to the repository.

For a Vite application, environment variables intended for client-side use normally use the `VITE_` prefix.

Example:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Never commit private keys, passwords, service-role keys, or other sensitive credentials to source control.

## 🧩 Architecture

The application follows a simple component-based React structure:

- `App.jsx` acts as the main page composition.
- `Navbar.jsx` provides the main navigation area.
- `WelcomeBanner.jsx` handles the welcome section.
- `StatsGrid.jsx` displays learning/account statistics.
- `CourseList.jsx` manages the course section and can trigger questions for the AI panel.
- `ChatPanel.jsx` provides the conversational interface.

This separation keeps individual UI responsibilities focused and makes the project easier to extend.

## 🌐 Live Demo

The project currently has a deployed version available at:

**https://madar-deci.vercel.app/**

## 🧪 Development

Before opening a pull request or publishing a significant change, it is recommended to run:

```bash
npm run lint
npm run typecheck
npm run build
```

These checks help catch common code-quality, type, and production-build issues.

## 🤝 Contributing

Contributions and thoughtful feedback are welcome.

A simple contribution workflow:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the available checks locally.
5. Commit your changes with a clear message.
6. Open a pull request describing what changed and why.

Please keep contributions focused, respectful, and consistent with the existing project structure.

## 📄 License

No license file is currently included in the repository. Unless a license is added, the project's source code should not be assumed to be freely reusable or redistributable.

If you intend to open-source MADAR for reuse, consider adding an appropriate license file.

## 👤 Author

**Abdullah Sameh**

GitHub: https://github.com/AbdullahSameh10

---

Made with care for the MADAR project.
