const DEFAULT_CONFIG = {
  alternateProperties: {
  },
};

export function config ({alternateProperties}) {
  const propertyNames = Object.keys(alternateProperties);

  function matches (prop, value) {
    return propertyNames.indexOf(prop) > -1;
  }

  return function renameProperty (prop, value) {
    if (!matches(prop)) {
      return {};
    }

    const alternates = alternateProperties[prop];

    return alternates.reduce((result, alternate) => {
      result[alternate] = value;
      return result;
    }, {});
  }
}

export default config(DEFAULT_CONFIG);