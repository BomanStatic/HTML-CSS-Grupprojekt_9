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
                hero: "url('./assets/hero.jpg')",
                heroChild: "url('./assets/heroChild.jpg')",
                heroPocket: "url('./assets/heroPocket.jpg')",
                heroDetective: "url('./assets/heroDetective.jpg')",
            },
        },
    },
    plugins: [],
};
