'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;
exports.config = config;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var DEFAULT_CONFIG = {
  alternateValues: {
    'flex': ['-webkit-box', '-webkit-flex']
  }
};

function config(_ref) {
  var alternateValues = _ref.alternateValues;

  var valueNames = Object.keys(alternateValues);

  function matches(value) {
    return valueNames.indexOf(value) > -1;
  }

  return function renameValue(prop, value) {
    if (!matches(value)) {
      return {};
    }

    var alternates = alternateValues[value];
    var result = {};
    if (alternates.length > 1) {
      result[prop] = new (_bind.apply(Array, [null].concat(_toConsumableArray(alternates))))();
    } else if (alternates.length === 1) {
      result[prop] = alternates[0];
    }

    return result;
  };
}

exports['default'] = config(DEFAULT_CONFIG);