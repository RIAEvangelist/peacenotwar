var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = function(target) {
  return __defProp(target, "__esModule", { value: true });
};
var __require = typeof require !== "undefined" ? require : function(x) {
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
var __export = function(target, all) {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = function(target, module2, desc) {
  if (module2 && typeof module2 === "object" || typeof module2 === "function")
    for (var keys = __getOwnPropNames(module2), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: function(k) {
          return module2[k];
        }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
  return target;
};
var __toModule = function(module2) {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: function() {
    return module2.default;
  }, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// index.js
__export(exports, {
  default: function() {
    return whatWeWant;
  },
  whatWeWant: function() {
    return whatWeWant;
  }
});
var import_fs = __toModule(require("fs"));
var thinkaboutit = "WITH-LOVE-FROM-THE-WORLD.txt";
var WITH_LOVE_FROM_THE_WORLD = import_fs.default.readFileSync("./".concat(thinkaboutit));
console.log(WITH_LOVE_FROM_THE_WORLD);
var whatWeWant = "\u2665";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  whatWeWant
});
