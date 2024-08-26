/**
 * @type {import('prettier').Config &
 *   import('prettier-plugin-jsdoc').Options}
 */
export default {
  plugins: [
    /**
     * @see {@link https://www.npmjs.com/package/prettier-plugin-jsdoc} npm
     */
    'prettier-plugin-jsdoc',

    /**
     * @see {@link https://www.npmjs.com/package/prettier-plugin-astro} npm
     */
    'prettier-plugin-astro',
  ],

  /**
   * @see {@link https://prettier.io/docs/en/options}
   */
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',

  /**
   * @see {@link https://github.com/hosseinmd/prettier-plugin-jsdoc#options}
   */
  tsdoc: true,
  jsdocCapitalizeDescription: false,
  jsdocCommentLineStrategy: 'multiline',
  jsdocKeepUnParseAbleExampleIndent: true,
  jsdocPreferCodeFences: true,
  jsdocSingleLineComment: false,
  jsdocVerticalAlignment: true,

  /**
   * @see {@link https://github.com/withastro/prettier-plugin-astro#configuration}
   */
  astroAllowShorthand: false,

  /**
   * @see {@link https://prettier.io/docs/en/configuration.html#configuration-overrides}
   */
  overrides: [
    { files: ['**/*.svg'], options: { parser: 'html' } },
    { files: ['**/*.astro'], options: { parser: 'astro' } },
  ],
};
