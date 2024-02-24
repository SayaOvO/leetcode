/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
   if (list1 === null) {
       return list2
   }
   if (list2 === null) {
       return list1
   }
  // const tail = list1.val > list2.val ? list2 : list1;
  // const res = tail;
   let tail: ListNode | null;
   let res: ListNode | null;
   if (list1.val > list2.val) {
       tail = list2;
       list2 = list2.next;
   } else {
       tail = list1;
       list1 = list1.next;
   }
   res = tail;

   while (list1 !== null || list2 !== null) {
       if (list1 === null) {
           tail.next = list2;
           break;
       } else if (list2 === null) {
           tail.next = list1;
           break;
       } else if (list1.val > list2.val) {
           tail.next = list2;
           tail = list2;
           list2 = list2.next;
       } else {
           tail.next = list1;
           tail = list1;
           list1 = list1.next;
       }
   }
   return res;
};