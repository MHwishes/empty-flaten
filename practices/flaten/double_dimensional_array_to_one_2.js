'use strict';

function double_to_one(collection) {
  var doubleToOneArray = [];

  collection.forEach(function (element) {
    doubleToOneArray = buildOneArray(element, doubleToOneArray);
  });

  return doubleToOneArray;
}

function buildOneArray(array, doubleToOneArray) {

  array.forEach(function (element) {
    if (isNotInDoubleToOneArray(element, doubleToOneArray))
      doubleToOneArray.push(element);
  });

  return doubleToOneArray;
}

function isNotInDoubleToOneArray(element, doubleToOneArray) {
  for (var i = 0; i < doubleToOneArray.length; i++) {
    if (doubleToOneArray[i] === element) {

      return false;
    }
  }

  return true;
}
module.exports = double_to_one;
