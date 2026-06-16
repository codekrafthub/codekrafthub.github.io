# CodeKraft Website

This is a [Next.js](https://nextjs.org) application for the CodeKraft website. It has been migrated from a legacy static site architecture into a modern component-based React ecosystem.

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with vanilla CSS
- **Deployment**: Static Export (`next build`)

## Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture & Project Structure

The project uses a component-centric architecture:

- `/app`: Contains the root layout, global styles, and page compositions.
  - `globals.css`: Holds all design tokens (CSS variables) and base styles.
  - `page.tsx`: The main landing page, which simply composes components from `/components`.
- `/components`: Each component is isolated in its own directory with a `[Name].tsx` and `[Name].module.css` file.
  - To modify the Hero section, you only need to look at `components/Hero/`.
  - CSS Modules guarantee that styles are scoped and won't break other parts of the site.
- `/hooks`: Custom React hooks, such as `useScrollReveal` for intersection observer fade-ins.
- `/public`: Static assets (images, fonts, SEO files).

## Best Practices: 

1. **Component Mentality**: Always locate the specific component directory in `/components` before modifying UI. Do not add inline styles unless necessary; use the component's `module.css`.
2. **CSS Variables**: When assigning colors, refer to `app/globals.css` to use existing variables like `var(--primary)` and `var(--accent)`.
3. **TypeScript**: Leverage TypeScript interfaces for component props. Avoid `any`.
4. **Alfaaz**: Note that the `/alfaaz` sub-project has been left as static HTML/JS inside the root directory and is *not* part of the Next.js build. Ignore it unless explicitly instructed to modify it.

## Deployment

To create a production build:

```bash
npm run build
```

This will generate a static HTML/CSS/JS export in the `/out` directory, which can be hosted on GitHub Pages or any static file server.