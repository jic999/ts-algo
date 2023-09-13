// @ 链表 | Linked List

// # 1. 初始化链表 | init linked list

class ListNode<T> {
  constructor(
    public element: T,
    public next?: ListNode<T>,
  ) {}
}

// 初始化节点 | init node
const node_1 = new ListNode(1)
const node_2 = new ListNode(2)
const node_3 = new ListNode(3)
const node_4 = new ListNode(4)
const node_5 = new ListNode(5)

// 链接节点 | link node
node_1.next = node_2
node_2.next = node_3
node_3.next = node_4
node_4.next = node_5

function test_1() {
  console.log('------ test_1: init linked list ------')
  console.log('node_1 ==> ', node_1)
}

// # 2. 遍历链表 | traverse linked list

function traverse<T>(head: ListNode<T>): void {
  let current: ListNode<T> | undefined = head
  let index = 0
  let str = ''
  while (current) {
    str += `node_${index} element: ${current.element}`
    current = current.next
    if (current)
      str += ' -> '
    index++
  }
  console.log(str)
}

function test_2() {
  console.log('------ test_2: traverse linked list ------')
  traverse(node_1)
}

// # 3. 插入节点 | insert node

function insert<T>(head: ListNode<T>, index: number, element: T): void {
  let current: ListNode<T> | undefined = head
  let prev: ListNode<T> | undefined
  let i = 0
  // 找到要插入的位置
  // en: find the position to insert
  while (current && i < index) {
    prev = current
    current = current.next
    i++
  }
  // prev -> current ==> prev -> new node -> current
  if (prev)
    prev.next = new ListNode(element, current)
}

function test_3() {
  console.log('------ test_3: insert node ------')
  insert(node_1, 2, 10)
  traverse(node_1)
}

// # 4. 删除节点 | delete node

function remove(head: ListNode<any>, index: number): void {
  let current: ListNode<any> | undefined = head
  let prev: ListNode<any> | undefined
  let i = 0
  while (current && i < index) {
    prev = current
    current = current.next
    i++
  }
  // prev -> current -> next ==> prev -> next
  if (prev)
    prev.next = current?.next
}

function test_4() {
  console.log('------ test_4: remove node ------')
  remove(node_1, 2)
  traverse(node_1)
}

// # 5. 访问节点 | access node

function access<T>(head: ListNode<T>, index: number): ListNode<T> | undefined {
  let current: ListNode<T> | undefined = head
  let i = 0
  while (current && i < index) {
    current = current.next
    i++
  }
  return current
}

function test_5() {
  console.log('------ test_5: access node -----x-')
  console.log(access(node_1, 2))
}

// # 6. 查找节点 | find node

function find<T>(head: ListNode<T>, element: T): number {
  let current: ListNode<T> | undefined = head
  let index = 0
  while (current) {
    if (current.element === element)
      return index
    current = current.next
    index++
  }
  return -1
}

function test_6() {
  console.log('------ test_6: find node ------')
  console.log(find(node_1, 3))
}

// info: 除了单向链表外，常见的还有双向链表、循环链表
// info: en: in addition to singly linked list, there are also doubly linked list and circular linked list

// info: 双向链表相对于单向链表，每个节点多了一个指向前一个节点的指针
// info: en: doubly linked list, each node has an additional pointer to the previous node

// info: 循环链表相对于单向链表，最后一个节点的指针指向第一个节点
// info: en: circular linked list, the pointer of the last node points to the first node

test_1()
test_2()
test_3()
test_4()
test_5()
test_6()
