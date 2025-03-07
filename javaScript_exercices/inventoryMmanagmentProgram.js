let inventory = [];

const findProductIndex = (product) => {
    let lowerCaseProduct = product.toLowerCase();
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === lowerCaseProduct) {
            return i;
        }
    }
    return -1;
};

const addProduct = (productObj) => {
    const existingProductIndex = findProductIndex(productObj.name);

    if (existingProductIndex !== -1) {
        inventory[existingProductIndex].quantity += productObj.quantity;
        console.log(`${productObj.name.toLowerCase()} quantity updated`);
    } else {
        inventory.push({ 
            name: productObj.name.toLowerCase(), 
            quantity: productObj.quantity 
        });
        console.log(`${productObj.name.toLowerCase()} added to inventory`);
    }
};

const removeProduct = (productName, productQuant) => {
    const existingProductIndex = findProductIndex(productName);

    if (existingProductIndex === -1) {
        console.log(`${productName.toLowerCase()} not found`);
        return;
    }

    let product = inventory[existingProductIndex];

    if (product.quantity < productQuant) {
        console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${product.quantity}`);
        return;
    }

    product.quantity -= productQuant;

    if (product.quantity === 0) {
        inventory.splice(existingProductIndex, 1);
        console.log(`${productName.toLowerCase()} removed from inventory`);
    } else {
        console.log(`Remaining ${productName.toLowerCase()} pieces: ${product.quantity}`);
    }
};


// **Tests**
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "RICE", quantity: 5 });
addProduct({ name: "SuGar", quantity: 5 });
addProduct({ name: "SALT", quantity: 5 });
addProduct({ name: "Spam", quantity: 5 });

removeProduct("FLOUR", 5);
removeProduct("RICE", 5);
removeProduct("Sugar", 5);
removeProduct("flour", 5);
removeProduct("rice", 5);

console.log(inventory);
