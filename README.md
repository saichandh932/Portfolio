# Sai Chandh Pathuri — Portfolio

A personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It presents Sai's engineering journey, research, projects, leadership experience, athletics, skills, certifications, and contact details.

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev     # Start the development server
npm run lint    # Run ESLint
npm run build   # Create a production build
npm start       # Serve the production build
```

## Project layout

- `src/app/` — App Router page, layout, and global styles
- `src/components/` — Portfolio sections and UI components
- `src/lib/` — Shared utilities
- `public/` — Images, certificates, and resume served as static assets

The resume is available at `/Sai-Chandh-Pathuri-Resume.pdf`. Certificate preview images can be regenerated from the PDFs with `python convert_certs.py` after installing PyMuPDF (`python -m pip install pymupdf`).
