"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ProductComposite = exports.ProductLeaf = exports.ProductComponent = void 0;
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.add = function (product) { };
    ProductComponent.prototype.remove = function (product) { };
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
var ProductLeaf = /** @class */ (function (_super) {
    __extends(ProductLeaf, _super);
    function ProductLeaf(name, price) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    ProductLeaf.prototype.getPrice = function () {
        return this.price;
    };
    return ProductLeaf;
}(ProductComponent));
exports.ProductLeaf = ProductLeaf;
var ProductComposite = /** @class */ (function (_super) {
    __extends(ProductComposite, _super);
    function ProductComposite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    ProductComposite.prototype.add = function () {
        var _this = this;
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        products.forEach(function (product) { return _this.children.push(product); });
    };
    ProductComposite.prototype.remove = function (product) {
        var productIndex = this.children.indexOf(product);
        if (productIndex !== -1)
            this.children.splice(productIndex, 1);
    };
    ProductComposite.prototype.getPrice = function () {
        return this.children.reduce(function (sum, child) { return sum + child.getPrice(); }, 0);
    };
    return ProductComposite;
}(ProductComponent));
exports.ProductComposite = ProductComposite;
var pen = new ProductLeaf('Caneta', 1);
var smartphone = new ProductLeaf('Smartphone', 1000);
var tShirt = new ProductLeaf('Camiseta', 40);
var productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);
var tablet = new ProductLeaf('Tablet', 2000);
var kindle = new ProductLeaf('Kindle', 300);
var anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
console.log(productBox);
console.log(productBox.getPrice());
productBox.add(anotherProductBox);
console.log(anotherProductBox);
console.log(anotherProductBox.getPrice());
console.log(productBox);
console.log(productBox.getPrice());
