/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E9',
        sage: '#8A9B68',
        'sage-dark': '#6F7F52',
        teal: '#5D8AA8',
        'teal-dark': '#476F8C',
        coral: '#E8A87C',
        gold: '#D4B896',
        offwhite: '#F9F7F3',
        charcoal: '#2E2E2E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(46, 46, 46, 0.18)',
      },
    },
  },
  plugins: [],
};
