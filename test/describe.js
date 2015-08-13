import tape from 'tape';

export default function describe (item, cb) {
  function it (capability, test) {
    tape.test(`${item} ${capability}`, (t) => {
      test(t);
    });
  }

  cb(it);
}