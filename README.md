# @mhafemann/figures
[![GitHub](https://img.shields.io/github/package-json/v/mhafemann/figures)](https://www.npmjs.com/package/@mhafemann/figures)  [![license](https://img.shields.io/github/license/mhafemann/figures)](https://github.com/mhafemann/figures/blob/main/LICENSE)

This package provides Unicode symbols with Windows-compatible fallbacks.

- [Installation](#installation)
- [Usage](#usage)
- [Figures](#figures)

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

## Figures

| Name | Symbol | Windows Fallback |
| - | - | - |
|tick | '✔' | '√' |
|info | 'ℹ' | 'i' |
|warning | '⚠' | '‼' |
|cross | '✘' | '×' |
|squareSmall | '◻' | '□' |
|squareSmallFilled | '◼' | '■' |
|circle | '◯' | '( )' |
|circleFilled | '◉' | '(*)' |
|bullet | '●' | '>>' |
|pointer | '❯' | '>' |
|arrowUp | '↑' | '^' |
|arrowDown | '↓' | 'V' |
|arrowLeft | '←' | '->' |
|arrowRight | '→' | '<-' |
