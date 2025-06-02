# Application Portal

A modern React application portal built with Vite, TypeScript, and Chakra UI.

## Features

- 🚀 Built with Vite for lightning-fast development
- 📝 TypeScript for better type safety
- 🎨 Chakra UI for beautiful and accessible components
- 🛣️ React Router for seamless navigation
- 🌓 Dark mode support
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

This project is organized as a monorepo using npm workspaces, allowing for better code organization and sharing between different applications and packages.

```
.
├── apps/                  # Application directories
│   └── main/             # Main portal application
├── packages/             # Shared packages
│   └── accounts/         # Account management package
└── src/                  # Legacy source directory
    ├── assets/          # Static assets
    ├── components/      # Reusable components
    ├── layouts/         # Layout components
    ├── pages/          # Page components
    ├── hooks/          # Custom React hooks
    ├── theme/          # Theme configuration
    ├── utils/          # Utility functions
    ├── App.tsx         # Main App component
    └── main.tsx        # Application entry point
```

### Monorepo Structure

- **apps/**: Contains individual applications that can be deployed independently
  - `main/`: The main portal application
  
- **packages/**: Houses shared libraries and utilities used across applications
  - `accounts/`: Shared account management functionality

Each application and package has its own:
- `package.json` for dependencies
- TypeScript configuration
- Build setup
- Tests

## Technologies Used

- React
- TypeScript
- Vite
- Chakra UI
- React Router DOM
- Framer Motion
