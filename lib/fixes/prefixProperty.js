'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.config = config;
var ALL = ['Moz', 'Ms', 'O', 'Webkit'];

var WEBKIT = ['Webkit'];
var WEBKIT_MOZ = ['Webkit', 'Moz'];
var WEBKIT_MS = ['Webkit', 'Ms'];

var DEFAULT_CONFIG = {
  propertyPrefixes: {
    'alignContent': WEBKIT,
    'alignItems': WEBKIT,
    'animation': WEBKIT,
    'animationDelay': WEBKIT,
    'animationDirection': WEBKIT,
    'animationDuration': WEBKIT,
    'animationFillMode': WEBKIT,
    'animationIterationCount': WEBKIT,
    'animationName': WEBKIT,
    'animationPlayState': WEBKIT,
    'animationTimingFunction': WEBKIT,
    'appearance': WEBKIT_MOZ,
    'backfaceVisibility': WEBKIT_MOZ,
    'contentColumns': ALL,
    'filter': WEBKIT,
    'flexDirection': WEBKIT_MS,
    'flexGrow': WEBKIT,
    'flexShrink': WEBKIT,
    'flexWrap': WEBKIT_MS,
    'justifyContent': WEBKIT,
    'perspective': ALL,
    'perspectiveOrigin': ALL,
    'transform': ALL,
    'transformOrigin': ALL,
    'transformStyle': ALL,
    'transition': ALL,
    'transitionDelay': ALL,
    'transitionDuration': ALL,
    'transitionProperty': ALL,
    'transitionTimingFunction': ALL,
    'userSelect': ALL
  }
};

function config(_ref) {
  var propertyPrefixes = _ref.propertyPrefixes;
  var prefixes = _ref.prefixes;

  var propertyNames = Object.keys(propertyPrefixes);

  function matches(prop, value) {
    return propertyNames.indexOf(prop) > -1;
  }

  return function prefixProperty(prop, value) {
    if (!matches(prop, value)) {
      return {};
    }

    var prefixes = propertyPrefixes[prop];

    return prefixes.reduce(function (result, prefix) {
      result[prefix + prop[0].toUpperCase() + prop.substr(1)] = value;
      return result;
    }, {});
  };
}

exports['default'] = config(DEFAULT_CONFIG);