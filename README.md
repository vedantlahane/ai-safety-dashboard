AI Safety Incident Dashboard

A modern, responsive dashboard for tracking and reporting AI safety incidents. Built with React, TypeScript, Vite, and Tailwind CSS v4.



    🌓 Dark/light theme toggle for comfortable viewing

    📊 Visual representation of incident severity distribution

    📝 Multi-step form for reporting new incidents

    💾 Session-based storage for data persistence





Tech Stack

    React 18 - UI library

    TypeScript - Type safety

    Vite - Build tool and development server

    Tailwind CSS v4 - Utility-first CSS framework

    React Hook Form - Form validation and handling

Getting Started
Prerequisites

    Node.js (v16.0 or higher)

    npm 

Installation

    Clone the repository

bash
git clone https://github.com/vedantlahane/ai-safety-dashboard.git
cd ai-safety-dashboard

Install dependencies

bash
npm install

Start the development server

    bash
    npm run dev

    Open your browser and navigate to http://localhost:5173

Project Structure

text
ai-safety-dashboard/
├── src/
│   ├── components/       # UI components
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration

Usage
Viewing Incidents

The dashboard displays all reported AI safety incidents with their title, severity, and reported date. You can:

    Filter incidents by severity (All, Low, Medium, High)

    Sort incidents by date (newest or oldest first)

    Click "View Details" to see the full incident description

Reporting New Incidents

To report a new incident:

    Click the "Report New Incident" button

    Fill out the multi-step form with incident details

    Submit the form to add the incident to the dashboard



Design Decisions

    Session Storage: Data is stored in the browser's sessionStorage to persist during the current session without requiring a backend.

    Component Structure: The application is built with a modular component structure to improve maintainability and reusability.

    Custom Hooks: State management is handled through custom hooks to separate business logic from UI components.

    Responsive Design: The dashboard is fully responsive and works well on mobile, tablet, and desktop devices.

License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    The React and Tailwind CSS communities for their excellent documentation
