"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = merge;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function merge(a, b) {
  return Object.keys(a).reduce(function (result, key) {
    var aval = a[key];
    var bval = b[key];

    if (!!bval && bval !== aval) {
      (function () {
        var values = new Set();

        if (Array.isArray(aval)) {
          aval.forEach(function (val) {
            return values.add(val);
          });
        } else {
          values.add(aval);
        }

        if (Array.isArray(bval)) {
          bval.forEach(function (val) {
            return values.add(val);
          });
        } else {
          values.add(bval);
        }

        result[key] = [].concat(_toConsumableArray(values));
      })();
    }

    return result;
  }, Object.assign({}, a, b));
}

module.exports = exports["default"];