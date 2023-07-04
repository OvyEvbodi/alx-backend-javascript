const hasValuesFromArray = (mySet, myArray) => {
   return myArray.every( item => mySet.has(item));
};

export default hasValuesFromArray;