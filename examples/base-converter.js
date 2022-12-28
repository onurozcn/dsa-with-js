const Stack = require('../data_structures/stack')
function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF"; //{6}

  while (decNumber > 0) {
    rem = decNumber % base;
    remStack.addToStack(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.removeFromStack()]; //{7}
  }

  return baseString;
}

console.log(baseConverter(7, 2));
