'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flexbox_IE2012;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _merge = require('../merge');

var _merge2 = _interopRequireDefault(_merge);

var FLEX_PROPERTIES = {
  alignItems: ['MsFlexAlign'],
  alignContent: ['MsFlexLinePack'],
  justifyContent: ['MsFlexPack'],
  flexGrow: ['MsFlexPositive'],
  flexShrink: ['MsFlexNegative']
};

var renameProperty = require('./renameProperty').config({
  alternateProperties: FLEX_PROPERTIES
});

var renameValue = require('./renameValue').config({
  alternateValues: {
    'flex': ['-ms-flexbox'],
    'flex-start': ['start'],
    'flex-end': ['end'],
    'space-around': ['distribute'],
    'space-between': ['justify']
  }
});

function flexbox_IE2012(prop, value) {
  var base = {};
  base[prop] = value;

  var propertyResults = Object.assign(base, renameProperty(prop, value));

  var result = Object.keys(propertyResults).reduce(function (result, prop) {
    if (Object.keys(FLEX_PROPERTIES).indexOf(prop) > -1) {
      return result;
    }

    return Object.assign(result, renameValue(prop, propertyResults[prop]));
  }, {});

  return result;
}

module.exports = exports['default'];