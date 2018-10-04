// Minimum exercise

function min(x,y) {
    var minimised = Math.min(x,y);
    return minimised
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

// Recursion

var n = 50
function isEven(n) {
 if (n < 0) {
   return isEven(n * -1);
 } else if (n == 0) {
   return true
 } else if (n == 1) {
   return false
 } else {
   return isEven(n - 2);
 }
   console.log(n);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean counting 1

function countBs(str) {
    var beanCounter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "B") {
        beanCounter++
      }
    }
    return beanCounter
  }

// Bean counting 2

  function countChar(str1, str2) {
    var charCounter = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] == str2) {
        charCounter++
      }
    }
    return charCounter
  }