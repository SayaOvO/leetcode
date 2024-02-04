function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            nums[k++] = nums[i]
        }
    }
    return k;
};