// 1. Array로 구현
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; // 큐의 맨 앞 index
    this.rear = 0; // 큐의 맨 뒤 index
    this.size = 0;
  }

  // 큐의 맨 뒤 요소를 추가하는 것
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 큐의 맨 앞 요소를 제거하는 것.
  // 프론트 인덱스 값을 반환하고 증가시키면 된다.
  // but 바로 반환하면 함수가 종료되기에 임시 값을 넣어두고 삭제한 다음, 인덱스 값을 증가하고 반환한다.
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  // 큐의 가장 앞에 있는 값을 알아내는 것
  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// 2. 연결리스트로 구현
class Node {
  constructor() {
    this.value = value;
    this.next = null;
  }
}

class Queue2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}
