<h1 align="center">
  <br>
  ✨ Sajda Sabnam - Portfolio 2.0
  <br>
</h1>

<h4 align="center">A modern, interactive portfolio website built with cutting-edge web technologies.</h4>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-performance">Performance</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.2.8-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock" alt="GSAP">
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind">
</p>

---

## 🎯 Overview

A jaw-dropping, fully-responsive portfolio website showcasing my work as a Full Stack Developer. Built with modern web technologies and featuring stunning animations, smooth scrolling, and an unforgettable user experience.

---

## ✨ Key Features

### 🎭 Animations & Interactions

- **Smooth Scroll** - Butter-smooth scrolling with Lenis
- **GSAP Animations** - Professional scroll-triggered animations
- **Custom Cursor** - Interactive cursor that follows mouse movement
- **Magnetic Effects** - 3D card tilts and magnetic hover interactions
- **Particle Background** - Dynamic particle system
- **Preloader Animation** - Engaging loading experience

### 🎨 Design & UI

- **Holographic Contact Hub** - Stunning glassmorphism contact cards with 3D effects
- **Dark Theme** - Sleek, modern dark mode design
- **Responsive** - Flawless experience on all devices
- **Typography** - Anton + Roboto Flex font pairing
- **Gradient Effects** - Beautiful gradient overlays and glows

### 🚀 Performance

- **Next.js 15** - Latest App Router with Server Components
- **Optimized Images** - Automatic image optimization
- **Code Splitting** - Fast page loads
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter cards
- **Analytics Ready** - Google Analytics & Hotjar integration

### 📊 Features

- Project showcase with detailed case studies
- Skills & tech stack display
- Experience timeline
- Smooth page transitions
- Back to top button
- Scroll progress indicator

---

## 🛠️ Tech Stack

### Frontend

```
Next.js 15.2.8        - React framework with App Router
React 19 RC           - Latest React with concurrent features
TypeScript 5          - Type-safe development
Tailwind CSS 3.4      - Utility-first CSS framework
```

### Animation & UX

```
GSAP 3.12            - Professional-grade animations
Lenis 1.1            - Smooth scroll library
Framer Motion        - React animation library
```

### Development

```
pnpm                 - Fast, disk space efficient package manager
ESLint               - Code quality and consistency
PostCSS              - CSS processing
Turbopack            - Next.js bundler (optional)
```

### Analytics & Monitoring

```
Google Analytics     - User analytics
Hotjar               - User behavior analytics
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (recommended) or npm/yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/sajda25/portfolio-2.0.git
    cd portfolio-2.0/myportfolio
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    # or
    npm install
    ```

3. **Set up environment variables** (optional)

    ```bash
    cp .env.example .env.local
    ```

    Add your API keys if needed:

    ```env
    WEB3FORMS_ACCESS_KEY=your_key_here
    ```

4. **Run the development server**

    ```bash
    pnpm dev
    # or
    npm run dev
    ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```
myportfolio/
├── app/                      # Next.js App Router
│   ├── _components/         # Page-specific components
│   ├── projects/            # Project detail pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── HolographicContactHub.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   └── ...
├── lib/                     # Utilities and data
│   ├── data.ts             # Portfolio data
│   ├── utils.ts            # Helper functions
│   └── actions.ts          # Server actions
├── public/                  # Static assets
│   ├── logo/               # Brand logos
│   └── projects/           # Project images
├── types/                   # TypeScript types
└── README.md
```

---

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Optimized Images**: WebP format with lazy loading
- **Code Splitting**: Automatic route-based splitting

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sajda25/portfolio-2.0)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

- **Netlify**: Drag & drop build folder
- **AWS Amplify**: Connect GitHub repository
- **Cloudflare Pages**: Automatic deployment

---

## 🎨 Customization

### Update Your Information

1. **Personal Data** - Edit `lib/data.ts`

    ```typescript
    export const GENERAL_INFO = {
        email: 'your-email@gmail.com',
        // ...
    };
    ```

2. **Projects** - Add your projects in `lib/data.ts`

    ```typescript
    export const PROJECTS: IProject[] = [
        {
            title: 'Your Project',
            // ...
        },
    ];
    ```

3. **Images** - Replace images in `public/` directory

4. **Theme Colors** - Modify `tailwind.config.ts`

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the portfolio:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License & Attribution

**MIT License** - Feel free to use this code for your own portfolio!

### ⚠️ Important: Please provide attribution

If you use this codebase, please give proper credit by:

- Keeping the footer attribution or
- Adding a link to this repository in your README

I spent significant time designing and building this portfolio, and while I'm happy to share it, **plagiarism is not cool**. Please respect the effort by giving credit where it's due.

**If you find this helpful, please give it a ⭐**

---

## 📧 Contact

**Sajda Sabnam**

gi- LinkedIn: [linkedin.com/in/sajda-sabnam-486614265](https://www.linkedin.com/in/sajda-sabnam-486614265/)

- GitHub: [@sajda25](https://github.com/sajda25)

---

## 🙏 Acknowledgments

- Design inspiration from various portfolio websites
- Icons by [Lucide Icons](https://lucide.dev/)
- Animations powered by [GSAP](https://greensock.com/)
- Built with [Next.js](https://nextjs.org/)

---

<p align="center">
  Made with ❤️ by Sajda Sabnam
  <br>
  <sub>© 2026 All rights reserved</sub>
</p>

<p align="center">
  <a href="#-sajda-sabnam---portfolio-20">Back to top ⬆️</a>
</p>
