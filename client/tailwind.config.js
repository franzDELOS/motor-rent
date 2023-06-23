/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

          colors: {
            'forbg': '#404040;',
            'forcon': '#000',
            'fortxt': '#FFFFFF',
            'forlink': '#1EA1EC',
            'forbtn': '#005281',
            'forsbmt': '#0095D3',
            'foritem': '#404040'
            
          },

          spacing: {
            '31': '31.25rem',
            '35': '35rem',
            '33': '33%',
            'mt': '4%',
          'wbtn': ' 23.125rem',
          'hbtn': '2.75rem',
          'cont': '39.125rem',
          'inpth': '2.75rem',
          'nav': '6rem',
          'hlogo': '3.8125rem',
          'wlogo': '11rem',
          'wtitle': '30.0625rem',
          'wsearch': '25.4375rem',
          'hsearch': '1rem',
          'wfilter': '10.125rem',
          'hfilter': '3rem',
           'hitem2': '12.875rem',
           'wrent': '10.75rem',
           'hrent': '4.25rem',


             
          },
          fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
          },
           
          fontSize:{
            base: '32px',
            sm: '16px',
            nav: '18px',
            title: '48px',
            title2: '40px',
            rent: '24px',
          },
          borderRadius:{
            brs: '5px',
            
          },

    },
  },
  plugins: [],
}
