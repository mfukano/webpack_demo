var uuid = require('uuid');

module.exports = function (username) {
  return uuid.v4();
};
