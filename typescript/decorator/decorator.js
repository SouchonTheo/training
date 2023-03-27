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
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
    }
    ConcreteComponent.prototype.operation = function () {
        return 'ConcreteComponent';
    };
    return ConcreteComponent;
}());
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
var ConcreteDecoratorA = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorA, _super);
    function ConcreteDecoratorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorA.prototype.operation = function () {
        return "ConcreteDecoratorA(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorA;
}(Decorator));
var ConcreteDecoratorB = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorB, _super);
    function ConcreteDecoratorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorB.prototype.operation = function () {
        return "ConcreteDecoratorB(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorB;
}(Decorator));
var ConcreteDecoratorC = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorC, _super);
    function ConcreteDecoratorC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorC.prototype.operation = function () {
        return "ConcreteDecoratorC(".concat(_super.prototype.operation.call(this), ")");
    };
    return ConcreteDecoratorC;
}(Decorator));
// Utilisation du patron Décorateur
var component = new ConcreteComponent();
console.log(component.operation());
var decoratorA = new ConcreteDecoratorA(component);
console.log(decoratorA.operation());
var decoratorB = new ConcreteDecoratorB(decoratorA);
console.log(decoratorB.operation());
var decoratorC = new ConcreteDecoratorC(decoratorB);
console.log(decoratorC.operation());
