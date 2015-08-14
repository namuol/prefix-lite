'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.config = config;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fixesPrefixProperty = require('./fixes/prefixProperty');

var _fixesPrefixProperty2 = _interopRequireDefault(_fixesPrefixProperty);

var _fixesRenameProperty = require('./fixes/renameProperty');

var _fixesRenameProperty2 = _interopRequireDefault(_fixesRenameProperty);

var _fixesRenameValue = require('./fixes/renameValue');

var _fixesRenameValue2 = _interopRequireDefault(_fixesRenameValue);

var _fixesFlexbox_IE2012 = require('./fixes/flexbox_IE2012');

var _fixesFlexbox_IE20122 = _interopRequireDefault(_fixesFlexbox_IE2012);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var DEFAULT_CONFIG = {
  mutators: [_fixesPrefixProperty2['default'],
  // renameProperty,
  _fixesRenameValue2['default'], _fixesFlexbox_IE20122['default']]
};

function config(_ref) {
  var mutators = _ref.mutators;

  return function prefixLite(style) {
    return Object.keys(style).reduce(function (result, prop) {

      return mutators.reduce(function (result, mutate) {
        if (!Array.isArray(style[prop])) {
          return (0, _merge2['default'])(result, mutate(prop, style[prop]));
        } else {
          return style[prop].reduce(function (result, value) {
            return (0, _merge2['default'])(result, mutate(prop, value));
          }, result);
        }
      }, result);

      return (0, _merge2['default'])(style, mutantProperties);
    }, style);
  };
}

var DEFAULT = config(DEFAULT_CONFIG);

exports['default'] = DEFAULT;