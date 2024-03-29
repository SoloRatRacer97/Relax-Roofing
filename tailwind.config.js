/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1336px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
    extend: {
      colors: {
        "cws-blue": "#2966cc",
        "cws-dark": "#1E3B55",
        "cws-blue-dark": "#2254AA",
        border: "hsl(210, 50%, 20%)", // Deep Blue
        input: "hsl(2, 63%, 37%)", // Warm Red
        ring: "hsl(48, 100%, 51%)", // Bright Yellow
        background: "hsl(0, 0%, 89%)", // Light Gray
        foreground: "hsl(0, 0%, 20%)", // Charcoal Gray
        primary: "#2D3F92", // Blue
        primaryDark: "#2C2665", //Dark Blue
        secondary: "#425CA7", // Light Blue
        neutral: "#E7E9EF", // Light Gray
        accent: "#532570", // Sir Suds Purple
        danger: "#FF0000",
        destructive: "#FF0000",
        // Single Service
        ssPrimary: "#F1971A",
        ssPrimaryDark: "#EF8C03",
        ssSecondary: "#FAD36D",
        ssSecondaryDark: "#FFC52C",
        ssNeutral: "#67BC8C",
        ssNeutralDark: "#4A9269",
        ssAccet: "#09589E",
        // Professional Service
        spPrimary: "#1A4883",
        spPrimaryDark: "#1A4270",
        spNeutral: "#6784A7",
        spSecondary: "#A2CBE7",
        spAccent: "#B2C9CB",
        // Store
        stPrimary: "#D32F2F",
        stPrimaryDark: "#B81212",
        stSecondary: "#5D4037",
        stSecondaryDark: "#3F2821",
        stAccent: "#AED581",
        stAccentDark: "#99BE70",
        stNeutral: "#FFB74D",
        stBackground: "#FFF3E0",
        // Consultant 
        consPrimary: "#003366",
        consPrimaryDark: "#002B57",
        consSecondary: "#8B0000",
        consSecondaryDark: "#730000",
        consAccent: "#4D4D4D",
        consAccentDark: "",
        constNeutral: "#F5F5F5",
        constBackground: "#D9D9D9"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'], // Assuming 'cursive' as the fallback
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
