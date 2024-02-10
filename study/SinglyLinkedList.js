class Node {
  constructor(value) {
    this.value = value; // 값
    this.next = null; // 포인터
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // 헤드포인터 (연결리스트의 맨 처음)
    this.tail = null; // 테일포인터 (연결리스트의 맨 끝)
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode; // 값을 찾으면 루프는 종료되고 currNode를 반환한다.
  }

  // append: 끝에 추가하는 로직
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      // 연결리스트에 아무런 값이 없는 상태
      this.head = newNode;
      this.tail = newNode;
    } else {
      // tail 포인터가 새로 생성된 노드를 가리키게 만든다.
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // insert: 중간에 추가하는 로직
  insert(node, newValue) {
    // 파라미터로 받은 node 다음에 newValue를 추가한다.
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
      // 중간노드는 아무런 노드와 연결되지 않기 때문에 자연스럽게 삭제된다. 해당 노드는 가비지 컬렉션을 통해 메모리상에서 제거된다.
    }
  }
}
