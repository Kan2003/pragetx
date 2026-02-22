# PrageTX - Interactive Visual Design Project

A modern, responsive Next.js project featuring two interactive tasks with animated components and real-time theme switching.

## Project Overview

This repository contains two main tasks showcasing interactive UI components, animations, and responsive design:

- **Task 1**: Landing page with theme toggle, car animation, and image slider
- **Task 2**: Complex system diagram with animated connection flows and flipping icons

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
pragetx/
├── app/
│   ├── page.tsx          # Task 1 - Landing page
│   ├── task2/
│   │   └── page.tsx      # Task 2 - System diagram
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── src/
│   └── component/
│       ├── Box.tsx                    # Reusable box component
│       ├── CarAnimation.tsx           # Car animation component
│       ├── CarAnimation.module.css    # Car animation styles
│       ├── ConnectionAnimation.tsx    # Connection flow animation
│       ├── Navbar.tsx                 # Navigation bar
│       └── Slider.tsx                 # Image slider component
├── public/                # Static assets
└── package.json
```

## Task 1: Landing Page

**Route**: `/`

### Features

- **Theme Toggle**: Switch between light and dark modes with persistent storage
- **Car Animation**: Animated car driving across the screen with rotating wheels
- **Image Slider**: Interactive horizontal image slider that expands on hover
- **Responsive Design**: Fully responsive layout that works on all device sizes

### Components Used

- `CarAnimation`: Displays moving car with sprite animation
- `Slider`: Interactive image carousel with smooth transitions
- `Navbar`: Navigation with theme toggle button

### How It Works

1. Click the theme button to toggle between light/dark mode
2. Watch the car animation drive across the screen with wheel rotation
3. Hover over the slider images to expand them and view the full slide

## Task 2: System Diagram

**Route**: `/task2`

### Features

- **Animated Connection Flows**: SVG-based animated paths showing system connections
- **Staggered Animations**: Multiple animation phases with precise timing
- **Flipping Icon Grid**: 6 boxes with icons that flip between multiple images
- **Synchronized Animations**: All elements animate in coordinated sequences
- **Responsive SVG**: Scales properly on all device sizes

### Animation Sequence

The system follows a 10-second cycle:

1. **0-0.5s**: Idle state
2. **0.5s**: Inner connection paths (2 & 3) animate in
3. **1.2s**: Box icons 1 & 2 appear
4. **2.5s**: Outer left path (1) animates in
5. **3.1s**: Box icon 0 appears
6. **4s**: Outer right path (4) animates in
7. **4.6s**: Box icon 3 appears
8. **7s**: Reset to idle
9. **10s**: Cycle repeats

### Components Used

- `ConnectionAnimation`: Main SVG diagram with animated paths and boxes
- Responsive grid layout for icon boxes
- Dashed borders for visual hierarchy

## Technologies Used

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Modules**: Component-scoped styling
- **SVG Animations**: Vector-based animated graphics

## Responsive Breakpoints

The project uses Tailwind breakpoints for responsive design:

- `sm`: 640px (Tablets)
- `md`: 768px (Small laptops)
- `lg`: 1024px (Desktops)
- `xl`: 1280px (Large screens)

## Key Features

✨ **Interactive Theme System**
- Light and dark mode toggle
- Persistent theme storage

🎨 **Smooth Animations**
- CSS keyframe animations
- SVG stroke animations
- Staggered animation sequences

📱 **Fully Responsive**
- Mobile-first design
- Scales across all device sizes
- Touch-friendly UI

🎯 **Accessible Components**
- Semantic HTML
- ARIA labels for dynamic content
- Keyboard navigation support

## Customization

### Changing Colors

Edit the color values in components:
- Primary: `#5D64FE` (Blue)
- Secondary: `#533AFD` (Purple)
- Background: `#0D1738` (Dark Blue)

### Adjusting Animation Timing

Modify timing values in:
- `CarAnimation.module.css`: Car/wheel speed
- `ConnectionAnimation.tsx`: Path and box animation timings
- `Slider.tsx`: Slider transition duration

### Adding New Slides

Edit the `images` array in `Slider.tsx` and add corresponding PNG files to the `public/` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are optimized using Next.js Image component
- CSS animations use GPU acceleration (transform, opacity)
- SVG animations are hardware-accelerated
- Responsive assets reduce bandwidth on mobile devices

## Deployment

Deploy this project on Vercel (recommended):

```bash
npm run build
```

Or deploy to any host that supports Next.js applications.

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For questions or issues, please open an issue in the repository.

---

**Happy coding! 🚀**
