/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = 0
  let length = getLength(head)
  let dummy = new ListNode(null)
  dummy.next = head
  let currentNode = dummy
  while (currentNode != null) {
    if (current == length - n) {
      currentNode.next = currentNode.next.next
      break
    }
    currentNode = currentNode.next
    current++
  }
  return dummy.next
};

function getLength(head) {
  let length = 0
  while (head != null) {
    length++
    head = head.next
  }
  return length
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)

console.log(removeNthFromEnd(head, 1));