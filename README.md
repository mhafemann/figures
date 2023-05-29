# @mhafemann/figures
![GitHub](https://img.shields.io/github/package-json/v/mhafemann/figures)


This package provides Unicode symbols with Windows-compatible fallbacks.

- [Installation](#installation)
- [Usage](#usage)

This package is a customized version of the [figures](https://github.com/sindresorhus/figures) package written by [ Sindre Sorhus](https://github.com/sindresorhus).

## Installation

```bash
npm i @mhafemann/figures
```

## Usage
ES6
```js
import figures from '@mhafemann/figures';

console.log(figures.tick); // >> ✔ Or on Winodws >> √
```

CommonJS
```js
const figures = require('@mhafemann/figures');
```

