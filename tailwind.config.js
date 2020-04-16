/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {},
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%'
          },
          '@screen md': {
            maxWidth: '800px'
          },
          '@screen lg': {
            maxWidth: '900px'
          },
          '@screen xl': {
            maxWidth: '1000px'
          }
        }
      })
    }
  ]
}
