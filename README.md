# PickIt

A modern, intuitive web application for creating and managing beautiful color palettes. Perfect for designers, developers, and creatives who work with colors daily.

<p align="center">
  <img src="/src/imgs/home/homepage.png" alt="PickIt Homepage" width="800">
</p>

<p align="center">
  <img src="/src/imgs/home/palette-view.png" alt="PickIt Color Palette Generator" width="800">
</p>

## ✨ Features

- **Smart Color Palette Generator** - Generate harmonious color palettes with a single click
- **Flexible Color Schemes** - Support for monochromatic, analogic, complementary, triadic, Tetradic, and custom color schemes
- **Real-time Customization** - Pick and fine-tune individual colors with an intuitive color picker
- **Copy to Clipboard** - Instantly copy hex codes for quick implementation
- **Fully Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Dark Mode Support** - Toggle between light and dark themes for comfortable viewing
- **Smooth Animations** - Enhanced user experience with GSAP-powered animations
- **Interactive UI** - Beautiful icons and engaging interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/marwaneTRK/Color.git

# Navigate to project directory
cd Color

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser to see the application running.

## 🌐 Live Demo

Check out the live application: [https://marwanetrk.github.io/Color/](https://marwanetrk.github.io/Color/)

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Preview production build locally
npm run preview
```

## 🏗️ Project Structure

```
Color/
├── src/
│   ├── App.jsx                          # Root application component
│   ├── main.jsx                         # Application entry point
│   ├── index.css                        # Global styles
│   ├── api/
│   │   └── apiColor.js                  # Color API utilities
│   └── components/
│       ├── AddColorButton.jsx           # Add color functionality
│       ├── DottedFooter.jsx             # Footer component
│       ├── HomePage.jsx                 # Landing page
│       ├── Layout.jsx                   # Main layout wrapper
│       ├── NavBar.jsx                   # Navigation component
│       └── apiPage/
│           ├── About.jsx                # About section
│           ├── ColorPalette.jsx         # Palette display grid
│           ├── ColorSchemeDropdown.jsx  # Scheme selector
│           ├── PaletteControl.jsx       # Palette controls
│           ├── PickSection.jsx          # Color picker section
│           └── ApiComponent/
│               └── ColorContext.jsx     # Global color state management
├── imgs/                                # Static assets
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: React 19 - Modern UI library with latest features
- **Build Tool**: Vite 7 - Lightning-fast build tool and dev server
- **Styling**: Tailwind CSS 4 - Utility-first CSS framework
- **Routing**: React Router DOM 7 - Declarative routing for React
- **Animations**: GSAP 3 - Professional-grade animation library
- **Icons**: Lucide React - Beautiful & consistent icon pack
- **SVG Handling**: SVGR - Transform SVGs into React components
- **State Management**: React Context API - Built-in state management
- **Deployment**: GitHub Pages - Fast and reliable hosting

## 📱 Responsive Design

PickIt is fully responsive and works beautifully on all devices - from large desktop monitors to mobile phones. The interface adapts seamlessly to provide an optimal user experience regardless of screen size.

## 🎨 How to Use

1. **Choose a Base Color** - Click "Add Color" or use the color picker to select your starting color
2. **Select a Color Scheme** - Choose from analogic, monochromatic, complementary, triadic, Tetradic,or other harmony schemes
3. **Generate Palette** - Watch as PickIt creates a beautiful, harmonious color palette
4. **Copy Hex Codes** - Click on any color to copy its hex code to your clipboard
5. **Customize** - Fine-tune individual colors to match your vision

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch

```bash
   git checkout -b feature/amazing-feature
```

3. **Commit** your changes

```bash
   git commit -m 'Add some amazing feature'
```

4. **Push** to the branch

```bash
   git push origin feature/amazing-feature
```

5. **Open** a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- Animated with [GSAP](https://greensock.com/gsap/) for smooth, professional animations
- Inspired by the need for accessible, powerful color tools
- Thanks to all contributors and the open-source community

## 📧 Contact

**Marwane Traiki**

- Email: marwantraiki@gmail.com
- GitHub: [@marwaneTRK](https://github.com/marwaneTRK)

Questions or feedback? Feel free to open an issue or reach out!

---

<p align="center">Made with ❤️ by Marwane Traiki</p>
