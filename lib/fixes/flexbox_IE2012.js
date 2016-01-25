'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  var propertyResults = _extends({}, base, renameProperty(prop, value));

  var result = Object.keys(propertyResults).reduce(function (result, prop) {
    if (Object.keys(FLEX_PROPERTIES).indexOf(prop) > -1) {
      return result;
    }

    var base = {};
    base[prop] = propertyResults[prop];

    var withRenamedValues = renameValue(prop, propertyResults[prop]);

    return _extends({}, result, base, withRenamedValues);
  }, {});

  return result;
}

module.exports = exports['default'];