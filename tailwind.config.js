/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'main': "#ff7f11",
        'secondary': "#ff785a",
        'bg-color': "#fffef1",
        'text-body': "#191919",
        'field-1': "#fff3dd",
        'field-2': "#f2ddff",
        'field-3': "#ffdddd",
        'field-4': "#ddffe7",
        'field-5': "#ddf3ff",
      },
      fontFamily: {
        'paytone-one': ['Paytone One', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

