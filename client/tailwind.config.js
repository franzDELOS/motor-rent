/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< Updated upstream
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
=======

          colors: {
            'forbg': '#404040;',
            'forcon': '#000',
            'fortxt': '#FFFFFF',
            'forlink': '#1EA1EC',
            'forbtn': '#005281',
            'forsbmt': '#0095D3',
            'foritem': '#404040',
            
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
          'hitem': ' 37.5rem;',
          'hitem2': '12.875rem', 
          'mtprice': '24%',
          'hrent': '4.25rem',
          'wrent': '10.75rem',


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
            rent: '24px'
          },
          borderRadius:{
            brs: '5px',
            
          },
>>>>>>> Stashed changes
    },
  },
  plugins: [],
}
