// 合并两个有序链表
import LinkList from './utils/link-list';

const mergeSortedLinkList = (
  srcList1: LinkList,
  srcList2: LinkList,
): LinkList => {
  const resultList = new LinkList();
  let p1 = srcList1.head;
  let p2 = srcList2.head;
  while (p1 && p2) {
    if (p1.element < p2.element) {
      resultList.append(p1.element);
      p1 = p1.next;
    } else {
      resultList.append(p2.element);
      p2 = p2.next;
    }
  }
  // append leftovers
  let p3 = p1 || p2;
  while (p3) {
    resultList.append(p3.element);
    p3 = p3.next;
  }
  return resultList;
}

const srcList1 = new LinkList();
for (let i = 0; i < 10; i++) {
  srcList1.append(i * 2 + 1);
}
const srcList2 = new LinkList();
for (let i = 0; i < 5; i++) {
  srcList2.append(Math.pow(2, i));
}
const resultList = mergeSortedLinkList(
  srcList1,
  srcList2,
);
srcList1.traverse();
srcList2.traverse();
resultList.traverse();
