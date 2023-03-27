interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

abstract class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

class ConcreteDecoratorC extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorC(${super.operation()})`;
  }
}

// Utilisation du patron Décorateur
const component = new ConcreteComponent();
console.log(component.operation());

const decoratorA = new ConcreteDecoratorA(component);
console.log(decoratorA.operation());

const decoratorB = new ConcreteDecoratorB(decoratorA);
console.log(decoratorB.operation());

const decoratorC = new ConcreteDecoratorC(decoratorB);
console.log(decoratorC.operation());
