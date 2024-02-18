function summaryRanges(nums: number[]): string[] {
   const ranges = []; 


    let i = 0;
    for (let j = 0, len = nums.length; j < len; j++) {
        if (nums[j] !== nums[j+1] - 1) {
            ranges.push(nums[i] === nums[j] ? 
                `${nums[i]}` : `${nums[i]}->${nums[j]}`
            )
            i = j + 1;
        }
    }
    return ranges;
};