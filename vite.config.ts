import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the base path of your site.
  // For a GitHub project page, it's the name of the repository.
  base: '/Gyatri-Foundation-Test11/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})