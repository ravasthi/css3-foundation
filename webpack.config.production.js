const common = require('./webpack.config.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
});
