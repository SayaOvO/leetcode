function jump(nums: number[]): number {
    let steps = 0, len = nums.length; 
    if (len === 1) {
        return 0;
    }
    let pos = 0;
    while (nums[pos] + pos < len- 1) {
        let max_pos = pos + 1;
        for (let i = pos + 2; i < pos + nums[pos] + 1; i++) {
            if (nums[i] + i >= nums[max_pos] + max_pos) {
                max_pos = i;
            }
        }
        pos = max_pos
        steps++;
    }


    return steps + 1;
    
};