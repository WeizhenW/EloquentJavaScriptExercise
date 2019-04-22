//Minimum
let min = function (num1, num2) {
  if(num1 > = num2) {
    return num2;
  } else {
    return num1;
  }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//isEven - recursion

let isEven = function(num) {
  if(num===0) {
    return true;
  } else if(num===1) {
    return false;
  } else if (num>1) {
    return isEven(num-2);
  } else {
    return isEven(-num);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//Bean Counting

let countBs = function(string) {
  let counter = 0;
  for(let i=0; i<string.length; i++) {
    if(string[i] === "B") {
      counter++;
    }
  }
  return counter;
};

let countChar = function(string, letter) {
  let counter = 0;
  for(let i=0; i<string.length; i++) {
    if(string[i] === letter) {
      counter++;
    }
  }
  return counter;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
