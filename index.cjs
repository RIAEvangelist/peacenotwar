var __defProp = Object.defineProperty;
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

// index.js
__export(exports, {
  default: function() {
    return whatWeWant;
  },
  whatWeWant: function() {
    return whatWeWant;
  }
});
var whatWeWant = "\u2665";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  whatWeWant
});
