/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//   let l1Head = new ListNode(null)
//   l1Head.next = l1
//   let l1Current = l1Head
//   let l2Current = l2
//   while (l2Current != null) {
//     if (l1Current.next !== null && l1Current.next.val > l2Current.val) {
//       let breakPoint = l1Current.next
//       l1Current.next = new ListNode(l2Current.val)
//       l1Current.next.next = breakPoint
//       l2Current = l2Current.next
//     } else if(l1Current.next == null){
//       l1Current.next = l2Current
//       return l1Head.next
//     }
//     l1Current = l1Current.next
//   }
//   return l1Head.next
// };

/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 递归
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l2 === null) {
    return l1
  }
  if (l1 === null) {
    return l2
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 */
function printList(head) {
  let s = ""
  while (head !== null) {
    s += head.val + "=>"
    head = head.next
  }
  console.log(s.slice(0, s.length - 2))
}

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

let l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)


printList(mergeTwoLists(l1, l2))
