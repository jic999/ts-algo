// @ 栈 | stack

// # 1. 基于链表的实现 | LinkedListStack

class ListNode<T> {
  constructor(
    public element: T,
    public next?: ListNode<T>,
  ) {}
}

class LinkedListStack {
  private head?: ListNode<number>
  private size: number = 0

  push(element: number): void {
    const node = new ListNode(element)
    node.next = this.head
    this.head = node
    this.size++
  }

  pop(): number | undefined {
    if (!this.head)
      return undefined
    const element = this.head.element
    this.head = this.head.next
    this.size--
    return element
  }

  peek(): number | undefined {
    if (!this.head)
      return undefined
    return this.head.element
  }

  getSize(): number {
    return this.size
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  toString(): string {
    let str = ''
    let current = this.head
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
  console.log('------ test_1: init stack ------')
  const stack = new LinkedListStack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)
  console.log(stack.getSize()) // 5
  console.log(stack.isEmpty()) // false;
  console.log(stack.peek()) // 5
  console.log(stack.pop()) // 5
  console.log('stack ==> ', stack.toString()) // stack ==> 4 -> 3 -> 2 -> 1
}

// # 2. 基于数组的实现 | ArrayStack

class ArrayStack {
  private data: number[] = []

  push(element: number): void {
    this.data.push(element)
  }

  pop(): number | undefined {
    return this.data.pop()
  }

  peek(): number | undefined {
    return this.data[this.data.length - 1]
  }

  getSize(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  toString(): string {
    let str = ''
    while (this.data.length) {
      str += this.data.pop()
      if (this.data.length)
        str += ' -> '
    }
    return str
  }
}

function test_2() {
  console.log('------ test_2: init stack ------')
  const stack = new ArrayStack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)
  console.log(stack.getSize()) // 5
  console.log(stack.isEmpty()) // false;
  console.log(stack.peek()) // 5
  console.log(stack.pop()) // 5
  console.log('stack ==> ', stack.toString()) // stack ==> 4 -> 3 -> 2 -> 1
}

test_1()
test_2()
