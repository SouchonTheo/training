interface Product {
  name: string;
  price: number;
}

class ProductA implements Product {
  name = 'Produit A';
  price = 10;
}



class ProductB implements Product {
  name = 'Produit B';
  price = 20;
}

abstract class ProductFactory {
  abstract createProduct(): Product;
  
  orderProduct(): void {
    const product = this.createProduct();
    console.log(`Commande passée pour ${product.name} (Prix : ${product.price}€)`);
  }
}

class ProductAFactory extends ProductFactory {
  createProduct(): Product {
    return new ProductA();
  }
}

class ProductBFactory extends ProductFactory {
  createProduct(): Product {
    return new ProductB();
  }
}

// Utilisation de la factory method
const productAFactory = new ProductAFactory();
productAFactory.orderProduct();

const productBFactory = new ProductBFactory();
productBFactory.orderProduct();

