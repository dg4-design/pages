import { defineConfig } from 'astro/config';

/**
 * @see {@link https://astro.build/config} Documents
 */
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `\n@use 'src/styles' as *;\n`,
        },
      },
    },

    build: {
      assetsInlineLimit: 0,
    },
  },
});
