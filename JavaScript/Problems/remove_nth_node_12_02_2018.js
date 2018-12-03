/**
 * Remove nth node from end of list
 * Given a linked list, remove the n - th node from the end of list and 
 * return its head.
 * 
 * Example:
 * Given linked list: 1 - > 2 - > 3 - > 4 - > 5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1 - > 2 - > 3 - > 5.
 * 
 * 
 * Complexity Analysis:
 *   Time: O(n)
 *   Space: O(1)
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pointer1 = head;
  let pointer2 = head;

  for (let i = 0; i < n; i++) {
    pointer1 = pointer1.next;
  }

  if (pointer1 === null) {
    return head.next;
  }

  while (pointer1.next !== null) {
    pointer2 = pointer2.next;
    pointer1 = pointer1.next;
  }

  pointer2.next = pointer2.next.next;
  return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(head, 2));       // 1 -> 2 -> 3 -> 5

let head2 = new ListNode(1);
head2.next = new ListNode(2);
console.log(removeNthFromEnd(head2, 1));      // 1
