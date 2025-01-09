module.exports = {
  // Include paths to all component files
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
        inriaSans: ['Inria Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
