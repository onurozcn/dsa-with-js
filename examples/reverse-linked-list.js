function reverseLinkedList(list) {
  temp_curr = null;
  previous = null;
  while (true) {
    temp_curr = list.head.next;
    list.head.next = previous;
    previous = list.head;

    if (temp_curr === null) {
      break;
    }

    list.head = temp_curr;
  }
  return list;
}
