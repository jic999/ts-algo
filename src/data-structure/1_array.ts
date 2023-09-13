// @ 数组 | array

// # 1. 初始化数组 | init array

// - init array
const arr_1 = Array.from({ length: 10 })

const arr_2 = Array(10)

// 现在 arr_1 和 arr_2 都是长度为 10 的空数组，数组中的每一项都是 undefined
// en: now arr_1 and arr_2 are both empty arrays with length 10, and each item in the array is undefined

// - init array with value
const arr_3 = [1, 2, 3, 4, 5]
const arr_4 = Array.from({ length: 5 }).fill(0)

// warn: 使用 fill 初始化数组时有个坑
// warn: en: there is a pit when using fill to init array
// warn: 如果填充的值是一个对象，那么数组中的所有项都会指向同一个对象
// warn: en: if the value is an object, then all the items in the array will point to the same object

function test_1() {
  console.log('------ test_1: init array ------')
  console.log('arr_1 ==> ', arr_1) // arr_1 ==>  [ <10 empty items> ]
  console.log('arr_2 ==> ', arr_2) // arr_2 ==>  [ <10 empty items> ]
  console.log('arr_3 ==> ', arr_3) // arr_3 ==>  [ 1, 2, 3, 4, 5 ]
  console.log('arr_4 ==> ', arr_4) // arr_4 ==>  [ 0, 0, 0, 0, 0 ]
}

// # 2. 访问元素 | access elements

function randomAccess<T>(arr: T[]): T {
  // 获取 [0, arr.length - 1] 范围内的随机索引
  // en: get random index in [0, arr.length - 1]
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function test_2() {
  console.log('------ test_2: access elements ------')
  const arr = [1, 2, 3, 4, 5]
  const item = randomAccess(arr)
  console.log('item ==> ', item)
}

// # 3. 插入元素 | insert elements

function insert<T>(arr: T[], index: number, item: T): void {
  if (index < 0 || index > arr.length)
    throw new Error('index out of range')
  // 将 index 之后的元素都向后移动一位
  // en: move the elements after index back one position
  for (let i = arr.length - 1; i > index; i--)
    arr[i] = arr[i - 1]
  arr[index] = item
  // info: 插入完毕后，会丢失最后一位元素
  // info: en: after insert, the last item will be lost
  // info: 我们可以通过在插入元素之前，将 arr.length++ 来解决这个问题，但js提供了更好的办法
  // info: en: we can solve this problem by arr.length++ before insert, but js provides a better way
}

function test_3() {
  console.log('------ test_3: insert elements ------')
  const arr = [1, 2, 3, 4, 5]
  insert(arr, 2, 100)
  console.log('arr ==> ', arr)
}

// # 4. 删除元素 | remove elements

function remove<T>(arr: T[], index: number): void {
  if (index < 0 || index >= arr.length)
    throw new Error('index out of range')
  // 将 index 之后的元素都向前移动一位
  // en: move the elements after index forward one position
  for (let i = index; i < arr.length - 1; i++)
    arr[i] = arr[i + 1]
  // info: 删除完毕后 最后一位元素还在 且与倒数第二位元素相同
  // info: en: after remove, the last item is still there and it is the same as the second last item
  // info: 我们可以通过 arr.length-- 来删除它 但实际上 我们通常不会这么做 因为js提供了更好的方法: splice
  // info: en: we can use arr.length-- to remove it, but we usually don't do that, because js provides a better way: splice
}

function test_4() {
  console.log('------ test_4: remove elements ------')
  const arr = [1, 2, 3, 4, 5]
  remove(arr, 2)
  console.log('arr ==> ', arr)
}

// # 5. 遍历数组 | traverse array

function traverse<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++)
    console.log(`arr[${i}] ==> `, arr[i])
}

function test_5() {
  console.log('------ test_5: traverse array ------')
  const arr = [1, 2, 3, 4, 5]
  traverse(arr)
}

// # 6. 查找元素 | find element

function find<T>(arr: T[], item: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item)
      return i
  }
  return -1
}

function test_6() {
  console.log('------ test_6: find element ------')
  const arr = [1, 2, 3, 4, 5]
  const index = find(arr, 3)
  console.log('index ==> ', index)
}

// # 7. 扩展数组 | expand array

function expand<T>(arr: T[], enlarge: number): T[] {
  const newArr: T[] = Array.from({ length: arr.length + enlarge })
  for (let i = 0; i < arr.length; i++)
    newArr[i] = arr[i]
  return newArr
  // info: 在实际开发中，我们通常不会这么做，因为 js 中的数组是动态扩容的
  // info: en: in actual development, we usually don't do this, because the array in js is dynamically expanded
}

function test_7() {
  console.log('------ test_7: expand array ------')
  const arr = [1, 2, 3, 4, 5]
  const newArr = expand(arr, 5)
  console.log('newArr ==> ', newArr) // newArr ==>  [ 1, 2, 3, 4, 5, <5 empty items> ]
}

// ------------
test_1()
test_2()
test_3()
test_4()
test_5()
test_6()
test_7()
