/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const ll1 = reverse(l1);
  const ll2 = reverse(l2);
  const l1No = Number(ll1.join(""));
  const l2No = Number(ll2.join(""));
  const sum = (l1No + l2No).toString();
  const result = [...sum].map(function (item) {
    return parseInt(item, 10);
  });
  return reverse(result);
};

function reverse(arr) {
  const result = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    result.push(arr[index]);
  }
  return result;
}
const l1 = [2,4,3];
const l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2));
