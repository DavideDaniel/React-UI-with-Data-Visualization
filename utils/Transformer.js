var Transformer = function (transform) {
  this.func = (typeof transform === 'function') ? transform : function (value) {
    return value.toString ? value.toString() : value;
  };
};

Transformer.prototype.getTransformedValue = function (value) {
  return this.func.call(null, value);
};

module.exports = Transformer;
