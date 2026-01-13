<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
🏡 RealEstate — Modern Real Estate Website (React + TypeScript + TailwindCSS)

A fully responsive and modern real estate website built with React, TypeScript, and TailwindCSS.
Users can browse properties, apply filters, view detailed listings, and explore a clean UI optimized for both desktop and mobile.

🚀 Features
🏠 Home Page

Hero section with search bar

Featured properties

Modern grid layout

Smooth hover effects & transitions

📋 Property Listings Page

Property grid with images, price, and details

Filter sidebar (price, type, bedrooms, etc.)

Sorting options (Newest, Price Low → High, etc.)

📄 Property Details Page

Full-width banner image

Image gallery slider

Property description + key features

Agent info card

Similar properties section

🔧 Global Components

Responsive Navbar

Footer

Property Card

Filter Sidebar

Gallery Component

🛠️ Tech Stack

React + TypeScript

TailwindCSS (v4)

React Router DOM

Lucide Icons

clsx + tailwind-merge

📂 Folder Structure
src/
 ├── components/
 ├── pages/
 ├── data/
 ├── types/
 ├── hooks/
 ├── App.tsx
 ├── main.tsx
 └── index.css

📦 Installation & Setup
npm install
npm run dev

🌟 Live Demo

(You can add your Netlify/Vercel link here)

📸 Screenshots

(Add screenshots later to make it more premium)

🧑‍💻 Author

Nodstan
Frontend Developer • TypeScript • React
>>>>>>> 011e9c810aeaf84b99b77622306443ce62e468d3
