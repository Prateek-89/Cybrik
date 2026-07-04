# Notes App Frontend

This folder contains the Next.js 15 frontend for the Notes application.

## Contents

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `services/` - API client services
- `types/` - TypeScript types and interfaces
- `public/` - Static files

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for production
```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── LoginForm.tsx
│   ├── Navbar.tsx
│   ├── NoteCard.tsx
│   ├── NoteForm.tsx
│   └── NotesList.tsx
│
├── services/
│   └── api.ts
│
├── types/
│   └── note.ts
│
└── README.md
```

## Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Axios
