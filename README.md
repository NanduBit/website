# Kendriya Vidyalaya Sangathan Website

A modern, responsive website for Kendriya Vidyalaya Sangathan built with Next.js 14 and deployed on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Timeline**: 60+ years journey of KVS with interactive elements
- **Static Export**: Optimized for GitHub Pages deployment
- **Performance**: Fast loading with optimized images and assets
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/kendriya-vidyalaya-website.git
cd kendriya-vidyalaya-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/kendriya-vidyalaya-website`

### Manual Deployment

To deploy manually:

\`\`\`bash
npm run build
\`\`\`

The static files will be generated in the `out` directory.

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme-toggle.tsx    # Theme toggle button
│   └── interactive-timeline.tsx # Timeline component
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
└── next.config.mjs         # Next.js configuration
\`\`\`

## 🎨 Customization

### Changing Repository Name

If your repository name is different from `kendriya-vidyalaya-website`, update the `assetPrefix` and `basePath` in `next.config.mjs`:

\`\`\`javascript
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
\`\`\`

### Theme Customization

The website supports system, light, and dark themes. You can customize colors in:
- `app/globals.css` for global styles
- `tailwind.config.ts` for Tailwind configuration

## 📄 License

This project is for educational purposes only. Not officially affiliated with Kendriya Vidyalaya Sangathan.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues and questions, please open an issue on GitHub.
