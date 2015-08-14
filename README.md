# prefix-lite

**NOTE:** This is experimental software; please [report issues](https://github.com/namuol/prefix-lite/issues).

A **lightweight**, **isometric** solution for prefixing styles in JavaScript.

```js
import prefix from 'prefix-lite';

const prefixed = prefix({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flexOrder: 3,

  filter: 'blur(500px)',
});

console.log(prefixed);

// Result:
// {
//   display: [
//     'flex',
//     '-webkit-flex',
//     '-ms-flexbox'
//   ],
//   flexDirection: 'column',
//   justifyContent: 'flex-end',
//   flexOrder: 3,
//   filter: 'blur(500px)',
//   MozJustifyContent: 'flex-end',
//   MsJustifyContent: 'flex-end',
//   OJustifyContent: 'flex-end',
//   WebkitJustifyContent: 'flex-end',
//   MsFlexPack: 'end',
//   MozFilter: 'blur(500px)',
//   MsFilter: 'blur(500px)',
//   OFilter: 'blur(500px)',
//   WebkitFilter: 'blur(500px)'
// }
```

## Why not just use Autoprefixer?

This project is for people who need to render dynamic styles **in the browser**, and was designed to be used with [free-style](https://github.com/blakeembrey/free-style).

Autoprefix was never really meant to run client-side; bundling it will add **several megabytes** to your bundle size.

## Why not just use -prefix-free, et al?

`-prefix-free` is an awesome solution, but wont solve your problem if you want to serve static CSS that 
is immediately-viewable; furthermore, if you serve your CSS over HTTPS, many browsers will throw security exceptions.

## License

MIT

## Install

```sh
npm install prefix-lite
```
