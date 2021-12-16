export type Pointer = Node | null;
export class Node {
  public constructor (
    public element: number,
    public next: Pointer = null,
  ) {}
}
export default class LinkList {
  public head: Pointer = null;
  public length = 0;
  public append (element: number): void {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
      return;
    }
    let pointer = this.head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = node;
    this.length++;
  }
  public traverse (): void {
    let pointer = this.head;
    const elements: number[] = [];
    while (pointer) {
      elements.push(pointer.element);
      pointer = pointer.next;
    }
    console.log(elements);
  }
}
