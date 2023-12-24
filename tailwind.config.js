/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px'
        },
        colors: {
            body: '#e5e5e5',
            white: '#fff',
            green: {DEFAULT: '#539592', hover: '#40807d'},
            black: {DEFAULT: '#273029', heavy: '#1b211c'},
            grey: '#888888',
            orange: {DEFAULT: '#f2994a', hover: '#da863c'},
            outline: '#f1f1f1s',
            pink: 'ffa5a5'
        },
        extend: {
            fontFamily: {
                lora: ['var(--font-lora)', 'sans-serif'],
                poppins: ['var(--font-poppins)', 'sans-serif'],
            },
            backgroundImage: {
                hero: 'url(/hero/bg.png)',
                menu: 'url(/menu/bg.png)',
                reservation: 'url(/reservation/bg.png)',
                footer: 'url(/footer/bg.png)',
            },
            boxShadow: {
                primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25'
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}