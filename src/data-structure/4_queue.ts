// @ 队列 | Queue

// # 1. 基于链表的实现 | LinkedListQueue

class ListNode<T> {
  constructor(
    public element: T,
    public next?: ListNode<T>,
  ) {}
}

class LinkedListQueue {
  private front?: ListNode<number>
  private rear?: ListNode<number>
  private size: number = 0

  push(element: number): void {
    const node = new ListNode(element)
    if (!this.front) {
      this.front = node
      this.rear = node
    }
    else {
      this.rear!.next = node
      this.rear = node
    }
    this.size++
  }

  pop(): number | undefined {
    if (!this.front)
      return undefined
    const element = this.front.element
    this.front = this.front.next
    if (!this.front)
      this.rear = undefined
    this.size--
    return element
  }

  peek(): number | undefined {
    if (!this.front)
      return undefined
    return this.front.element
  }

  getSize(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  toString(): string {
    let str = ''
    let current = this.front
    while (current) {
      str += current.element
      current = current.next
      if (current)
        str += ' -> '
    }
    return str
  }
}

function test_1() {
  console.log('------ test_1: init queue ------')
  const queue = new LinkedListQueue()
  queue.push(1)
  queue.push(2)
  queue.push(3)
  queue.push(4)
  queue.push(5)
  console.log(queue.getSize()) // 5
  console.log(queue.isEmpty()) // false;
  console.log(queue.peek()) // 1
  console.log(queue.pop()) // 1);
  console.log('queue ==> ', queue.toString()) // queue ==> 2 -> 3 -> 4 -> 5
}

// # 2. 基于数组的实现 | ArrayQueue

class ArrayQueue {
  private data: number[] = []

  push(element: number): void {
    this.data.push(element)
  }

  pop(): number | undefined {
    return this.data.shift()
  }

  peek(): number | undefined {
    return this.data[0]
  }

  getSize(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  toString(): string {
    return this.data.join(' -> ')
  }
}

function test_2() {
  console.log('------ test_2: init queue ------')
  const queue = new ArrayQueue()
  queue.push(1)
  queue.push(2)
  queue.push(3)
  queue.push(4)
  queue.push(5)
  console.log(queue.getSize()) // 5
  console.log(queue.isEmpty()) // false;
  console.log(queue.peek()) // 1
  console.log(queue.pop()) // 1);
  console.log('queue ==> ', queue.toString()) // queue ==> 2 -> 3 -> 4 -> 5
}

test_1()
test_2()
