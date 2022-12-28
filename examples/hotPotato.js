const Queue = require('../data_structures/queues')

function hotPotato(nameList, num) {
  var queue = new Queue(); 

  for (var i = 0; i < nameList.length; i++) {
    queue.addToQueue(nameList[i]); 
  }

  var eliminated = "";
  while (queue.lengthOfQueue() > 1) {
    for (var i = 0; i < num; i++) {
      queue.addToQueue(queue.removeFromQueue()); 
    }
    eliminated = queue.removeFromQueue(); 
    console.log(eliminated + " was eliminated from the Hot Potato game.");
  }

  return queue.removeFromQueue(); 
}

var names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(names, 7);
console.log("The winner is: " + winner);