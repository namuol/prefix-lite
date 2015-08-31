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
      const styleProp = style[prop];

      return mutators.reduce((result, mutate) => {
        if (Array.isArray(styleProp)) {
          return styleProp.reduce((result, value) => {
            return merge(result, mutate(prop, value));
          }, result);
        } else if (typeof styleProp === 'object') {
          result[prop] = prefixLite(styleProp);
          return result;
        } else {
          return merge(result, mutate(prop, styleProp));
        }
      }, result);

    }, style);
  };
}

const DEFAULT = config(DEFAULT_CONFIG);

export default DEFAULT;