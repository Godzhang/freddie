import Node from "./Node";

export { Node as ListNode };

export const toArray = head => {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

export const toString = head => {
  return toArray(head).join();
};

export const ArrayToLinkedList = arr => {
  let head = null;
  let curr = null;
  arr.forEach(val => {
    let node = new Node(val);
    if (curr === null) {
      curr = head = node;
    } else {
      curr.next = node;
      curr = node;
    }
  });
  return head;
};

export const makeCircle = (head, pos = 0) => {
  if (Array.isArray(head)) head = ArrayToLinkedList(head);
  if (!head || !head.next) return null;

  let arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  let len = arr.length;
  pos = pos % len;

  if (arr[len - 1] === arr[pos]) {
    return null;
  } else {
    arr[len - 1].next = arr[pos];
  }

  return head;
};

export const getStringResult = (fn, arr, ...args) => {
  return toString(fn(ArrayToLinkedList(arr), ...args));
};

export const getArrayResult = (fn, arr, ...args) => {
  return toArray(fn(ArrayToLinkedList(arr), ...args));
};
