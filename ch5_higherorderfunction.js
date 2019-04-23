//Flattening arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((arr1,arr2) => {
  return arr1.concat(arr2)});

console.log(flatArray);
// → [1, 2, 3, 4, 5, 6]
