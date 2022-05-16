module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
      "raleway":["Raleway","sans serif"],
      "source":["Source sans Pro", "sans serif"],
      "montserrat":["Montserrat","sans serif"],
    },
		extend: {
			colors: {
				primary: "#1C54A8" 
			},
			screens: {
				"sm": "430px",
			},
			gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
		}
  },
  plugins: [],
}
