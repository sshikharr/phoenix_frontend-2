/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif']
      },
      colors:{
        "home-bg": "#F8FC34",
        'home-bg-black': "#282829",
        'sub-text-best': "#808080",
        'team-company': "#909090",
        'arrivals-rating': "#666666",
        'awards-text': "#323232",
        'discount-bg': "#F55151",
        'placeholder-text': "#A5A5A5",
        'copyright-text': "#7A7A7A",
        'text-light-gray': "#939393",
        'drop-white': "#F2F2F2",
        'off-text': "#FF5656",
        'gray-price': "#777777",
        'tax-text': "#898989",
        'quantity-text': "#373737",
        'quantity-value': "#3B3B3B",
        'quantity-border': "#B8B8B8",
        'check-border': "#C9C9C9",
        'order-line': "#ADADAD",
        'auth-bg': "#292829",
        'auth-border': "#B2B2B2"
        

      },
      fontSize: {
        // Heading sizes
        'h1-mobile': ['32px', '1.2'], // Font size, Line height
        'h1-tablet': ['36px', '1.2'],
        'h1-desktop': ['48px', '1.2'],

        'h2-mobile': ['24px', '1.2'],
        'h2-tablet': ['28px', '1.2'],
        'h2-desktop': ['36px', '1.2'],

        // Subheading sizes
        'h3-mobile': ['20px', '1.3'],
        'h3-tablet': ['24px', '1.3'],
        'h3-desktop': ['28px', '1.3'],

        'h4-mobile': ['18px', '1.3'],
        'h4-tablet': ['20px', '1.3'],
        'h4-desktop': ['24px', '1.3'],

        // Body text sizes
        'body-mobile': ['14px', '1.5'],
        'body-tablet': ['16px', '1.6'],
        'body-desktop': ['18px', '1.6'],

        // Subtext sizes
        'subtext-mobile': ['12px', '1.4'],
        'subtext-tablet': ['14px', '1.4'],
        'subtext-desktop': ['16px', '1.4'],
      },
      
      
     
    },
  },
  plugins: [],
}

