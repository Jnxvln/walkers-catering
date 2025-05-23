const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@styles': 'src/styles',
    '@store': 'src/store',
    '@utils': 'src/utils',
    '@views': 'src/views',
    '@features': 'src/features',
    '@images': 'src/assets/images',
  })(config)

  return config
}
