const FLEX_PROPERTIES = {
  alignItems: [
    'MsFlexAlign',
  ],
  alignContent: [
    'MsFlexLinePack',
  ],
  justifyContent: [
    'MsFlexPack',
  ],
  flexGrow: [
    'MsFlexPositive',
  ],
  flexShrink: [
    'MsFlexNegative',
  ],
};

const renameProperty = require('./renameProperty').config({
  alternateProperties: FLEX_PROPERTIES,
});

const renameValue = require('./renameValue').config({
  alternateValues: {
    'flex': [
      '-ms-flexbox',
    ],
    'flex-start': [
      'start',
    ],
    'flex-end': [
      'end',
    ],
    'space-around': [
      'distribute',
    ],
    'space-between': [
      'justify',
    ],
  },
});

import merge from '../merge';

export default function flexbox_IE2012 (prop, value) {
  const base = {};
  base[prop] = value;

  const propertyResults = {...base, ...renameProperty(prop, value)};

  const result = Object.keys(propertyResults).reduce((result, prop) => {
    if (Object.keys(FLEX_PROPERTIES).indexOf(prop) > -1) {
      return result;
    }

    const base = {};
    base[prop] = propertyResults[prop];

    const withRenamedValues = renameValue(prop, propertyResults[prop]);

    return {...result, ...base, ...withRenamedValues};
  }, {});

  return result;
}
