function ListNode(data) {
  this.data = data;
  this.next = null;
}

export const listFromArray = (arr) => {
  if (!arr.length) {
    return null;
  }

  const head = new ListNode(arr[0]);

  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    prev.next = node;
    prev = node;
  }

  return head;
};

export const printLinkedList = (head) => {
  const result = [];
  let aux = head;
  while (aux) {
    result.push(aux.data);
    aux = aux.next;
  }

  return result;
};

export default ListNode;
