interface Observer {
  update(): void;
}

class Subject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

class ConcreteObserverA implements Observer {
  public update(): void {
    console.log('Observer A a été notifié');
  }
}

class ConcreteObserverB implements Observer {
  public update(): void {
    console.log('Observer B a été notifié');
  }
}

// Utilisation du patron Observateur
const subject = new Subject();

const observerA = new ConcreteObserverA();
subject.attach(observerA);

const observerB = new ConcreteObserverB();
subject.attach(observerB);

subject.notify();

