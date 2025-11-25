/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Paleta extraída de tu proyecto original para mantener identidad
                'light-background': '#F5F7FA',
                'dark-background': '#0F172A',
                'dark-surface': '#1E293B',
                'brand': '#3B82F6',
                'brand-hover': '#2563EB',
            },
        },
    },
    plugins: [],
}