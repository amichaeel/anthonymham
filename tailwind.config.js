/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      future: {
        hoverOnlyWhenSupported: true,
      },
      display: ["group-hover"],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        text: 'text 5s ease infinite',
        bounce: 'bounce 2s infinite',
        shine: 'shine 0.6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        shine: {
          '0%, 100%': {
            'opacity': '100%',
            'transform': 'scale(1)'
          },
          '50%': {
            'opacity': '60%',
            'transform': 'scale(1.02)'
          },
        },
        fadeIn: {
          '0%': {
            'opacity': '0%',
          },
          '100%': {
            'opacity': '100%',
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
