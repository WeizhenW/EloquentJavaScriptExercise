//The sum of a range

function range(start, end, step=1) {
  let arr = [];
  if(step >= 0) {
    for(let i=start; i<=end; i=i+step) {
    arr.push(i);
    }
  } else {
    for(let i=start; i>=end; i=i+step) {
    arr.push(i);
    }
  }
  return arr;
};

function sum(array) {
  let total = 0;
  for (let num of array) {
    total += num
  }
  return total;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
