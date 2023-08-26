import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/testimonials-grid-section-frontend-mentors",
  plugins: [react()],
  server: {
    port: 8000,
  },
})
