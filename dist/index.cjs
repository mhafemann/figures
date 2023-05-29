"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_node_process = __toESM(require("node:process"), 1);
function isUnicodeSupported() {
  if (import_node_process.default.platform !== "win32") {
    return import_node_process.default.env.TERM !== "linux";
  }
  return Boolean(import_node_process.default.env.CI) || Boolean(import_node_process.default.env.WT_SESSION) || // Windows Terminal
  Boolean(import_node_process.default.env.TERMINUS_SUBLIME) || // Terminus (<0.2.27)
  import_node_process.default.env.ConEmuTask === "{cmd::Cmder}" || // ConEmu and cmder
  import_node_process.default.env.TERM_PROGRAM === "Terminus-Sublime" || import_node_process.default.env.TERM_PROGRAM === "vscode" || import_node_process.default.env.TERM === "xterm-256color" || import_node_process.default.env.TERM === "alacritty";
}
var common = {
  arrowDown: "\u2193",
  arrowLeft: "\u2190",
  arrowRight: "\u2192",
  arrowUp: "\u2191",
  bullet: "\u25CF",
  heart: "\u2665",
  home: "\u2302",
  line: "-",
  lineVertical: "\u2502",
  squareSmall: "\u25FB",
  squareSmallFilled: "\u25FC"
};
var mainSymbols = {
  ...common,
  circle: "\u25EF",
  circleFilled: "\u25C9",
  cross: "\u2718",
  info: "\u2139",
  pointer: "\u276F",
  tick: "\u2714",
  warning: "\u26A0"
};
var fallbackSymbols = {
  // ...common,
  circle: "( )",
  circleFilled: "(*)",
  cross: "\xD7",
  info: "i",
  pointer: ">",
  tick: "\u221A",
  warning: "\u203C"
};
var shouldUseMain = isUnicodeSupported();
var figures = shouldUseMain ? mainSymbols : fallbackSymbols;
var src_default = figures;
