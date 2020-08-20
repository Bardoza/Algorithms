const reverseList = (head) => {
  // let me = head;
  let me = head;
  let prev = null;

  while (me) {
    if (prev === null) {
      prev = me;
      me = prev.next;
      prev.next = null;
    } else {
      const aux = me.next;
      me.next = prev;
      prev = me;
      me = aux;
    }
  }

  return prev;
};

export default reverseList;
