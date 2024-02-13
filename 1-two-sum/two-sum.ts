function twoSum(nums: number[], target: number): number[] {
   const map = new Map<number, number>();

    for (let i = 0, len = nums.length; i < len; i++) {
        const remaining = target - nums[i];
        if (map.has(remaining)) {
            return [map.get(remaining), i]
        } else {
            map.set(nums[i], i)
        }
    }
};