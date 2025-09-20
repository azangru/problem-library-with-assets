import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts()
  ],
  base: '',
  build: {
    lib: {
      entry: [
        'components/icon-buttons/delete-button.ts'
      ],
      formats: ['es'],
    },
    // assetsInlineLimit: 0, // force file emission
    rollupOptions: {
      output: {
        preserveModulesRoot: '.',
        preserveModules: true
      },
      external: /^lit/,
    }
  }
});