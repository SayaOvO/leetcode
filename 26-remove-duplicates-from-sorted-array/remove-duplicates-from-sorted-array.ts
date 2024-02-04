function removeDuplicates(nums: number[]): number {
    let k = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i+1] !== nums[i]) {
            nums[k] = nums[i]
            k++;
        }
    }
    return k;
};