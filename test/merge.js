import tape from 'tape';
import describe from './describe';

import merge from '../src/merge';

describe('merge', (it) => {
  it('should cleanly merge empty objects', (t) => {
    const actual = merge({}, {});
    const expected = {};

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should combine unique key:value pairs from both objects', (t) => {
    const actual = merge({a:1}, {b:2});
    const expected = {a:1, b:2};

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should create arrays containing both values for duplicate properties', (t) => {
    const actual = merge({a:1}, {a:2});
    const expected = {a: [1, 2]};

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should merge arrays of values', (t) => {
    const actual = merge({a:[1,2]}, {a:[3,4]});
    const expected = {a: [1, 2, 3, 4]};

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should discard duplicates from arrays', (t) => {
    const actual = merge({a:1}, {a:[1,2,3,4]});
    const expected = {a: [1, 2, 3, 4]};

    t.deepEqual(actual, expected);

    t.end();
  });
});