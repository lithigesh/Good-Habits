# Daily Exercise & Fitness – Stay Healthy, Stay Strong

A kid-friendly React-based website demonstrating the importance of daily exercise and fitness through interactive pages.

## Features

### 🏠 Home (Use Case Demo)

- Interactive story about Arjun's transformation
- Before/After comparison with visual elements
- Animated exercise emoji
- Kid-friendly design with bright colors

### 📚 Info Page

- Benefits of exercise with colorful icons
- Simple exercises kids can do
- "Did You Know?" fact section
- Interactive grid layout

### ✨ Good Habits Page

- Interactive checklist with 5 healthy habits
- Progress tracking with emoji rewards
- Visual feedback for completed habits
- Motivational messages

## Technology Stack

- **React.js** - Frontend framework
- **React Router** - Navigation between pages
- **Tailwind CSS** - Styling and responsive design (using Vite plugin)
- **Vite** - Build tool and development server

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5175`

## Tailwind CSS Setup

This project uses Tailwind CSS v4 with the Vite plugin for optimal performance:

- Installed via: `npm install tailwindcss @tailwindcss/vite`
- Configured in `vite.config.js` as a plugin
- Imported in `src/index.css` with `@import "tailwindcss"`

## Design Principles

- **Kid-friendly**: Bright colors, emojis, and simple language
- **No gradients**: Uses solid colors as requested
- **Interactive**: Checkboxes, hover effects, and animations
- **Responsive**: Works on different screen sizes
- **Educational**: Teaches healthy habits through engaging content

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar
│   ├── Home.jsx        # Use case demonstration
│   ├── Info.jsx        # Facts about exercise
│   └── GoodHabits.jsx  # Interactive habits checklist
├── App.jsx             # Main app with routing
├── App.css             # Custom animations
├── index.css           # Tailwind directives
└── main.jsx            # App entry point
```

## Navigation

- **Home** - Why daily exercise is important (Use case demo)
- **Info** - Facts and benefits of exercise
- **Good Habits** - Interactive fitness habits checklist

The website promotes healthy living for kids through engaging visuals and interactive elements!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
