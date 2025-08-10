import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, 'src'),
    },
  },
});
