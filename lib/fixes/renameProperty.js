"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
var DEFAULT_CONFIG = {
  alternateProperties: {}
};

function config(_ref) {
  var alternateProperties = _ref.alternateProperties;

  var propertyNames = Object.keys(alternateProperties);

  function matches(prop, value) {
    return propertyNames.indexOf(prop) > -1;
  }

  return function renameProperty(prop, value) {
    if (!matches(prop)) {
      return {};
    }

    var alternates = alternateProperties[prop];

    return alternates.reduce(function (result, alternate) {
      result[alternate] = value;
      return result;
    }, {});
  };
}

exports["default"] = config(DEFAULT_CONFIG);