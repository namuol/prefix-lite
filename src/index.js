import prefixProperty from './fixes/prefixProperty';
import renameProperty from './fixes/renameProperty';
import renameValue from './fixes/renameValue';
import flexbox_IE2012 from './fixes/flexbox_IE2012';

import merge from './merge';

const DEFAULT_CONFIG = {
  mutators: [
    prefixProperty,
    // renameProperty,
    renameValue,
    flexbox_IE2012,
  ],
};

export function config ({mutators}) {
  return function prefixLite (style) {
    return Object.keys(style).reduce((result, prop) => {

      return mutators.reduce((result, mutate) => {
        if (!Array.isArray(style[prop])) {
          return merge(result, mutate(prop, style[prop]));
        } else {
          return style[prop].reduce((result, value) => {
            return merge(result, mutate(prop, value));
          }, result);
        }
      }, result);

      return merge(style, mutantProperties);
    }, style);
  };
}

const DEFAULT = config(DEFAULT_CONFIG);

export default DEFAULT;