const removeFromArray = function(array, ...removedItems) {
  let results = array;
  removedItems.forEach(removedItem => results = results.filter(resultItem => resultItem !== removedItem));
  return results;
};

// Do not edit below this line
module.exports = removeFromArray;
