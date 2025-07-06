// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: { 500: '#2563eb' }, // blue-600
        accent: { 500: '#f59e42' },  // orange

        // Dark backgrounds
        darkBg:    '#181821', // Main background (very dark)
        darkGrid:  '#232336', // Slightly lighter for grid view
        darkCard:  '#2d2d42', // Even lighter for cards

        // Text and placeholder
        darkText:      '#f3f4f6', // Light text
        placeholder:   '#6b7280', // Gray-500 (neutral placeholder)

        // Debug
        debug: '#f59e42', // Bright pink for debugging
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}
