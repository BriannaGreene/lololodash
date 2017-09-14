const _ = require('lodash')
let worker = function(arr) {
  console.log(_.sortBy(arr, 'quantity'))
  return _.sortBy(arr, 'quantity')
}
module.exports = worker
