export default figures;
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
declare const figures: {
    [key: string]: string;
};
