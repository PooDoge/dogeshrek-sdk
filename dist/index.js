
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dogeshrek-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dogeshrek-sdk.cjs.development.js')
}
