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
var ProductA = /** @class */ (function () {
    function ProductA() {
        this.name = 'Produit A';
        this.price = 10;
    }
    return ProductA;
}());
var ProductB = /** @class */ (function () {
    function ProductB() {
        this.name = 'Produit B';
        this.price = 20;
    }
    return ProductB;
}());
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.orderProduct = function () {
        var product = this.createProduct();
        console.log("Commande pass\u00E9e pour ".concat(product.name, " (Prix : ").concat(product.price, "\u20AC)"));
    };
    return ProductFactory;
}());
var ProductAFactory = /** @class */ (function (_super) {
    __extends(ProductAFactory, _super);
    function ProductAFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductAFactory.prototype.createProduct = function () {
        return new ProductA();
    };
    return ProductAFactory;
}(ProductFactory));
var ProductBFactory = /** @class */ (function (_super) {
    __extends(ProductBFactory, _super);
    function ProductBFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductBFactory.prototype.createProduct = function () {
        return new ProductB();
    };
    return ProductBFactory;
}(ProductFactory));
// Utilisation de la factory method
var productAFactory = new ProductAFactory();
productAFactory.orderProduct();
var productBFactory = new ProductBFactory();
productBFactory.orderProduct();
