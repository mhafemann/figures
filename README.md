# @mhafemann/figures
[![GitHub](https://img.shields.io/github/package-json/v/mhafemann/figures)](https://www.npmjs.com/package/@mhafemann/figures) [![license](https://img.shields.io/github/license/mhafemann/figures)](https://github.com/mhafemann/figures/blob/main/LICENSE) ![Minified / Gzipped](https://img.shields.io/badge/Min%2FGzip%20-1.19%20KiB%20-blue)

This package provides Unicode symbols with Windows-compatible fallbacks.

- [Installation](#installation)
- [Usage](#usage)
- [Figures](#figures)

This package is a customized version of the [figures](https://github.com/sindresorhus/figures) package written by [ Sindre Sorhus](https://github.com/sindresorhus).

## Installation

```zsh
pnpm i @mhafemann/figures
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

| Name              | Symbol | Windows Fallback |
|-------------------|--------|------------------|
| arrowDown         | ↓      | ↓                |
| arrowLeft         | ←      | ←                |
| arrowRight        | →      | →                |
| arrowUp           | ↑      | ↑                |
| bullet            | ●      | ●                |
| circle            | ◯      | ( )              |
| circleFilled      | ◉      | (*)              |
| cross             | ✘      | ×                |
| heart             | ♥      | ♥                |
| home              | ⌂      | ⌂                |
| info              | ℹ      | i                |
| line              | -      | -                |
| lineVertical      | │      | │                |
| pointer           | ❯      | >                |
| squareSmall       | ◻      | ◻                |
| squareSmallFilled | ◼      | ◼                |
| tick              | ✔      | √                |
| warning           | ⚠      | ‼                |
