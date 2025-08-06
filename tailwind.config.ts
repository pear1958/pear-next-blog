import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{tsx,html,ts}',
  ],
  theme: {
    extend: {
      // 自定义主题配置（如颜色、字体等）
      colors: {
        primary: '#165DFF',
      },
    },
  },
  plugins: [],
}

export default config
