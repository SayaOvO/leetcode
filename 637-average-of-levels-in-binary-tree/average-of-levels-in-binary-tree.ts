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

function averageOfLevels(root: TreeNode | null): number[] {
    if (root === null) {
        return []
    }
    let arr: TreeNode[] = [root];
    const averages = []

    while (arr.length !== 0) {
        averages.push(
            arr.reduce((acc, item) => acc + item.val, 0) / arr.length
        )
        arr = arr.flatMap((node) => {
            const children = [];
            if (node.left) {
                children.push(node.left)
            }
            if (node.right) {
                children.push(node.right)
            }
            return children;
        })
    }
    return averages;
};