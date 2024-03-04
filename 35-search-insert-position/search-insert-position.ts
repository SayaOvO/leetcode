function searchInsert(nums: number[], target: number): number {
   return searchInsertRec(nums, 0, nums.length - 1, target) 
};

function searchInsertRec(nums: number[], left: number, right: number, target: number): number {

    const mid = Math.floor(((left + right) / 2));
    if (left >= right) {
        console.log('mid:', mid);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            return left;
        } else {
            return right + 1;
        }
    }
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
        return searchInsertRec(nums, mid + 1, right, target)
    } else {
        return searchInsertRec(nums, left, mid - 1, target)
    }

}