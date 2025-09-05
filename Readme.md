# 🌐 Portfolio

A modern **Full-Stack Portfolio Website** showcasing work as a **Full Stack Developer** and **AI/ML Engineer**.  
Deployed on **GitHub Pages**: [👉 Live Demo](https://chaitanya1436.github.io/Portfolio/)

---

## 🎥 Demo

https://github.com/chaitanya1436/Portfolio/blob/main/portfolio_home_page.mov

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/FramerMotion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## 📖 Overview

This is a **dark-themed, animated portfolio** built with **modern full-stack technologies**, featuring personal info, projects, skills, and contact sections.  
The application follows **best practices** with React, Express, TypeScript, and cutting-edge UI/UX design.

### 🖼️ Frontend Architecture
- ⚛️ **Framework**: React 18 + TypeScript with **Vite**  
- 🎨 **Styling**: TailwindCSS + custom CSS variables (dark theme)  
- 🧩 **UI Components**: Radix UI primitives + shadcn/ui library  
- 🎞️ **Animations**: Framer Motion for smooth transitions and scroll effects  
- 🗺️ **Routing**: Wouter for lightweight client-side routing  
- 📊 **State Management**: TanStack Query (React Query)  
- 📂 **Component Structure**: Modular, section-based (Hero, Projects, Skills, Contact)  

### ⚙️ Backend Architecture
- 🚀 **Framework**: Express.js + TypeScript (ESM mode)  
- 🔥 **Development Server**: Custom Vite + HMR  
- 🌐 **API Design**: RESTful (`/api/*` endpoints)  
- 🛑 **Error Handling**: Centralized middleware with structured responses  
- 📦 **Static Serving**: Vite serves assets in dev, compiled files in production  

### 🛠️ Development & Build Pipeline
- ⚡ **Build**: Vite (frontend), esbuild (backend)  
- 🧑‍💻 **Development**: Concurrent frontend/backend with `tsx` for TypeScript execution  
- 🌍 **Environment**: Separate configs for dev & prod  
- 🖼️ **Asset Management**: Vite handles imports with alias resolution  

### 🎨 UI/UX Design Patterns
- 🖌️ **Design System**: Dark theme + purple accents  
- 📱 **Responsive Design**: Mobile-first with Tailwind utilities  
- ✨ **Animations**: Scroll-triggered effects, custom cursor, smooth transitions  
- 🧩 **Component Library**: shadcn/ui for consistency  
- ♿ **Accessibility**: Radix UI ensures ARIA compliance + keyboard navigation  

---

## 📂 Project Structure

PORTFOLIO
│
├── 📁 client
│   ├── 📄 index.html 
│   ├── 📁 public
│   │   └── 📁 my_images
│   └── 📁 src
│       ├── 📁 components
│       │   ├── 🎨 AnimatedBackground.tsx
│       │   ├── 📜 CertificatesSection.tsx
│       │   ├── ✉️ ContactSection.tsx
│       │   ├── 🖱️ CustomCursor.tsx
│       │   ├── 🧭 Header.tsx
│       │   ├── 👋 HeroSection.tsx
│       │   ├── ⏳ LoadingScreen.tsx
│       │   ├── 💼 ProjectsSection.tsx
│       │   ├── 📈 ScrollProgress.tsx
│       │   ├── 📑 Sidebar.tsx
│       │   ├── 🛠️ SkillsSection.tsx
│       │   └── 📁 ui
│       │       ├── accordion.tsx
│       │       ├── alert-dialog.tsx
│       │       ├── alert.tsx
│       │       ├── aspect-ratio.tsx
│       │       ├── avatar.tsx
│       │       ├── badge.tsx
│       │       ├── breadcrumb.tsx
│       │       ├── button.tsx
│       │       └── ... (other UI components)
│       ├── 📁 hooks
│       │   ├── use-mobile.tsx
│       │   ├── use-toast.ts
│       │   ├── useCountUp.tsx
│       │   └── useScrollAnimations.tsx
│       ├── 📁 lib
│       │   ├── queryClient.ts
│       │   └── utils.ts
│       ├── 📁 pages
│       │   ├── not-found.tsx
│       │   └── portfolio.tsx
│       ├── ⚛️ App.tsx
│       ├── 🎨 index.css
│       └── ⚡ main.tsx
│
├── 📁 node_modules
├── 📁 dist
│
├── 📁 server
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
│
├── 📁 shared
│   └── schema.ts
│
├── ⚙️ .gitignore
├── ⚙️ components.json
├── ⚙️ drizzle.config.ts
├── 📄 package-lock.json
├── 📦 package.json
├── 📝 abt_portfolio.md
├── 🎨 tailwind.config.ts
├── ⚙️ tsconfig.json
└── ⚡ vite.config.ts

---

## ⚡ Getting Started

### 1️⃣ Install dependencies
npm install

### 2️⃣ Start development server (local)
npm run dev

### 3️⃣ Build for production (creates dist/)
npm run build

### 4️⃣ Deploy to GitHub Pages
npm run deploy

---

## 🔄 Update Workflow

When you make changes and want to update GitHub Pages deployment:

git add .
git commit -m "fixed to run both on local npm run dev and github npm run deploy"
git push origin main

Then redeploy:
npm run deploy

---



## 🤝 Contributing

Want to improve this portfolio? Feel free to fork, make changes, and submit a PR.

---

## 📜 License

This project is licensed under the **MIT License**.
