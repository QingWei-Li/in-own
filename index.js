'use strict'
var hasOwn = require('has-own-prop')

module.exports = function (obj) {
  return function (prop) {
    return hasOwn(obj, prop)
  }
}
