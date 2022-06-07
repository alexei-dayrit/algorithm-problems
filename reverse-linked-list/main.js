var reverseList = function (head) {
  let prevNode = null;
  let nextNode = null;

  while (head !== null) {
    nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
};
