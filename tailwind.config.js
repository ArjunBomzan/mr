/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./pages/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      screens:{
        "mine":"361px", // landscape view mobiles
        "sm":"576px", // landscape view mobiles
        "md":"768px", // tabs
        "lg":"1024px", //  small laptops
        "xl":"1280px", // desktops
        "2xl":"1536px", // large monitors
      },
      colors: {
        primary: "#018343", // 800
        "primary-light": "#EDFFF5", //50
        "primary-dark": "#036436", //900
        secondary: "#E27C00",  //600
        "secondary-dark": "#7C360B",  //900
        green: "#018343",
        body: "#686163",
        border: "#DDDADB", // gray-200
        "green-50": "#EDFFF5",
        "green-100": "#D3FFEA",
        "green-200": "#ABFFD6",
        "green-300": "#6AFFB7",
        "green-400": "#23FF91",
        "green-500": "#00F072",
        "green-600": "#00C95A",
        "green-700": "#009D4A",
        "green-800": "#018343", //main
        "green-900": "#036436",
        "green-950": "#00391B",
        white: "#FFFFFF",
        "white-50": "#FFFFFF", // main
        "white-100": "#EFEFEF",
        "white-200": "#DCDCDC",
        "white-300": "#BDBDBD",
        "white-400": "#989898",
        "white-500": "#7C7C7C",
        "white-600": "#656565",
        "white-700": "#525252",
        "white-800": "#464646",
        "white-900": "#3D3D3D",
        "white-950": "#292929",
        gray: "#F8F7F8",
        "gray-50": "#F8F7F8",
        "gray-100": "#F0EEEE",
        "gray-200": "#DDDADB",
        "gray-300": "#BFBABB",
        "gray-400": "#9C9496",
        "gray-500": "#80777A",
        "gray-600": "#686163",// body color
        "gray-700": "#554F51", 
        "gray-800": "#484445",
        "gray-900": "#433F40",
        "gray-950": "#2A2728",
        orange: "#E27C00",
        "orange-50": "#FFFCEA",
        "orange-100": "#FFF5C5",
        "orange-200": "#FFEB85",
        "orange-300": "#FFDA46",
        "orange-400": "#FFC71B",
        "orange-500": "#FFA500",
        "orange-600": "#E27C00", //main
        "orange-700": "#BB5502",
        "orange-800": "#984208",
        "orange-900": "#7C360B",
        "orange-950": "#481A00",
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}
