Kickstarter Projects Dashboard

A React-based web application showcasing highly-rated Kickstarter projects with a responsive table, pagination, and a modern UI.

🌐 Live Demo

Check out the live application: Kickstarter Projects Dashboard  https://saas-labs-frontend-assignment.netlify.app/

🚀 Features

Display Kickstarter project data with sorting and pagination (5 records per page).
Dynamic page navigation.
Currency and percentage formatting.
Error handling and loading states.
Fully typed with TypeScript.
Beautiful UI with gradients, grid patterns, and responsive design.
📁 Project Structure

kickstarter-projects/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Pagination.tsx
│   │   ├── ProjectsTable.tsx
│   │   ├── TableHeader.tsx
│   │   └── TableRow.tsx
│   ├── hooks/
│   │   └── useProjects.ts
│   ├── styles/
│   │   ├── App.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── index.css
│   │   ├── Pagination.css
│   │   └── ProjectsTable.css
│   ├── types/
│   │   ├── ApiResponse.ts
│   │   └── Project.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── projectTransforms.ts
│   ├── index.tsx
├── .babelrc
├── package.json
├── tsconfig.json
└── webpack.config.js

React 18, TypeScript, Webpack 5, Babel, CSS3.
🛠️ Setup

Clone the repository.
Install dependencies:
npm install
Start the development server:
npm start
🌐 API Integration

Fetch data from:
https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json

Data Transformation:

API format:
{ 'percentage.funded': number; 'amt.pledged': number; 's.no': number; }
Application format:
{ id: number; percentageFunded: number; amountPledged: number; }
🎨 Styling

Responsive layout with gradient backgrounds and grid overlays.
Smooth transitions and accessible color contrast.
Mobile-friendly design.
📦 Scripts

npm start: Run the development server.
npm run build: Create a production build.
npm run lint: Check code quality.
