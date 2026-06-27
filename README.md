# Karibu Kitchen

Karibu Kitchen is a modern restaurant website built with Next.js, React, TypeScript, and Tailwind CSS. The project presents an East African-inspired restaurant experience with a polished homepage, menu page, booking flow, and contact form.

The goal of this project was to practice building a production-ready frontend with reusable components, responsive layouts, accessible navigation, and clean data-driven UI patterns.

## Features

- Responsive homepage with a premium hero carousel
- Restaurant quick info section with opening hours, location, and contact details
- Menu preview section powered by shared menu data
- Full menu page with category-based filtering
- Reusable menu item cards with optimized images
- About section with restaurant storytelling
- Multi-step booking form with validation and confirmation state
- Contact and events inquiry form with controlled inputs
- Accessible internal navigation using Next.js Link
- Mobile-first styling with Tailwind CSS

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next Image
- ESLint

## What I Learned

During this project, I practiced building a structured React and Next.js frontend using reusable components and shared data. I worked with data arrays, `.map()`, `.filter()`, controlled forms, conditional rendering, and component-based page sections.

I also focused on responsive design, accessible navigation, optimized images with Next Image, and keeping the UI consistent across the homepage and menu page.

## Project Structure

The homepage is divided into focused sections:

- `Header`
- `HeroSection`
- `QuickInfoSection`
- `MenuSection`
- `AboutSection`
- `BookingSection`
- `ContactSection`
- `Footer`

Menu data is stored separately and reused across the homepage menu preview and the full menu page.

## How to Run Locally

Clone the project and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Status

The frontend homepage and menu page are complete. The project currently uses frontend-only form handling for booking and contact interactions.
