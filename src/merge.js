export default function merge (a, b) {
  return Object.keys(a).reduce((result, key) => {
    const aval = a[key];
    const bval = b[key];

    if (!!bval && bval !== aval) {
      const values = new Set;

      if (Array.isArray(aval)) {
        aval.forEach(val => values.add(val));
      } else {
        values.add(aval);
      }

      if (Array.isArray(bval)) {
        bval.forEach(val => values.add(val));
      } else {
        values.add(bval);
      }

      result[key] = [...values];
    }

    return result;
  }, {...a, ...b});
}
