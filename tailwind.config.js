module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
      "raleway":["Raleway","sans serif"],
      "source":["Source+sans+Pro", "sans serif"],
      "montserrat":["Montserrat","sans serif"],
    },
		extend: {
			colors: {
				primary: "#1C54A8" 
			},
			screens: {
				"sm": "430px",
			}
		}
  },
  plugins: [],
}
