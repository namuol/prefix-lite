const ALL = [
  'Moz',
  'Ms',
  'O',
  'Webkit',
];

const WEBKIT = ['Webkit'];
const WEBKIT_MOZ = ['Webkit', 'Moz'];
const WEBKIT_MS = ['Webkit', 'Ms'];

const DEFAULT_CONFIG = {
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
    'userSelect': ALL,
  },
}

export function config ({propertyPrefixes, prefixes}) {
  const propertyNames = Object.keys(propertyPrefixes);
  
  function matches (prop, value) {
    return propertyNames.indexOf(prop) > -1;
  }

  return function prefixProperty (prop, value) {
    if (!matches(prop, value)) {
      return {};
    }

    const prefixes = propertyPrefixes[prop];

    return prefixes.reduce((result, prefix) => {
      result[prefix + prop[0].toUpperCase() + prop.substr(1)] = value;
      return result;
    }, {});
  }
}

export default config(DEFAULT_CONFIG);