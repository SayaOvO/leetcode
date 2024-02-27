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
function isSymmetric(root: TreeNode | null): boolean {

    let left = root.left
    let right = root.right;
    // #node >= 1
    if (left === null) {
        return !right;
    }
    //swap
    left = rotate(left)
    return isSameTree(left, right);
};

function isSameTree(left: TreeNode| null, right: TreeNode | null): boolean {
    if (left === null) {
        return !right;
    }
    if (right === null) {
        return !left;
    }
    return left.val === right.val && isSameTree(left.left, right.left) && isSameTree(left.right, right.right)
}

function rotate(root: TreeNode | null): TreeNode {
    if (root === null || (!root.left && !root.right)) {
        return root;
    }
    return {
        val: root.val,
        left: rotate(root.right),
        right: rotate(root.left)
    }
}

