// 判断链表是否有环
import LinkList, {
  Node,
} from './utils/link-list';

const hasRing = (
  list: LinkList,
): boolean => {
  let fast = list.head;
  let slow = list.head;
  while (fast && slow) {
    fast = fast.next;
    if (fast === slow) return true;
    if (!fast) return false;
    fast = fast.next;
    if (fast === slow) return true;

    slow = slow.next;
  }
  return false;
};
const makeRing = (
  list: LinkList,
  position: number,
): boolean => {
  if (position > list.length - 2) return false;
  let p = list.head;
  for (let i = 0; i < position; i++) {
    p = (p as Node).next;
  }
  const ringJoint = p;

  while ((p as Node).next) {
    p = (p as Node).next;
  }
  (p as Node).next = ringJoint;
  return true;
};
const linearList = new LinkList();
for (let i = 0; i < 15; i++) {
  linearList.append(Math.pow(2, i));
}
const cyclicList = new LinkList(); 
for (let i = 0; i < 15; i++) {
  cyclicList.append(Math.pow(2, i));
}
const success = makeRing(cyclicList, 10);
console.log(`Make ring: ${success}`);
console.log(hasRing(linearList));
console.log(hasRing(cyclicList));

