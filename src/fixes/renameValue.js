const DEFAULT_CONFIG = {
  alternateValues: {
    'flex': [
      '-webkit-box',
      '-webkit-flex',
    ],
  },
};

export function config ({alternateValues}) {
  const valueNames = Object.keys(alternateValues);

  function matches (value) {
    return valueNames.indexOf(value) > -1;
  }

  return function renameValue (prop, value) {
    if (!matches(value)) {
      return {};
    }

    const alternates = alternateValues[value];
    const result = {};
    if (alternates.length > 1) {
      result[prop] = new Array(...alternates);
    } else if (alternates.length === 1) {
      result[prop] = alternates[0];
    }

    return result;
  }
}

export default config(DEFAULT_CONFIG);