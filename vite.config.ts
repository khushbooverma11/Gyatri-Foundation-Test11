// c:\Users\khushbooo\IdeaProjects\gayatri-foundation-learn\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };

  if (command === 'build') {
    // This line is the key! It sets the correct path for GitHub Pages.
    config.base = '/Gyatri-Foundation-Test11/';
  }

  return config;
});
