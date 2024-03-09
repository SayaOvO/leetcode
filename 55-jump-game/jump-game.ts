function canJump(nums: number[]): boolean {
    let pos = 0, len = nums.length;

    if (len === 1) {
        return true;
    }

    while (true) {
        if (nums[pos] === 0) {
            return false;
        }
        if (nums[pos] + pos >= len - 1) {
            return true;
        }
        let max_pos = pos + 1;
        for (let i = pos + 2; i < pos + nums[pos] + 1; i++) {
            if (nums[i] + i >= nums[max_pos] + max_pos) {
                max_pos = i;
            }
        }
        pos = max_pos;
    }

};