function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>();

    for (let i = 0, len = nums.length; i < len; i++) {
        const val = nums[i]
        if (map.has(val) && Math.abs(i - map.get(val)) <= k) {
            return true;
        } else {
            map.set(val, i);
        }
    }
    return false
};