function singleNumber(nums: number[]): number {
    return nums.reduce((acc, x) => acc ^ x, 0)
};