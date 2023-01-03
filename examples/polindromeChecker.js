const Deque = require('../data_structures/deque.js')
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
   
    return false;
  }
  const deque = new Deque(); 
  const lowerString = aString.toLocaleLowerCase().split(" ").join(""); // {3}
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
   
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
   
    firstChar = deque.removeFront(); 
    lastChar = deque.removeBack(); 
    if(!lastChar) return isEqual
    if (firstChar !== lastChar) {
      isEqual = false; 
    }
  }
  return isEqual;
}

// recursive version
function isPolindrome(str) {
  const lowerCaseStr = str.toLowerCase().split(" ").join("");
  if (lowerCaseStr.length <= 1) return true;
  if (lowerCaseStr[0] === lowerCaseStr.slice(-1))
    return isPolindrome(lowerCaseStr.slice(1, -1));
  else return false;
}

console.log(palindromeChecker("123442231415164354"))
console.log(isPolindrome("123442231415164354"));



console.log(palindromeChecker("akaka"));
console.log(isPolindrome("akaka"));
