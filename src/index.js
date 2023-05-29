import process from 'node:process';

function isUnicodeSupported() {
  if (process.platform !== 'win32') {
    return process.env.TERM !== 'linux'; // Linux console (kernel)
  }

  return (
    Boolean(process.env.CI) ||
    Boolean(process.env.WT_SESSION) || // Windows Terminal
    Boolean(process.env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
    process.env.ConEmuTask === '{cmd::Cmder}' || // ConEmu and cmder
    process.env.TERM_PROGRAM === 'Terminus-Sublime' ||
    process.env.TERM_PROGRAM === 'vscode' ||
    process.env.TERM === 'xterm-256color' ||
    process.env.TERM === 'alacritty'
  );
}

const common = {
  arrowDown: '↓',
  arrowLeft: '←',
  arrowRight: '→',
  arrowUp: '↑',
  bullet: '●',
  heart: '♥',
  home: '⌂',
  line: '-',
  lineVertical: '│',
  squareSmall: '◻',
  squareSmallFilled: '◼',
};

const mainSymbols = {
  ...common,
  circle: '◯',
  circleFilled: '◉',
  cross: '✘',
  info: 'ℹ',
  pointer: '❯',
  tick: '✔',
  warning: '⚠',
};

const fallbackSymbols = {
  // ...common,
  circle: '( )',
  circleFilled: '(*)',
  cross: '×',
  info: 'i',
  pointer: '>',
  tick: '√',
  warning: '‼',
};

const shouldUseMain = isUnicodeSupported();

/**
 * ## Figures
 *
 * Unicode symbols with Windows fallbacks
 *
 * ```js
 * const figures = {
 *   tick: '✔',
 *   info: 'ℹ',
 *   warning: '⚠',
 *   cross: '✘',
 *   squareSmall: '◻',
 *   squareSmallFilled: '◼',
 *   circle: '◯',
 *   circleFilled: '◉',
 *   bullet: '●',
 *   pointer: '❯',
 *   arrowUp: '↑',
 *   arrowDown: '↓',
 *   arrowLeft: '←',
 *   arrowRight: '→',
 * };
 * ```
 *
 * @example
 *   const figures = require('figures');
 *   console.log(`${figures.tick} The file has been copied`);
 *   // On Windows: √ The file has been copied
 *
 * @type {{ [key: string]: string }} Unicode And/or Windows symbols
 * @name figures
 */
const figures = shouldUseMain ? mainSymbols : fallbackSymbols;

export default figures;
