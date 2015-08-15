import tape from 'tape';
import describe from '../describe';

import flexbox_IE2012 from '../../src/fixes/flexbox_IE2012';

describe('flexbox_IE2012', (it) => {
  it('should rename flex value to -ms-flexbox', (t) => {
    const actual = flexbox_IE2012('display', 'flex');
    const expected = {
      display: '-ms-flexbox',
    };

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should rename flex-start to start and justifyContent to MsFlexPack', (t) => {
    const actual = flexbox_IE2012('justifyContent', 'flex-start');
    const expected = {
      MsFlexPack: 'start',
    };

    t.deepEqual(actual, expected);

    t.end();
  });

  it('should properly handle alignItems: center', (t) => {
    const actual = flexbox_IE2012('alignItems', 'center');
    const expected = {
      MsFlexAlign: 'center',
    };

    t.deepEqual(actual, expected);

    t.end();
  });


});