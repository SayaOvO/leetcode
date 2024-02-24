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

 const number_for_mark = 10 ** 5 + 1;

function hasCycle(head: ListNode | null): boolean {

    while (head !== null) {
        if (head.next === null) {
            return false;
        }
        if (head.val === number_for_mark) {
            return true;
        }
        // range [-10^5, 10^5], so I can use -1 to mark the node is visited.
        head.val = number_for_mark;
        head = head.next;
    }
    return false;
    
};