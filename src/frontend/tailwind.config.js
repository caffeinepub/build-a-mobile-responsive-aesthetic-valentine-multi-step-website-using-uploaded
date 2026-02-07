import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                rose: {
                    50: 'oklch(0.97 0.015 15)',
                    100: 'oklch(0.95 0.03 15)',
                    200: 'oklch(0.90 0.06 15)',
                    300: 'oklch(0.82 0.12 15)',
                    400: 'oklch(0.70 0.18 15)',
                    500: 'oklch(0.55 0.20 15)',
                    600: 'oklch(0.45 0.18 15)',
                    700: 'oklch(0.35 0.15 15)',
                    800: 'oklch(0.28 0.12 15)',
                    900: 'oklch(0.22 0.10 15)',
                },
                pink: {
                    50: 'oklch(0.97 0.02 340)',
                    100: 'oklch(0.94 0.04 340)',
                    200: 'oklch(0.88 0.08 340)',
                    300: 'oklch(0.80 0.14 340)',
                    400: 'oklch(0.68 0.18 340)',
                    500: 'oklch(0.58 0.20 340)',
                    600: 'oklch(0.48 0.18 340)',
                    700: 'oklch(0.38 0.15 340)',
                    800: 'oklch(0.30 0.12 340)',
                    900: 'oklch(0.24 0.10 340)',
                },
                red: {
                    50: 'oklch(0.96 0.03 25)',
                    100: 'oklch(0.93 0.06 25)',
                    200: 'oklch(0.87 0.12 25)',
                    300: 'oklch(0.78 0.18 25)',
                    400: 'oklch(0.66 0.22 25)',
                    500: 'oklch(0.55 0.24 25)',
                    600: 'oklch(0.45 0.22 25)',
                    700: 'oklch(0.36 0.18 25)',
                    800: 'oklch(0.29 0.14 25)',
                    900: 'oklch(0.23 0.11 25)',
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)',
                '3xl': 'calc(var(--radius) + 12px)',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                soft: '0 4px 20px rgba(255, 182, 193, 0.3)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            fontFamily: {
                handwriting: ['Brush Script MT', 'Lucida Handwriting', 'Apple Chancery', 'cursive'],
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
