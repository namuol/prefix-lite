import tape from 'tape';
import describe from '../describe';

import {config} from '../../src/fixes/renameProperty';

describe('renameProperty', (it) => {
  it('should add all specified alternate properties', (t) => {
    const renameProperty = config({
      alternateProperties: {
        testProperty: ['testProperty_a', 'testProperty_b'],
      },
    });

    const actual = renameProperty('testProperty', 'test-value');
    const expected = {
      testProperty_a: 'test-value',
      testProperty_b: 'test-value',
    };

    t.deepEqual(actual, expected);

    t.end();
  });
});