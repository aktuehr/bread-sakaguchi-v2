import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": 'var(--color-primary)',
        "secondary": 'var(--color-secondary)',
        "accent-pink": 'var(--color-accent-pink)',
        "accent-green": 'var(--color-accent-green)',
        "text-primary": 'var(--color-text-primary)',
        "text-secondary": 'var(--color-text-secondary)',
        "text-disabled": 'var(--color-text-disabled)',
        "background-primary": 'var(--color-background-primary)',
        "background-secondary": 'var(--color-background-secondary)',
        "error": 'var(--color-error)',
        "success": 'var(--color-success)',
        "warning": 'var(--color-warning)',
        "info": 'var(--color-info)',
      },
    },
  },
  plugins: [],
};
export default config;
