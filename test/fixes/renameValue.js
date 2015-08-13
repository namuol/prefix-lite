import tape from 'tape';
import describe from '../describe';

import {config} from '../../src/fixes/renameValue';

describe('renameValue', (it) => {
  it('should add all specified alternate properties', (t) => {
    const renameValue = config({
      alternateValues: {
        'test-value': ['test-value-a', 'test-value-b'],
      },
    });

    const actual = renameValue('testProperty', 'test-value');
    const expected = {
      testProperty: [
        'test-value-a',
        'test-value-b',
      ],
    };

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should output non-array values when there\'s only one result', (t) => {
    const renameValue = config({
      alternateValues: {
        'test-value': ['test-value-a'],
      },
    });

    const actual = renameValue('testProperty', 'test-value');
    const expected = {
      testProperty: 'test-value-a',
    };

    t.deepEqual(actual, expected);

    t.end();
  });
});