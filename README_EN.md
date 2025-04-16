[中文版本](./README.md)

# Svelte Surfer

Svelte Surfer is a high-performance data stream management system demo project based on Svelte + TypeScript + Vite. It demonstrates how to use Svelte Store to implement real-time data fetching, display, and error handling.

## Features
- Real-time data stream display and refresh
- Error handling and notification
- Responsive UI design with dark mode support
- Clean code structure, easy to extend

## Directory Structure
```
src/
  App.svelte           // Main entry, page structure and style
  main.ts              // App mount entry
  app.css              // Global styles
  assets/
    svelte.svg         // Logo asset
  lib/
    DataDisplay.svelte // Data stream display and interaction component
    Counter.svelte     // Counter demo component
    stores/
      DataStore.ts     // Data stream state management and async logic
```

## Main Components
- **App.svelte**: Main page, includes logo, title, description, and data display area.
- **DataDisplay.svelte**: Core data display component, fetches data from the store, supports refresh and error clearing.
- **DataStore.ts**: Custom Svelte Store, encapsulates async data fetching, state management, and error handling.
- **Counter.svelte**: Simple counter component (for demo, optional).

## Data Flow Implementation
- Uses Svelte's `writable` store to manage data state (`loading`, `error`, `data`, `lastUpdated`).
- The `fetchData` method simulates async data fetching, supports refresh and error handling.
- Components subscribe to the store for reactive UI updates.

## Installation & Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Screenshot
![Svelte Surfer Screenshot](./src/assets/svelte.svg)

## Requirements
- Node.js 16+
- Svelte 5+
- TypeScript 5+
- Vite 6+

## License
MIT 