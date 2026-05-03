# phonezone2.0 — Premium Tech Showroom

A state-of-the-art, mobile-responsive 3D product showroom built with **TanStack Start**, **React Three Fiber**, and **Tailwind CSS**. This project features a high-performance 3D hero section, horizontal parallax showcases, and sleek, section-snapping vertical scrolling.

![phonezone_preview](public/preview.png)

## 🚀 Features

- **3D Hero Section**: Interactive 3D models of premium smartphones (iPhone 16 Pro, Samsung S24 Ultra) with brand-specific themes.
- **Section Snapping**: Smooth, locked-in vertical scrolling experience using native CSS scroll snapping.
- **Bento-style Specs**: Modern grid-based feature highlights.
- **Horizontal Showcase**: Parallax horizontal product browsing driven by vertical scroll.
- **Responsive Navigation**: Adaptive side-rail for desktop and compact layout for mobile.
- **Premium Aesthetics**: Dark-mode-first design with molten glassmorphism and custom typography.

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/guide/start/overview) (React + Vite)
- **3D Engine**: [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Three.js](https://threejs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Reveal on scroll)

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/phonezone-showroom.git
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

### Development
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Deploy to Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`

### Deploy to Cloudflare Pages
This project includes a `wrangler.jsonc` configuration for Cloudflare.
```bash
npm run build
npx wrangler pages deploy dist
```

## 📄 License
This project is for demonstration purposes. All 3D assets belong to their respective creators.
