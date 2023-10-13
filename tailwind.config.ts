import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        priamary:"#010709",
        pk:"#D058B7",
        pe:"#644898",
      },
      backgroundImage:{
        "gradient-pp" : " linear-gradient(#D058B7, #644898)"},
    },
  },
  plugins: [],
}
export default config
