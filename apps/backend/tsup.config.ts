import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  format: 'esm',
  clean: true,
  outDir: 'dist',
  esbuildOptions(options) {
    options.legalComments = 'inline';
  },
});
