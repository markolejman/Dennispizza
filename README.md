# Dennis Kök - Restaurant Website

A modern, responsive restaurant website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, premium design with **light theme** and authentic pizza colors
  - Green (#207C50) - Primary brand color
  - Beige (#F3DEA5) - Secondary warm accent
  - Red (#DA594A) - Accent highlights
- 📱 Fully responsive (mobile-first approach)
- ♿ WCAG 2.1 Level AA accessibility compliance
- 🎭 Smooth animations with Framer Motion
- 🍕 Interactive menu with category filtering
- 📍 Integrated Google Maps
- 🔗 Social media integration
- ⚡ Optimized for performance

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Add images to the `public` folder:
   - `logo.jpg` - Restaurant logo (already included)
   - `pizza-hero.svg` - Hero section background image (placeholder included)
   - **Note**: You can replace `pizza-hero.svg` with your own high-quality pizza image (`pizza-hero.jpg` or `pizza-hero.png`) for a better look

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── navbar.tsx      # Navigation bar
│   ├── hero.tsx        # Hero section
│   ├── menu.tsx        # Interactive menu
│   ├── contact.tsx     # Contact information
│   ├── about.tsx       # About section
│   ├── location.tsx    # Google Maps integration
│   ├── footer.tsx      # Footer
│   └── ui/             # UI components
├── hooks/
│   └── use-in-view.ts  # Intersection Observer hook
└── lib/
    └── utils.ts        # Utility functions
```

## Customization

### Menu Items

Edit the menu data in `lib/menu-data.ts`:

```typescript
export const menuData: MenuCategory[] = [
  {
    id: "standard-pizzor",
    name: "Standard Pizzor",
    items: [
      { name: "Margherita", description: "...", price: "120 kr" },
      // Add more items...
    ],
  },
  // Add more categories...
];
```

### Contact Information

Update contact details in `components/contact.tsx`.

### Colors

Modify the color scheme in `app/globals.css` by changing the CSS variables.

## Deployment

Build the production version:

```bash
npm run build
npm start
```

## License

© 2026 Dennis Kök. All rights reserved.

Website created by [LEJTECH](https://www.lejtech.se/)
