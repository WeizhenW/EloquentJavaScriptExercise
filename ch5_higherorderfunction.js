//Flattening arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((arr1,arr2) => {
  return arr1.concat(arr2)});

console.log(flatArray);
// → [1, 2, 3, 4, 5, 6]

//Your own loop

let loop = (value, testFunc, updateFunc, bodyFunc) => {
  while(testFunc(value)) {
    bodyFunc(value);
    value = updateFunc(value);
  }
}

//use for loop

// function loop(value, testFunc, updateFunc, bodyFunc){
//   for(let i=value; testFunc(i); i=updateFunc(i)) {
//     bodyFunc(i);
//   }
// }

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
