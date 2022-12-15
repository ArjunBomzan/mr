/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./pages/*.{html,js,jsx}"

  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      backgroundImage: {
        'statistics-bg': "url('/assets/homePage/statistics-bg.jpg')",
        'testimonials': "url('/src/assets/testimonial.jpg')",
        'blogs': "url('/src/assets/blog-splash.jpg')",
        'splash-ed': "url('/src/assets/splash-education.jpg')",
      }, colors: {
        'mask': 'rgba(0,0,0,0.75)',
        'light-mask': 'rgba(0,0,0,0.50)',
        'mask-white': 'rgba(256,256,256,0.50)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}
