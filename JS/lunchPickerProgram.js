let lunches = [];

const addLunchToEnd = (array, item) => {
  array.push(item);
  console.log(`${item} added to the end of the lunch menu.`)
  return array;
}

const addLunchToStart = (array, item) => {
  array.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`)
  return array;
}

const removeLastLunch = (array) => {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }
  let removedItem = array.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return array;
}

const removeFirstLunch = (array) => {
  if (array.length === 0) {
    console.log("No lunches to remove.");
    return array;
  }
  let removedItem = array.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return array;
}

const getRandomLunch = (array) => {
  if (array.length === 0) {
    console.log("No lunches available.");
    return null;
  }

  let randomIndex = Math.floor(Math.random() * array.length);
  let randomItem = array[randomIndex];
  console.log(`Randomly selected lunch: ${randomItem}`)
  return randomIndex;
}

const showLunchMenu = array => {
  if (array.length === 0) {
    console.log("The menu is empty.");
    return null;
  } else {
    console.log(`Menu items: ${array.join(", ")}`);
  }
}


console.log("=== Test du programme ===");

// Ajouter des éléments
addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Salad");
addLunchToEnd(lunches, "Burger");

// Afficher le menu
showLunchMenu(lunches);

// Supprimer des éléments
removeLastLunch(lunches);
removeFirstLunch(lunches);

// Sélection aléatoire
getRandomLunch(lunches);

// Vérifier le menu après modifications
showLunchMenu(lunches);
