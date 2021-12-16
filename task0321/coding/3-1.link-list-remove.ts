// 删除倒数第n个链表节点
import LinkList, {
  Pointer,
  Node,
} from './utils/link-list';

class MyLinkList extends LinkList {
  public removeBackwards (
    n: number,
  ): number | null {
    if (n <= 0 || n > this.length) return null;

    let lead: Pointer = this.head;
    let current: Pointer = this.head;
    let previous: Pointer = this.head;

    for (let i = 0; i < n - 1; i++) {
      lead = (lead as Node).next;
    }
    while ((lead as Node).next) {
      lead = (lead as Node).next;
      previous = current;
      current = (current as Node).next;
    }
    (previous as Node).next = (current as Node).next;
    this.length--;
    return (current as Node).element;
  }
}
const list1 = new MyLinkList();
for (let i = 0; i < 10; i++) {
  list1.append(Math.pow(2, i));
}
list1.traverse();
console.log(list1.removeBackwards(2));
list1.traverse();
console.log(list1.removeBackwards(1));
list1.traverse();
console.log(list1.removeBackwards(20));
list1.traverse();
