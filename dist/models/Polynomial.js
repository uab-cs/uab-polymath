"use strict";
exports.__esModule = true;
var _ = require("lodash");
var Adapter_1 = require("./Adapter");
var Polynomial = /** @class */ (function () {
    function Polynomial(monomials) {
        this.monomials = monomials;
    }
    /* getters */
    Polynomial.prototype.getMonomial = function (ind) {
        if (this.monomials[ind])
            return this.monomials[ind];
    };
    Polynomial.prototype.size = function () {
        return this.monomials.length;
    };
    Polynomial.prototype.getConstant = function () {
        return _.last(this.monomials).coefficient;
    };
    Polynomial.prototype.getLeadingCoefficient = function () {
        return this.getMonomial(0).coefficient;
    };
    /* arithmetic */
    Polynomial.prototype.add = function (polynomial) {
        return new Adapter_1["default"](this, polynomial).add();
    };
    Polynomial.prototype.subtract = function (polynomial) {
        return new Adapter_1["default"](this, polynomial).subtract();
    };
    Polynomial.prototype.multiply = function (polynomial) {
        return new Adapter_1["default"](this, polynomial).multiply();
    };
    Polynomial.prototype.divide = function (polynomial) {
        return new Adapter_1["default"](this, polynomial).divide();
    };
    Polynomial.prototype.getIterator = function () {
        var _self = this;
        var cursor = 0;
        return {
            hasNext: function () {
                return cursor < _self.monomials.length;
            },
            next: function () {
                var item = _self.monomials[cursor];
                cursor++;
                return item;
            },
            peek: function () {
                return _self.monomials[cursor];
            }
        };
    };
    return Polynomial;
}());
exports["default"] = Polynomial;
//# sourceMappingURL=Polynomial.js.map