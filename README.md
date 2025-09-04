# Portfolio 🚀

This is my personal portfolio website built with **React + Vite** and deployed using **GitHub Pages**.

---

## 🌐 Live Website
👉 [View Portfolio](https://chaitanya1436.github.io/Portfolio/)

-------------
##Project Structure->
PIXELPORTFOLIO
│
├──client
│   ├── index.html 
│   ├── public\my_images
│   └── src
│       ├── components
│       │   ├── AnimatedBackground.tsx
│       │   ├── CertificatesSection.tsx
│       │   ├── ContactSection.tsx
│       │   ├── CustomCursor.tsx
│       │   ├── Header.tsx
│       │   ├── HeroSection.tsx
│       │   ├── LoadingScreen.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── ScrollProgress.tsx
│       │   ├── Sidebar.tsx
│       │   ├── SkillsSection.tsx
│       │   └── ui
│       │       ├── accordion.tsx
│       │       ├── alert-dialog.tsx
│       │       ├── alert.tsx
│       │       ├── aspect-ratio.tsx
│       │       ├── avatar.tsx
│       │       ├── badge.tsx
│       │       ├── breadcrumb.tsx
│       │       ├── button.tsx
│       │       ├── ... (all other ui components)
│       ├── hooks
│       │   ├── use-mobile.tsx
│       │   ├── use-toast.ts
│       │   ├── useCountUp.tsx
│       │   └── useScrollAnimations.tsx
│       ├── lib
│       │   ├── queryClient.ts
│       │   └── utils.ts
│       ├── pages
│       │   ├── not-found.tsx
│       │   └── portfolio.tsx
│       ├── App.tsx
│       ├── index.css
│       └── main.tsx
│       
├── node_modules
├── server
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared
│   └── schema.ts
├── .gitignore
├── components.json
├── drizzle.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── abt_portfolio.md
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts

---------------------------------------------

## 📦 Project Setup

### 1. Clone the Repository
git clone https://github.com/Chaitanya1436/Portfolio.git
cd Portfolio

###2. Install Dependencies
npm install

###3. Run Locally
npm run dev

###Now open http://localhost:5173   in your browser.



##Make your changes in code (e.g., update src/components/ProjectsSection, add images in public/my_images, etc.).

###Run these commands:
git add .
git commit -m "update portfolio with new content"
git push

###GitHub Actions will build & deploy automatically. 
###Wait ~1-2 minutes → your changes will be live


##⚙️ Configuration Notes
Deployment workflow: .github/workflows/deploy.yml
Build output directory: dist/public
Base URL is configured in vite.config.ts

##🛠️ Tech Stack
React + Vite
Tailwind CSS
GitHub Actions (CI/CD)
GitHub Pages (Hosting)
