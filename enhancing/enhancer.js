module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  // const newItem = Object.assign({}, item);
  // newItem.enhancement = newItem.enhancement + 1;
  // return newItem;

  const newItem = Object.assign({}, item);
  if (newItem.enhancement !== 20) {
    newItem.enhancement = newItem.enhancement + 1;
    // console.log("Enhancement Changed", newItem);
    return newItem;
  } else {
    return newItem;
  }
}

function fail(item) {
  const newItem = Object.assign({}, item);
  if (newItem.enhancement < 15) {
    newItem.durability = newItem.durability - 5;
    // console.log("Durability Changed", newItem);
    return newItem;
  } else if (newItem.enhancement >= 15) {
    // console.log("Durability Changed only", newItem);
    newItem.durability = newItem.durability - 10;
    if (newItem.enhancement > 16) {
      newItem.enhancement = newItem.enhancement - 1;
      // console.log("Durability & Enhancement Changed", newItem);
      // return newItem;
    }
    return newItem;
  } else {
    return newItem;
  }
}

function repair(item) {
  const newItem1 = Object.assign({}, item);
  newItem1.durability = 100;
  return newItem1;
}

function get(item) {
  const newItem = Object.assign({}, item);
  if (newItem.enhancement > 0) {
    newItem.name = `${newItem.name} [+ ${newItem.enhancement}]`;
    // console.log("Name Changed", newItem);
    return newItem;
  } else {
    // console.log("Name Same", newItem);
    return newItem;
  }
}
