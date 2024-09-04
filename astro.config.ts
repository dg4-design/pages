import { defineConfig } from 'astro/config';

/**
 * @see {@link https://astro.build/config} Documents
 */
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.SERVICE_DOMAIN': JSON.stringify(
        process.env.SERVICE_DOMAIN,
      ),
      'import.meta.env.API_KEY': JSON.stringify(process.env.API_KEY),
    },
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
