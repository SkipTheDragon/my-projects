import withMT from "@material-tailwind/react/utils/withMT.js";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        {
            pattern: /^text-[a-zA-Z]+-500$/,
        },
        {
            pattern: /^bg-[a-zA-Z]+-500$/,
        }
    ],
    theme: {
        extend: {},
    },
    plugins: [],
})

