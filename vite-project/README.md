# Credex Assignment Frontend

This is the frontend implementation for the Credex assignment. The project is built using **React**, **Tailwind CSS v4**, and **Framer Motion** for animations. It includes several reusable components with responsive design, dark mode support, and clean, modern UI/UX.

---

## 🕒 Time Spent

- **Total Duration**: ~11 hours  
- **Timeline**: Completed within the 48-hour brief window  
- **Breakdown**:  
  - Project setup & Tailwind integration: 1 hours  
  - Designing responsive layout: 2 hours  
  - Building and styling components: 3 hours  
  - Dark mode implementation: 2 hours  
  - Framer Motion animation setup: 1 hours  
  - Final testing, responsiveness & polish: 2 hours

---

## ✨ Features Implemented

### 1. Responsive Design
- Fully responsive layout using Tailwind CSS's `flex`, `grid`, and responsive breakpoints.
- Works seamlessly across mobile, tablet, and desktop screens.

### 2. Dark Mode
- Implemented using a floating `DarkModeToggle` component.
- Adds/removes the `dark` class to `<html>` element.
- Uses Tailwind’s `dark:` utilities for conditional styling.
- Preference is saved in `localStorage` and persists on reload.

### 3. Component-Based Architecture
- **Hero** – Clear branding and CTA.
- **How It Works** – Steps visualized with animated cards.
- **Why Choose Us** – Benefits with icons.
- **Testimonials** – Styled user reviews.
- **Contact Form** – Simple, styled input fields.
- **Chat Widget** – Placeholder for real-time support integration.
- **Dark Mode Toggle** – Floating button, responsive and theme-aware.

### 4. Animations
- Used **Framer Motion** for:
  - Fade-ins
  - Hover effects
  - Staggered entry animations

### 5. Custom CSS
- Custom styles written in `index.css` using `@apply`.
- Focused only on essential overrides (e.g. toggle button states).
- No use of `tailwind.config.js`, as per Tailwind v4 recommendation.

---

## 🎨 Design Choices

- **Clean and modern layout**, using minimal colors for clarity.
- **Dark mode-first approach** with strong contrast.
- **Iconography and whitespace** used to enhance readability.
- **Reusable components** for modular development.
- **Accessibility-aware** design for color contrast and button states.

---

## 🧪 Tailwind CSS v4 Note

Tailwind CSS v4 does not require `tailwind.config.js` for basic projects.

### `index.css` Custom Setup

```css
@import "tailwindcss";

/* Custom Variant for Dark Mode */
@custom-variant dark (&:where(.dark, .dark *));

/* Custom Styles for Dark Mode Toggle Button */
.dark-mode-toggle {
  @apply bg-gray-800 text-white;
}
.dark-mode-toggle:hover {
  @apply bg-gray-700;
}
.dark-mode-toggle:focus {
  @apply outline-none ring-2 ring-gray-600;
}
.dark-mode-toggle:active {
  @apply bg-gray-600;
}

/* Dark Mode Global Styles */
.dark body {
  @apply bg-gray-900 text-gray-100;
}

```


## 🚀 How to Use This Project

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

---

### 🛠️ Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/credex-frontend.git
   cd credex-frontend
2. **Install Dependencies**
npm install
**Run the Development Server**

npm run dev
