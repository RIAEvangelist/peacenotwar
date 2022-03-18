var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = function(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: function(k) {
          return from[k];
        }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod);
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: true }), mod);
};

// index.js
var peacenotwar_exports = {};
__export(peacenotwar_exports, {
  default: function() {
    return whatWeWant;
  },
  whatWeWant: function() {
    return whatWeWant;
  }
});
module.exports = __toCommonJS(peacenotwar_exports);
var import_fs = __toESM(require("fs"), 1);
var thinkaboutit = "WITH-LOVE-FROM-THE-WORLD.txt";
var WITH_LOVE_FROM_THE_WORLD = import_fs.default.readFileSync("".concat(__dirname, "/").concat(thinkaboutit));
console.log(WITH_LOVE_FROM_THE_WORLD);
var whatWeWant = "\u2665";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  whatWeWant
});
