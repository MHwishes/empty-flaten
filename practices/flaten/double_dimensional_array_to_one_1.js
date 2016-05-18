'use strict';

function double_to_one(collection) {
  var doubleToOneArray = [];

  collection.forEach(function (element) {
    if (typeof element === "number") {
      doubleToOneArray.push(element);
    }
    else {
      doubleToOneArray = buildOneArray(element, doubleToOneArray);
    }
  });

  return doubleToOneArray;
}
function buildOneArray(array, doubleToOneArray) {

  array.forEach(function (element) {
    doubleToOneArray.push(element);
  });

  return doubleToOneArray;
}

module.exports = double_to_one;
