class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    // this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next; // head를 현재 head의 next로 잡아주면 현재 head는 제거됨
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a); // 내림차순

  let count = 0; // 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지
  while (true) {
    // while (queue.size > 0)
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[i]) {
        return count;
      }
    }
  }

  return count; // 이 라인은 사실상 실행이 되지 않는다.
}
