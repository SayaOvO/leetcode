/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    const dup: number[] = [...nums]
    for (let i = 0; i < len; i++) {
        nums[(i+k) % len] = dup[i];
    }
};