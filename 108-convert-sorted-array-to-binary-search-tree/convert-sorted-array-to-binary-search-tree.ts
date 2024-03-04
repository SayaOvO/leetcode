/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const len = nums.length;
    if (len === 1) {
        return new TreeNode(nums[0], null, null);
    }
    if (len === 2) {
        return new TreeNode(nums[1], new TreeNode(nums[0], null, null), null)
    }
    const mid = Math.floor(len / 2);
    const left = sortedArrayToBST(nums.slice(0, mid))
    const right = sortedArrayToBST(nums.slice(mid+1))
    return new TreeNode(nums[mid], left, right)
};