class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  makeSound(): void {
    console.log(`${this.name} fait un bruit indéfinissable.`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} miaule.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} aboie.`);
  }
}

// Utilisation polymorphique
let animals: Animal[] = [new Cat('Felix'), new Dog('Rex')];
for(let animal of animals) {
  animal.makeSound(); // Appelle la méthode makeSound appropriée selon le type d'objet
}
