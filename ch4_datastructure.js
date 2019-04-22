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

//reverse array
function reverseArray(arr) {
  let newArray = [];
  for(element of arr) {
    newArray.unshift(element);
  }
  return newArray;
}

function reverseArrayInPlace(arr) {
  for(i=0; i<=Math.floor(arr.length/2); i++) {
    let interm = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = interm;
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//A list
// Your code here.

function arrayToList(arr) {
  let list = {};
  for(i=0; i<arr.length; i++) {
    list.value = arr[i];
    if(i==arr.length -1) {
      list.rest = null;
    } else {
    list.rest = arrayToList(arr.slice(i+1));
  	}
  }
  return list;
};

function listToArray(list) {
  let array = [];
  while(list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
};

function prepend(element, list) {
  newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

function nth(list, number) {
  let element = 0;
  for (i=0; i<number; i++) {
    list = list.rest;
    element = list.value;

  }
  return element;
};


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
