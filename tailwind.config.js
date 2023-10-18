/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#58BDAB",
                secondary: "#2B414E",
                secondaryDark: "#233844",
            },
            backgroundImage: {
                hero: "url('./assets/hero.webp')",
                heroChild: "url('./assets/heroChild.webp')",
                heroPocket: "url('./assets/heroPocket.webp')",
                heroDetective: "url('./assets/heroDetective.webp')",
            },
        },
    },
    plugins: [],
};
