import tape from 'tape';
import describe from '../describe';

import {config} from '../../src/fixes/prefixProperty';

describe('prefixProperty', (it) => {
  it('should add all specified prefixes', (t) => {
    const prefixProperty = config({
      propertyPrefixes: {
        'testProperty': ['Aa', 'Bb', 'Cc'],
      },
    });

    const actual = prefixProperty('testProperty', 'test-value');
    const expected = {
      AaTestProperty: 'test-value',
      BbTestProperty: 'test-value',
      CcTestProperty: 'test-value',
    };

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should not prefix non-matching properties', (t) => {
    const prefixProperty = config({
      propertyPrefixes: {
        'testProperty': ['Aa', 'Bb', 'Cc'],
      },
    });

    const actual = prefixProperty('nonMatchingProperty', 'test-value');
    const expected = {
    };

    t.deepEqual(actual, expected);

    t.end();
  });
});