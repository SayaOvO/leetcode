function removeDuplicates(nums: number[]): number {
    let i = 0, count = 1, len = nums.length;

    for (let j = 1; j < len; j++) {
        if (nums[j] !== nums[i] || count < 2) {
            if (nums[j] === nums[i]) {
                count++;
            } else {
                count = 1;
            }
            nums[++i] = nums[j]
        }
    }
    return ++i;
};