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

function getMinimumDifference(root: TreeNode | null): number {

    if (root === null || (!root.left && !root.right)) {
        return Number.MAX_SAFE_INTEGER;
    }

    let leftMin = getMinimumDifference(root.left)
    let rightMin = getMinimumDifference(root.right);
    const rootVal = root.val;
    if (root.left) {
        const max = getMax(root.left);
        if (rootVal - max < leftMin) {
            leftMin = rootVal - max;
        }
    }
    if (root.right) {
        const min = getMin(root.right)
        if (min - rootVal < rightMin) {
            rightMin = min - rootVal;
        }
    }
    return Math.min(leftMin, rightMin)
    
};

// get max val of the tree
function getMax(root: TreeNode): number {
    while (root.right) {
        root = root.right;
    }
    return root.val;
}

function getMin(root:TreeNode): number {

    while (root.left) {
        root = root.left;
    }

    return root.val;
}
